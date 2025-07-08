class QuizApp {
  constructor(questions) {
    this.questions = questions;
    this.questionsPerPage = 3;
    this.currentPage = 0;
    this.selectedOptions = new Map(); // Map of questionIndex -> Set of selected options
    this.answered = new Array(questions.length).fill(false);

    // DOM Elements
    this.questionsContainer = document.getElementById("questions-container");
    this.prevButton = document.getElementById("prev-btn");
    this.nextButton = document.getElementById("next-btn");
    this.currentRangeSpan = document.getElementById("current-range");
    this.totalQuestionsSpan = document.getElementById("total-questions");
    this.paginationDiv = document.getElementById("pagination");

    // Event Listeners
    this.prevButton.addEventListener("click", () => this.previousPage());
    this.nextButton.addEventListener("click", () => this.nextPage());

    // Initialize
    this.totalQuestionsSpan.textContent = this.questions.length;
    this.setupPagination();
    this.displayQuestions();
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

    this.answered[questionIndex] = true;
    this.displayQuestions();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.displayQuestions();
      this.setupPagination();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.questions.length / this.questionsPerPage);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
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
  const pass = prompt("Enter the password to access the questions");
  if (pass !== "I am noob") {
    alert("Invalid password");
    return;
  }
  if (typeof questions !== "undefined") {
    new QuizApp(questions);
  } else {
    console.error("Questions not loaded!");
  }
});
