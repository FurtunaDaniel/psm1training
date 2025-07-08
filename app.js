class QuizApp {
  constructor(questions) {
    this.questions = questions;
    this.questionsPerPage = 3;
    this.currentPage = parseInt(localStorage.getItem("lastPage")) || 0;
    this.selectedOptions = new Map(); // Map of questionIndex -> Set of selected options
    this.answered = new Array(questions.length).fill(false);

    // Initialize scores from localStorage or default to 0
    this.scores = {
      correct: parseInt(localStorage.getItem("correctAnswers")) || 0,
      wrong: parseInt(localStorage.getItem("wrongAnswers")) || 0,
      total: parseInt(localStorage.getItem("totalAnswered")) || 0,
    };

    // DOM Elements
    this.questionsContainer = document.getElementById("questions-container");
    this.prevButton = document.getElementById("prev-btn");
    this.nextButton = document.getElementById("next-btn");
    this.currentRangeSpan = document.getElementById("current-range");
    this.totalQuestionsSpan = document.getElementById("total-questions");
    this.paginationDiv = document.getElementById("pagination");

    // Score Elements
    this.correctAnswersSpan = document.getElementById("correct-answers");
    this.wrongAnswersSpan = document.getElementById("wrong-answers");
    this.totalAnsweredSpan = document.getElementById("total-answered");
    this.resetScoreButton = document.getElementById("reset-score");

    // Event Listeners
    this.prevButton.addEventListener("click", () => this.previousPage());
    this.nextButton.addEventListener("click", () => this.nextPage());
    this.resetScoreButton.addEventListener("click", () => this.resetScore());

    // Initialize
    this.totalQuestionsSpan.textContent = this.questions.length;
    this.updateScoreDisplay();
    this.setupPagination();
    this.displayQuestions();
  }

  resetScore() {
    if (
      confirm(
        "Are you sure you want to reset your score? This cannot be undone."
      )
    ) {
      // Reset scores in memory
      this.scores = {
        correct: 0,
        wrong: 0,
        total: 0,
      };

      // Reset scores in localStorage
      localStorage.removeItem("correctAnswers");
      localStorage.removeItem("wrongAnswers");
      localStorage.removeItem("totalAnswered");

      // Reset answered questions
      this.answered = new Array(this.questions.length).fill(false);
      this.selectedOptions = new Map();

      // Update display
      this.updateScoreDisplay();
      this.displayQuestions();
    }
  }

  setupPagination() {
    const totalPages = Math.ceil(this.questions.length / this.questionsPerPage);
    this.paginationDiv.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i + 1;
      pageButton.classList.toggle("active", i === this.currentPage);
      pageButton.addEventListener("click", () => this.goToPage(i));
      this.paginationDiv.appendChild(pageButton);
    }
  }

  goToPage(pageNumber) {
    this.currentPage = pageNumber;
    localStorage.setItem("lastPage", pageNumber);
    this.displayQuestions();
    this.setupPagination();
    this.updateNavigationButtons();
  }

  createQuestionBlock(question, index) {
    const questionBlock = document.createElement("div");
    questionBlock.className = "question-block";

    // Question text
    const questionText = document.createElement("div");
    questionText.className = "question";
    questionText.textContent = `${index + 1}. ${question.question}`;
    if (
      Array.isArray(question.correctAnswers) &&
      question.correctAnswers.length > 1
    ) {
      questionText.textContent += ` (Choose ${question.correctAnswers.length})`;
    }
    questionBlock.appendChild(questionText);

    // Options container
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    // Initialize selected options for this question if not exists
    if (!this.selectedOptions.has(index)) {
      this.selectedOptions.set(index, new Set());
    }

    // Create options
    question.options.forEach((option, optionIndex) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";
      if (this.selectedOptions.get(index).has(optionIndex)) {
        optionDiv.classList.add("selected");
      }
      optionDiv.textContent = option;

      if (this.answered[index]) {
        const isCorrect = Array.isArray(question.correctAnswers)
          ? question.correctAnswers.includes(optionIndex)
          : optionIndex === question.correctAnswer;

        if (isCorrect) {
          optionDiv.classList.add("correct");
        } else if (
          this.selectedOptions.get(index).has(optionIndex) &&
          !isCorrect
        ) {
          optionDiv.classList.add("incorrect");
        }
        optionDiv.style.cursor = "default";
      } else {
        optionDiv.addEventListener("click", () =>
          this.selectOption(index, optionIndex)
        );
      }

      optionsContainer.appendChild(optionDiv);
    });
    questionBlock.appendChild(optionsContainer);

    // Check button
    if (!this.answered[index]) {
      const checkButton = document.createElement("button");
      checkButton.className = "check-button";
      checkButton.textContent = "Check Answer";
      checkButton.addEventListener("click", () => this.checkAnswer(index));
      questionBlock.appendChild(checkButton);
    }

    // Feedback div
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = "feedback";
    if (this.answered[index]) {
      const question = this.questions[index];
      const correctAnswers = Array.isArray(question.correctAnswers)
        ? question.correctAnswers
        : [question.correctAnswer];

      const selectedOptions = this.selectedOptions.get(index);
      const isCorrect =
        correctAnswers.length === selectedOptions.size &&
        [...selectedOptions].every((selected) =>
          correctAnswers.includes(selected)
        );

      feedbackDiv.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
      if (isCorrect) {
        feedbackDiv.textContent = "Correct! Well done!";
      } else {
        const correctOptionsText = correctAnswers
          .map((index) => question.options[index])
          .join(" AND ");
        feedbackDiv.textContent = `Incorrect. The correct answer${
          correctAnswers.length > 1 ? "s are" : " is"
        }: ${correctOptionsText}`;
      }
    }
    questionBlock.appendChild(feedbackDiv);

    return questionBlock;
  }

  displayQuestions() {
    const startIndex = this.currentPage * this.questionsPerPage;
    const endIndex = Math.min(
      startIndex + this.questionsPerPage,
      this.questions.length
    );

    this.questionsContainer.innerHTML = "";
    for (let i = startIndex; i < endIndex; i++) {
      const questionBlock = this.createQuestionBlock(this.questions[i], i);
      this.questionsContainer.appendChild(questionBlock);
    }

    this.currentRangeSpan.textContent = `${startIndex + 1}-${endIndex}`;
    this.updateNavigationButtons();
  }

  selectOption(questionIndex, optionIndex) {
    if (this.answered[questionIndex]) return;

    const question = this.questions[questionIndex];
    const isMultipleChoice = Array.isArray(question.correctAnswers);
    const maxSelections = isMultipleChoice ? question.correctAnswers.length : 1;
    const selectedOptions = this.selectedOptions.get(questionIndex);

    if (isMultipleChoice) {
      if (selectedOptions.has(optionIndex)) {
        selectedOptions.delete(optionIndex);
      } else if (selectedOptions.size < maxSelections) {
        selectedOptions.add(optionIndex);
      }
    } else {
      selectedOptions.clear();
      selectedOptions.add(optionIndex);
    }

    // Update UI
    this.displayQuestions();
  }

  updateScoreDisplay() {
    this.correctAnswersSpan.textContent = this.scores.correct;
    this.wrongAnswersSpan.textContent = this.scores.wrong;
    this.totalAnsweredSpan.textContent = this.scores.total;
  }

  updateScores(isCorrect) {
    if (isCorrect) {
      this.scores.correct++;
    } else {
      this.scores.wrong++;
    }
    this.scores.total++;

    // Save scores to localStorage
    localStorage.setItem("correctAnswers", this.scores.correct);
    localStorage.setItem("wrongAnswers", this.scores.wrong);
    localStorage.setItem("totalAnswered", this.scores.total);

    this.updateScoreDisplay();
  }

  checkAnswer(questionIndex) {
    const selectedOptions = this.selectedOptions.get(questionIndex);
    if (selectedOptions.size === 0) {
      const questionBlock =
        this.questionsContainer.children[questionIndex % this.questionsPerPage];
      const feedbackDiv = questionBlock.querySelector(".feedback");
      feedbackDiv.className = "feedback incorrect";
      feedbackDiv.textContent = "Please select an answer first.";
      return;
    }

    const question = this.questions[questionIndex];
    const correctAnswers = Array.isArray(question.correctAnswers)
      ? question.correctAnswers
      : [question.correctAnswer];

    const isCorrect =
      correctAnswers.length === selectedOptions.size &&
      [...selectedOptions].every((selected) =>
        correctAnswers.includes(selected)
      );

    if (!this.answered[questionIndex]) {
      this.updateScores(isCorrect);
      this.answered[questionIndex] = true;
    }

    this.displayQuestions();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      localStorage.setItem("lastPage", this.currentPage);
      this.displayQuestions();
      this.setupPagination();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.questions.length / this.questionsPerPage);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
      localStorage.setItem("lastPage", this.currentPage);
      this.displayQuestions();
      this.setupPagination();
    }
  }

  updateNavigationButtons() {
    const totalPages = Math.ceil(this.questions.length / this.questionsPerPage);
    this.prevButton.disabled = this.currentPage === 0;
    this.nextButton.disabled = this.currentPage === totalPages - 1;
  }
}

// Initialize the app when questions are loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if password was already validated
  const isPasswordValidated =
    localStorage.getItem("passwordValidated") === "true";

  if (!isPasswordValidated) {
    const pass = prompt("Enter the password to access the questions");
    if (pass !== "I am noob") {
      alert("Invalid password");
      return;
    }
    // Store password validation status
    localStorage.setItem("passwordValidated", "true");
  }

  if (typeof questions !== "undefined") {
    new QuizApp(questions);
  } else {
    console.error("Questions not loaded!");
  }
});
