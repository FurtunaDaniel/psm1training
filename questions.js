const questions = [
  {
    question:
      "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario.",
    options: [
      "There should be six Product Owners, one for each Scrum Team",
      "There should be six Product Owners, reporting to a chief Product Owner",
      "The product has one Product Backlog",
      "Each Scrum Team should have a separate Product Backlog",
      "There should be only one Product Owner",
    ],
    correctAnswers: [2, 4],
  },
  {
    question:
      "A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding he is accountable for the Product Backlog. However, he is unsure about his responsibilities. Which two activities are part of the Product Owner role according to Scrum?",
    options: [
      "Ensuring that the most valuable functionality is produced first, at all times",
      "Interacting with stakeholders",
      "Providing the Scrum Team with detailed specifications",
      "Describing features as Use Cases",
      "Creating detailed functional test cases",
    ],
    correctAnswers: [0, 1],
  },
  {
    question:
      "User documentation is part of your Definition of Done. However, there aren't enough technical writers for all teams. Your Developers don't have a technical writer. What should you do?",
    options: [
      "Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out",
      "Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers",
      "Wait until you have a technical writer on your Scrum Team to take care of this",
      "Your Scrum Team is still responsible for creating user documentation. In this case, the Scrum Team members will write it",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a technical specialist who is external to the teams. What are two key concerns for the Scrum Master to take into account in this situation?",
    options: [
      "The desire to maintain a stable velocity",
      "The benefit of Developers figuring out a solution for themselves",
      "The need to have enough work to keep all Developers busy",
      "The ability of the Developers to produce integrated Increments",
    ],
    correctAnswers: [1, 3],
  },
  {
    question: "The Product Backlog is ordered by:",
    options: [
      "The Product Owner with the most valuable items placed at the top",
      "Risk, where safer items are at the top, and riskier items are at the bottom",
      "Items are randomly arranged",
      "Size, where small items are at the top and large items are at the bottom",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
    options: [
      "The Sprint is extended and future Sprints use this new duration",
      "The Sprint length holds and the Scrum Team continuously learns what is actually possible to do within a Sprint of this length",
      "The Sprint is extended temporarily. Lessons are taken to ensure it doesn't happen again",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which topics should be discussed in the Sprint Review?",
    options: [
      "The Scrum process, and how it was used during the Sprint",
      "Coding and engineering practices",
      "Sprint results",
      "All of the above",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "A member of the Scrum Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
    options: [
      "Add security to the Definition of Done",
      "Tell the Product Owner to stop further development of features until the issues are fixed",
      "Create a Product Backlog item for security",
      "Go check with the testers",
      "Ask the person to share the issue with the team as soon as possible",
    ],
    correctAnswer: 4,
  },
  {
    question: "What does it mean for a Scrum Team to be cross-functional?",
    options: [
      "The Scrum Team includes not only Developers but also business analysts, architects, and testers",
      "The Scrum Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an Increment of software",
      "Developers on the Scrum Team work closely with business analysts, architects, Developers and testers who are not on the team",
      "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, Developers and testers",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Sprint burndown charts are an efficient tracking tool, because they show:",
    options: [
      "An estimate of the total work remaining for the Sprint",
      "How much effort has gone into a Sprint",
      "How many hours have been worked by each Scrum Team member",
      "How many Product Backlog items remain",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "How much work must a Scrum Team do to a Product Backlog item it selects for a Sprint?",
    options: [
      "A proportional amount of time on analysis, design, programming, testing, and documentation",
      "As much as it can fit into the Sprint. Any remaining work will be transferred to a subsequent Sprint",
      "All development work and at least some testing",
      "As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the Definition of Done",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which statement best describes the Sprint Backlog as outcome of the Sprint Planning?",
    options: [
      "It is a complete list of all work to be done in a Sprint",
      "It is the Scrum Team's plan for the Sprint",
      "It is the list of Product Backlog items selected for the Sprint",
      "It is a list of features to be implemented in a Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "If burndown charts are used to visualize progress, what does a trend line through a release burndown chart indicate?",
    options: [
      "The amount of work remaining over time",
      "The accuracy of original estimates",
      "When all work will be completed based on current progress and historical trends",
      "Individual worker productivity",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who is responsible for engaging the stakeholders?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
      "The Project Manager",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog item?",
    options: [
      "It should be returned to the Product Backlog",
      "The Increment should not be released",
      "It should not be included in the Increment",
      "The Sprint should be extended",
      "The Definition of Done should be made less stringent",
    ],
    correctAnswers: [0, 2],
  },
  {
    question:
      "Which two of the following are true about the Scrum Master role?",
    options: [
      "The Scrum Master is accountable for the Product Backlog",
      "The Scrum Master teaches the Developers to keep the Scrum meetings to their time-box",
      "The Scrum Master helps those outside the team interact with the Scrum Team",
      "The Scrum Master assigns tasks to Developers when they need work",
      "The Scrum Master is responsible for updating the Sprint Burndown",
    ],
    correctAnswers: [1, 2],
  },
  {
    question: "What are three benefits of self-management?",
    options: [
      "Increased creativity",
      "Increased self-accountability",
      "Increased commitment",
      "Increased accuracy of estimates",
      "Increased rule compliance",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    question: "Which three of the following are time-boxed events in Scrum?",
    options: [
      "Sprint Planning",
      "Release Testing",
      "Sprint Retrospective",
      "Daily Scrum",
      "Release Planning",
    ],
    correctAnswers: [0, 2, 3],
  },
  {
    question:
      "Who is responsible for clearly expressing Product Backlog items?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
      "The business analyst who represents the Product Owner in the Scrum Team",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What is the best suited structure for Scrum Teams in order to produce integrated Increments?",
    options: [
      "Each Scrum Team works only one technical layer of the system (e.g. GUI, database, middle tier, interfaces)",
      "Each Scrum Team develops functionality from beginning to end throughout all technical layers",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why should the Product Owner be present at the Daily Scrum?",
    options: [
      "He/She doesn't need to be there",
      "To hear about impediments in functionality",
      "To represent the stakeholder's point of view",
      "To participate as a Scrum Team member",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What two techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which development techniques to apply?",
    options: [
      "Involve the complete Scrum Team",
      "Use coaching techniques; such as open questions and active listening",
      "Ask an external technical specialist to make the decision",
      "Send every team member to the company's Human Resources department to express their concerns",
    ],
    correctAnswers: [0, 1],
  },
  {
    question: "What enhances the transparency of an Increment?",
    options: [
      "Doing all work needed to meet the Definition of Done",
      "Reporting Sprint progress to the stakeholders daily",
      "Keeping track of and estimating all undone work to be completed in a separate Sprint",
      "Updating Sprint tasks properly in the electronic tracking tool",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who determines how work is performed during the Sprint?",
    options: [
      "Architects",
      "The Scrum Team",
      "The Scrum Master",
      "Subject matter experts",
      "The Developers managers",
    ],
    correctAnswer: 1,
  },
  {
    question: "When does the second Sprint start?",
    options: [
      "Once the architectural changes for the second Sprint have been approved by the senior architect",
      "After the Product Backlog for the second Sprint has been selected",
      "Immediately after the first Sprint",
      "After the customer completes acceptance testing of the first Sprint",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is included in the Sprint Backlog?",
    options: [
      "Tasks",
      "Use Cases",
      "Tests",
      "Any of the above (or others) which are a decomposition of the selected Product Backlog items",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which of the following are true about the Product Owner role?",
    options: [
      "The Product Owner is one person",
      "The Product Owner is accountable for ordering the Product Backlog",
      "Multiple people can share the Product Owner role on a Scrum Team",
      "The Product Owner role can be played by a committee or a team of people",
    ],
    correctAnswers: [0, 1],
  },
  {
    question:
      "True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team?",
    options: [
      "Its productivity is likely to decrease",
      "Its productivity is likely to stay the same",
      "Its productivity is likely to increase",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "A Scrum Master is introducing Scrum to a new Scrum Team. The Scrum Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take?",
    options: [
      "Call a meeting between the Scrum Team and senior management",
      "Comply with the decision of the self-managing team",
      "Consult with the Product Owner to see how he/she feels about the situation",
      "Begin facilitating productive and useful Sprint Retrospectives",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which two things are appropriate for a Scrum Master to do if the Developers don't have the engineering tools and infrastructure to completely finish each selected Product Backlog item?",
    options: [
      "Coach the Scrum Team to improve its skills, tools, and infrastructure over time and adjust the Definition of Done accordingly",
      "Encourage the Product Owner to accept partially 'Done' Increments until the situation improves",
      "Refocus the current Sprint on establishing the Scrum Team's infrastructure instead of delivering an Increment",
      "Declare the Scrum Team not ready for Scrum",
      "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances",
    ],
    correctAnswers: [0, 4],
  },
  {
    question:
      "When is implementation of a Product Backlog item considered complete?",
    options: [
      "At the end of the Sprint",
      "When the item has no work remaining in order to be potentially released",
      "When QA reports that the item passes all acceptance criteria",
      "When all work in the Sprint Backlog related to the item is finished",
    ],
    correctAnswer: 1,
  },
  {
    question: "Choose two responsibilities of a self-managing Scrum Team.",
    options: [
      "Reorder the Product Backlog",
      "Pull Product Backlog items for the Sprint",
      "Do the work planned in the Sprint Backlog",
      "Increase velocity",
      "Report daily progress to stakeholders",
    ],
    correctAnswers: [1, 2],
  },
  {
    question: "Every Scrum Team should have:",
    options: [
      "At least one representative from each major software engineering discipline (like QA, Dev, UX)",
      "The competencies and skills needed to deliver a Done Increment in a Sprint",
      "One Lead Developer and no more than 8 other members",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Why does the Product Owner want the Scrum Team to adhere to its Definition of Done?",
    options: [
      "To have complete transparency into what has been done at the end of each Sprint",
      "To be able to reprimand the team when they don't meet their velocity goal for the Sprint",
      "To know what the team will deliver over the next three Sprints",
      "To predict the team's productivity over time",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "During a Sprint Retrospective, for what is the Scrum Master responsible?",
    options: [
      "Prioritizing the resulting action items",
      "Participating as a Scrum team member and facilitating as requested or needed",
      "Acting as a scribe to capture the Developers answers",
      "Summarizing and reporting the discussions to management",
    ],
    correctAnswer: 1,
  },
  {
    question: "The Scrum Team should have all the skills needed to:",
    options: [
      "Turn Product Backlog items into an Increment of potentially releasable product functionality",
      "Do all of the development work, except for specialized testing that requires additional tools and environments",
      "Complete the project within the date and cost as calculated by the Product Owner",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "During the Sprint, the Scrum Master's role is to do which two of the following:",
    options: [
      "Facilitate inspection and adaptation opportunities as requested or needed",
      "Coaching the team members in the self-management",
      "Ensure the Product Owner attends all Scrum events",
      "Escalate team conflicts to functional line managers",
      "Monitor the progress of the Developers",
      "Assign tasks with the Scrum Team",
    ],
    correctAnswers: [0, 1],
  },
  {
    question:
      "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take?",
    options: [
      "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog",
      "Suggest that the Developers do the ordering to be sure that it is a feasible ordering of work",
      "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value",
      "Present the Product Owner with an ordered Product Backlog to use",
      "Encourage the Product Owner to work with the Developers to see which items technically are fastest to implement",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "True or False: The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "Which statement best describes the Sprint Review?",
    options: [
      "It is used to congratulate the Developers if it did what it forecast, or to punish the Developers if it failed to meet its forecast",
      "It is a demo at the end of the Sprint for everyone in the organization to check on the work done",
      "It is a mechanism to control the Developers activities during a Sprint",
      "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next",
    ],
    correctAnswer: 3,
  },
  {
    question: "Who owns the Sprint Backlog?",
    options: [
      "The Scrum Team",
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
    ],
    correctAnswer: 3,
  },
  {
    question: "When might a Sprint be abnormally cancelled?",
    options: [
      "When the Scrum Team feels that the work is too hard",
      "When the Sprint Goal becomes obsolete",
      "When the sales department has an important new opportunity",
      "When it becomes clear that not everything will be finished by the end of the Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question: "A Sprint Retrospective should be held:",
    options: [
      "At the end of each Sprint",
      "At the beginning of each Sprint",
      "Only when the Scrum Team determines it needs one",
      "At the end of the last Sprint in a project or a release",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "A new Developer is having continuing conflicts with existing Developers and creating the hostile environment. If necessary, who is responsible for removing the team member?",
    options: [
      "The hiring manager is responsible, because he/she hired the Developer",
      "The Scrum Manager is responsible, because he/she removes Impediments",
      "The Developers are responsible, and may need help from the Scrum Master",
      "The Product Owner is responsible, because he/she controls the return on investment (ROI)",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which three purposes does the Definition of Done serve?",
    options: [
      "Guide the Developers on how many Product Backlog items to select for the Sprint",
      "Create a shared understanding of when work is complete",
      "Describe the purpose, objective, and time-box of each Scrum event",
      "Describe the work that must be done before the Sprint is allowed to end",
      "Increase transparency",
    ],
    correctAnswers: [0, 1, 4],
  },
  {
    question:
      "During a Sprint Retrospective, the Developers proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master?",
    options: [
      "Consider the request and decide on which days the Daily Scrum should occur",
      "Coach the team on why the Daily Scrum is important as an opportunity to update the plan",
      "Have the Developers vote",
      "Learn why the Developers wants this and work with them to improve the outcome of the Daily Scrum",
      "Acknowledge and support the self-managing team's decision",
    ],
    correctAnswers: [1, 3],
  },
  {
    question: "When should a Sprint Goal be created?",
    options: [
      "It should have been created in the previous Sprint during Product Backlog refinement",
      "It must be established before Sprint Planning in order to begin planning",
      "A Sprint Goal is not mandatory in Scrum",
      "At any time during the Sprint",
      "During Sprint Planning",
    ],
    correctAnswer: 4,
  },
  {
    question:
      "True or False: Every Scrum team must have a Product Owner and Scrum Master.",
    options: [
      "True. Outcomes affected by their participation and availability",
      "False. A Product Owner can be replaced by a business analyst in the Scrum Team",
      "False. A Scrum Master is only required when asked for by the Scrum Team",
      "True. Each must be 100% dedicated to the Scrum Team",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who can abnormally terminate a Sprint?",
    options: [
      "The Scrum Master",
      "The Scrum Team or its members",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "True or False: The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question:
      "Which two of the following are appropriate topics for discussion during a Sprint Retrospective?",
    options: [
      "Identifying high priority process improvements for the next Sprint",
      "The order of items in the Product Backlog",
      "How the team collaborates",
      "Documenting acceptance criteria for items in the next Sprint",
    ],
    correctAnswers: [0, 2],
  },
  {
    question:
      "A Scrum Master is working with a Scrum Team that has members in different physical locations. The Scrum Team meets in a variety of meeting rooms and has much to do logistically (for example, set up conference calls) before the Daily Scrum. What action should the Scrum Master take?",
    options: [
      "Allow the Scrum Team to self-manage and determine for itself what to do",
      "Set up the meeting and tell the Scrum Team that is how it will be done",
      "Ask the Scrum Team members to alternate who is responsible for meeting setup",
      "Inform management and ask them to solve it",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "True or False: Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: A Scrum Master is essentially the same thing as a traditional PM (Project Manager).",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take?",
    options: [
      "Inform the Product Owner's functional manager",
      "Stop the Sprint, send the Product Owner to a course and restart",
      "Bring up the problem in the Sprint Retrospective",
      "Coach the Product Owner in the values of Scrum and incremental delivery",
      "Nominate a proxy Product Owner",
    ],
    correctAnswers: [2, 3],
  },
  {
    question:
      "True or False: Multiple Scrum Teams working on the same product, each team should maintain a separate Product Backlog.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "For the purpose of transparency, when does Scrum say a new Increment of working software must be available?",
    options: [
      "After the acceptance testing phase",
      "Before the release Sprint",
      "Every 3 Sprints",
      "At the end of every Sprint",
      "When the Product Owner asks to create one",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "True or False: Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "During a Sprint Retrospective, for what is the Product Owner responsible?",
    options: [
      "Participating as a Scrum Team member",
      "Summarizing and reporting the discussions to the stakeholders that he/she represents in the Scrum Team",
      "Capturing requirements for the Product Backlog",
      "The Product Owner should not take part in Sprint Retrospectives",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Marian is the Product Owner envisioning a project for a new release of her product. She made a projection of a release date based upon a sustained velocity of 17 completed units of work per Sprint. Over the first 3 Sprints, the average velocity was 13 for work that the Developers estimated as 90% done. The Developers, feeling the need to meet the plan, figured that a velocity of 17 was within their reach. A good way to continue is:",
    options: [
      "The Developers makes sure that all of the selected scope per Sprint is as 'Done' as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint, so it doesn't mess up the Product Backlog",
      "Add enough people to the Developers for the deadline to be made",
      "The opportunity to inspect and adapt is lost. Opaqueness has replaced transparency. Predictability has dropped below zero. The produced software is not usable. As the rules of Scrum have not been respected, it is the Scrum Master's duty to assess whether repair is possible, or a restart with a more reliable team. If not, the Scrum Master should cancel the project",
      "The Developers should remind Marian to find funding for enough Release Sprints in which the remaining work can be done",
    ],
    correctAnswer: 0,
  },
  {
    question: "The time-box for a Daily Scrum?",
    options: [
      "Two minutes per person",
      "15 minutes",
      "15 minutes for a 4 week sprint. For shorter Sprints it is usually shorter",
      "4 hours",
      "The same time of day every day",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which phrase best describes a Product Owner?",
    options: [
      "Go-between Developers and customers",
      "Value optimizer",
      "Requirements engineer",
      "Team manager",
    ],
    correctAnswer: 1,
  },
  {
    question: "The length of a Sprint should be:",
    options: [
      "Short enough to keep the business risk acceptable to the Product Owner",
      "Short enough to be able to synchronize the development work with other business events",
      "No more than one calendar month",
      "All of these answers are correct",
    ],
    correctAnswer: 3,
  },
  {
    question: "What are two responsibilities of testers in a Scrum Team?",
    options: [
      "Verifying the work of programmers",
      "Everyone in the Developers is responsible for quality",
      "Tracking quality metrics",
      "Finding bugs",
      "Scrum has no 'tester' role",
    ],
    correctAnswers: [1, 4],
  },
  {
    question:
      "The CEO asks the Developers to add a 'very important' item to a Sprint that is in progress. What should the Developers do?",
    options: [
      "Add the item to the current Sprint and drop an item of equal size",
      "Add the item to the current Sprint without any adjustments",
      "Inform the Product Owner so he/she can work with the CEO",
      "Add the item to the next Sprint",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the role of management in Scrum?",
    options: [
      "To facilitate the Scrum Teams with insights and resources that help them improve",
      "To monitor the Scrum Team's productivity",
      "To identify and remove people that aren't working hard enough",
      "To continually monitor staffing levels of the Developers",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which technique is the best way the Scrum Master can ensure that the Developers communicates effectively with the Product Owner?",
    options: [
      "Monitor communications between them and facilitate direct collaboration",
      "Teach the Developers to talk in terms of business needs and objectives",
      "Teach the Product Owner about the technologies employed during the Sprints",
      "Act as a go-between for them",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    options: [
      "Just enough tasks for the Scrum Master to be confident in the Developers understanding of the Sprint",
      "The entire Sprint Backlog must be identified and estimated by the end of the Sprint Planning meeting",
      "Enough so the Developers can create its best forecast of what is can do, and to start the first several days of the Sprint",
      "Just enough to understand design and architectural implications",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Who is responsible for managing the progress of work during a Sprint?",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The most junior member of the Team",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who is responsible for collaborating with stakeholders?",
    options: [
      "The Developers",
      "The Team Manager",
      "The Project Manager",
      "The Scrum Team",
      "The Business Analyst",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What two factors are best considered when establishing the Sprint length?",
    options: [
      "The organization has mandated similar length sprints",
      "The level of uncertainty over the technology to be used",
      "The frequency at which team formation can be changed",
      "The risk of being disconnected from the stakeholders",
    ],
    correctAnswers: [1, 3],
  },
  {
    question: "Which of these may a Developers deliver at the end of a Sprint?",
    options: [
      "Failing unit tests, to identify acceptance tests for the next Sprint",
      "An Increment of software with minor known bugs in it",
      "An Increment of working software that is 'done'",
      "A single document, if that is what the Scrum Master asked for",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who creates a Product Backlog item's estimate?",
    options: [
      "The Developers after clarifying requirements with the Product Owner",
      "The Product Owner with input from the Developers",
      "The most senior people in the organization, including architects and subject matter experts",
      "The Scrum Master",
      "The Developers, alone",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who starts the Daily Scrum?",
    options: [
      "The person coming in last. This encourages people to be on time and helps to stay within the time-box",
      "Whoever the Developers decides should start",
      "The person who has the token",
      "The Scrum Master. This ensures that the Developers have the meeting and stays within the time-box",
      "The person who last broke the build",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up?",
    options: [
      "Introduce a bonus system for the top performers in the team",
      "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history",
      "Have the development managers for each Developer introduce their direct reports and go over their responsibilities on the Scrum Team",
      "Ensure the Scrum Team members have compatible personalities",
      "Ensure the team understands they need a Definition of Done",
      "Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions",
    ],
    correctAnswers: [1, 4, 5],
  },
  {
    question:
      "The Developers selects a set of Product Backlog items for a Sprint Backlog with the intent to get the selected items 'Done' by the end of the Sprint. Which three phrases best describe the purpose of a Definition of Done?",
    options: [
      "It controls whether the Developers have performed their tasks",
      "It provides a template for elements that need to be included in the technical documentation",
      "It creates transparency over the work inspected at the Sprint Review",
      "It tracks the percent completeness of a Product Backlog item",
      "It guides the Developers is creating a forecast at the Sprint Planning",
      "It defines what it takes for an Increment to be ready for release",
    ],
    correctAnswers: [2, 4, 5],
  },
  {
    question:
      "The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days?",
    options: [
      "Opportunities to inspect and adapt the Sprint Backlog are lost",
      "Impediments are raised and resolved more slowly",
      "The Product Owner cannot accurately report progress to the stakeholders",
      "Too much work is spent updating the Scrum board before the meeting",
      "The Scrum Master loses the ability to update the Gantt chart properly",
      "The Sprint Backlog may become inaccurate",
    ],
    correctAnswers: [0, 1, 5],
  },
  {
    question: "Which statement best describes Scrum?",
    options: [
      "A defined and predictive process that confirms to the principles of Scientific Management",
      "A complete methodology that defines how to develop software",
      "A cookbook that defines best practices for software development",
      "A framework within which complex products in complex environments are developed",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which Scrum Values are exhibited by not building Product Backlog items that have low business value?",
    options: [
      "Economic Value Added",
      "Respect",
      "Focus",
      "Earned Value",
      "Courage",
    ],
    correctAnswers: [1, 2, 4],
  },
  {
    question:
      "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    options: [
      "The Scrum Team with the highest velocity pulls Product Backlog items first",
      "The Developers pull in work in agreement with the Product Owner",
      "The Product Owner should provide each team with its own Product Backlog",
      "Each Scrum Team takes an equal numbers of items",
      "The Product Owner decides",
    ],
    correctAnswer: 1,
  },
  {
    question: "How often should Developers change?",
    options: [
      "As needed, while taking into account a short term reduction in productivity",
      "Never, because it reduces productivity",
      "As needed, with no special allowance for changes in productivity",
      "Every Sprint to promote shared learning",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Who should make sure everyone on the Developers does his or her tasks for the Sprint?",
    options: [
      "The Project Manager",
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "When is it most appropriate for a Developers to change the Definition of Done?",
    options: [
      "During Spring Planning",
      "Prior to starting a new Sprint",
      "During the Sprint Retrospective",
      "Prior to starting a new project",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "As the Sprint Planning meeting progresses, the Developers sees that the workload is greater than they can handle. Which two are valid actions?",
    options: [
      "Recruit additional Developers before the work can begin",
      "The Developers ensures that the Product Owner is aware, starts the Sprint, and monitors progress",
      "Cancel the Sprint",
      "Remove or change selected Product Backlog items",
      "The Developers works overtime during this Sprint",
    ],
    correctAnswers: [1, 3],
  },
  {
    question:
      "Currently, your Developers are organized to address a single layer only (for example, front end, middle tier, back end, and interfaces). What are three things to consider when deciding to move away from such component teams toward feature teams?",
    options: [
      "You cannot do Scrum without feature teams",
      "Productivity may suffer when making this kind of move",
      "Getting support from the business side first helps",
      "Feature teams have less communication overhead",
      "With feature teams, it is easier to calculate the productivity per team",
    ],
    correctAnswers: [1, 2, 3],
  },
  {
    question:
      "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    options: [
      "When the Product Owner identifies new work",
      "As soon as possible after they are identified",
      "When the Scrum Master has time to enter them",
      "During the Daily Scrum after the Developers approves them",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    options: [
      "To gather status and progress information to report to management",
      "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down",
      "He or she does not have to be there; he or she only has to ensure the Developers have a Daily Scrum",
      "To make sure every team member answers the three questions",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "You have six teams using a traditional method to deliver a product. Your management has asked you to start using Scrum. In the initial project there were separate plans and teams for the layers of a software system, i.e. one for thefrontend, one for the middle tier, one for the back-end, and one for the interfaces and services. This resembles what is known as component teams. But you have read that it's a good idea to have teams organized by feature. What are the advantages of keeping component teams while starting Scrum?",
    options: [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best, and how to potentially re-organize towards this",
      "Component teams generally have the skills needed to create a working Increment of software that provides business value",
      "Because they have worked together for some time, they are likely able to start producing shippable Increments faster that new feature teams would",
      "There are fewer cross-team dependencies than working in feature teams",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "True or False: A properly functioning Scrum Team will have at least one Release Sprint and may well have several.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: Scrum is a methodology that tells in detail how to build software incrementally.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "For which is the Scrum Master responsible?",
    options: [
      "Managing the performance of the Scrum Team",
      "The meetings and the objectives that a Scrum Team sets for itself",
      "The Scrum framework being adopted and used properly",
      "Keeping track of resource allocation",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "The Developers asks their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a specific software component. Without that component there won't be enough work in the next Sprint to occupy the full team. The Product Owner asks the Scrum Master for help. What would be good advice to give the Product Owner?",
    options: [
      "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog",
      "Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate sprint",
      "Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Developers",
    ],
    correctAnswer: 0,
  },
  {
    question: "What are three ways Scrum promotes self-management?",
    options: [
      "By not allowing documentation",
      "By the Developers deciding what work to do in a Sprint",
      "By preventing stakeholders from entering the development room",
      "By removing titles for Developers",
      "By being a lightweight framework",
    ],
    correctAnswers: [1, 3, 4],
  },
  {
    question:
      "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    options: [
      "Minimizing dependencies between teams",
      "Clear definition of requirements",
      "Meeting original scope projections",
      "Making sure there's enough work for everyone on every team",
      "Maximizing velocity",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does it mean to say that an event has a time-box?",
    options: [
      "The event must happen at a set time",
      "The event must happen by a given time",
      "The event must take at least a minimum amount of time",
      "The event can take no more than a maximum amount of time",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which outcome is expected as Scrum Teams mature?",
    options: [
      "They will improve their Definition of Done to include more stringent criteria",
      "The Sprint Retrospectives will grow to be longer than 4 hours",
      "There is no need for a time-boxed Sprint, since time-boxes are only for new Scrum Teams",
      "Sprint Reviews will no longer be needed",
      "A Scrum Master is no longer needed since they are a mature team now",
    ],
    correctAnswer: 0,
  },
  {
    question: "The Product Owner must release each Increment to production.",
    options: [
      "When it makes sense",
      "To make sure the Developers are done every Sprint",
      "Whenever the product is free of defects",
      "Without exception",
    ],
    correctAnswer: 0,
  },
  {
    question: "Who creates the Definition of Done?",
    options: [
      "The Scrum Master as he/she is responsible for the Developers productivity",
      "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definition",
      "The Product Owner as he/she is responsible for the product's success",
      "The development organization (or Developers if none is available from the development organization)",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master how to coordinate their work with the order teams. What should the Scrum Master do?",
    options: [
      "Teach the Product Owner to work with the lead Developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint",
      "Teach them that it is their responsibility to work with the other teams to create an integrated Increment",
      "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint",
      "Visit the five teams each day to inspect that their Sprint Backlogs are aligned",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which two things should the Developers do during the first Sprint?",
    options: [
      "Make up a plan for the rest of the project",
      "Analyze, describe, and document the requirements for the subsequent Sprints",
      "Develop at least one piece of functionality",
      "Analyze, design, and describe the complete architecture and infrastructure",
      "Create an Increment of potentially releasable software",
    ],
    correctAnswers: [2, 4],
  },
  {
    question:
      "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    options: [
      "The Project Manager",
      "The Developers",
      "The Scrum Team",
      "The Product Owner",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who must attend the Daily Scrum?",
    options: [
      "The Scrum Master and Product Owner",
      "The Developers",
      "The Developers and Product Owner",
      "The Scrum Team",
      "The Developers and Scrum Master",
    ],
    correctAnswer: 1,
  },
  {
    question: "When do Developers take ownership of a Sprint Backlog item?",
    options: [
      "At the Sprint planning meeting",
      "During the Daily Scrum",
      "Never. All Sprint Backlog Items are 'owned' by the entire Scrum Team, even though each one may be done by an individual Developers",
      "Whenever a team member can accommodate more work",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "True or False: The purpose of a Sprint is to produce a done Increment of product.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question:
      "In the Sprint Planning meeting, the Product Owner and the Developers were unable to reach a clear understanding about the highest order Product Backlog items. Because of this, the Developers couldn't figure out how many Product Backlog items it could forecast for the upcoming Sprint. They were able to agree on a Sprint Goal, however. Which of the following two actions should the Scrum Master support?",
    options: [
      "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint",
      "Forecast the most likely Product Backlog items to meet the goal and create a Sprint Backlog based on a likely initial design and plan. Once the time-box for the Sprint Planning meeting is over, start the Sprint and continue to analyze, decompose, and create additional functionality during the Sprint",
      "Continue the Sprint Planning meeting past its time-box until an adequate number of Product Backlog items are well enough understood for the Developers to make a complete forecast. Then start the Sprint",
      "Discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to recur",
      "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting",
    ],
    correctAnswers: [1, 3],
  },
  {
    question:
      "Which answer best describes the topics covered in Sprint Planning?",
    options: [
      "What to do and who will do it",
      "How conditions have changed and how the Product Backlog should evolve",
      "What can be done and how to do it",
      "What went wrong in the last Sprint and what to do differently this Sprint",
      "Who is on the team and what team member roles will be",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is required by Scrum?",
    options: [
      "Sprint Retrospective",
      "Members must be stand up at the Daily Scrum",
      "Sprint Burndown Chart",
      "Release planning",
      "All of the above",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a Sprint Review?",
    options: [
      "To take time to judge the validity of the project",
      "To inspect the product Increment with the stakeholders and collect feedback on next steps",
      "To review the Scrum Team's activities and processes during the Sprint",
      "To build team sprint",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "How should the Developers deal with non-functional requirements?",
    options: [
      "Ensure every Increment meets them",
      "Make sure the release department understands these requirements, but it is not the Developers responsibility",
      "Handle them during the Integration Sprint preceding the Release Sprint",
      "Assign them to the lead Developers on the team",
    ],
    correctAnswer: 0,
  },
  {
    question: "When is a Sprint over?",
    options: [
      "When the Product Owner says it is done",
      "When all Product Backlog items meet their Definition of Done",
      "When all the tasks are completed",
      "When the time-box expires",
    ],
    correctAnswer: 3,
  },
  {
    question: "True or False: Scrum has a role called 'Project Manager'.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "Which Scrum Values are violated by building Product Backlog items that have low business value?",
    options: [
      "Courage",
      "Focus",
      "Respect",
      "Economic Value Added",
      "Earned Value",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    question:
      "How much time is required after a Sprint to prepare for the next Sprint?",
    options: [
      "The break between Sprints is time-boxed to 1 week for 30 day Sprints, and usually less for shorter sprints",
      "Enough time for the requirements for the next Sprint to be determined and documented",
      "Enough time for the Developers to finish the testing from the last Sprint",
      "None. A new Sprint starts immediately following the end of the previous Sprint",
      "All of the above are allowed depending on the situation",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "When many Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
    options: [
      "Yes, but only for Scrum Teams whose work has dependencies",
      "Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done",
      "No, each Scrum Team stands alone",
      "No, that is far too hard and must be done in a hardening Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question: "When can the Developers cancel a Sprint?",
    options: [
      "It can't. Only Product Owners can cancel Sprints",
      "When functional expectations are not well understood",
      "When the Product Owner is absent too often",
      "When the selected Product Backlog items for the Sprint become unachievable",
      "When a technical dependency cannot be resolved",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which output from Sprint Planning provides the Developers with a target and overarching direction for the Sprint?",
    options: [
      "The Sprint Backlog",
      "The Sprint Goal",
      "The release plan",
      "Sprint Review minutes",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate?",
    options: [
      "The Scrum Team may add items to the Sprint Backlog for the next Sprint",
      "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog",
      "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly",
      "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply?",
    options: [
      "Involve the complete Scrum Team in making a decision",
      "Use coaching techniques; such as open questions and active listening",
      "Ask an external agile coach what they recommend",
      "Ask team members to take the issue up with to the company's Human Resources department",
    ],
    correctAnswers: [0, 1],
  },
  {
    question:
      "Who is accountable for clearly expressing Product Backlog items?",
    options: [
      "The business analyst who represents the Product Owner",
      "The Product Owner",
      "The Scrum Master, or the Scrum Master may have the Developers do it",
      "The Scrum Master",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "When many Scrum Teams are working on a single product, what best describes the Definition of Done?",
    options: [
      "Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint",
      "The Scrum Masters from each Scrum Team define a common Definition of Done",
      "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known",
      "All Scrum Teams must have a Definition of Done that makes their combined work potentially releasable",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "When many Developers are working on a single product, what best describes the Definition of Done?",
    options: [
      "Each Developer defines and uses its own. The differences are discussed and reconciled during a hardening Sprint",
      "It depends",
      "Each Developer uses its own but must make their definition clear to all other teams so the differences are known",
      "All Developers must have a Definition of Done that makes their combined work potentially releasable",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "At the seventh Sprint Review, the stakeholders are disappointed and angry. They have determined that the product or system being built will not meet their needs and will cost more than they are willing to spend. What factors likely led to this?",
    options: [
      "The Project Management Office (PMO) has not been engaged adequately",
      "The Product Owner has not been keeping the stakeholders aware of the progress of the project",
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress",
      "The stakeholders were not allowed to enter the development area",
    ],
    correctAnswers: [1, 2],
  },
  {
    question:
      "When a Scrum Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    options: [
      "The Developers",
      "The Product Owner and all stakeholders",
      "The Product Owner and the Developers",
      "The Scrum Master, project manager and Developers",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "As the Scrum Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?",
    options: [
      "Inform the Product Owner at the Sprint Review, but prior to the demonstration",
      "Find another Scrum Team to give the excess work to",
      "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items",
      "Reduce the Definition of Done and get all of the Product Backlog items 'Done' by the new definition",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following are roles on a Scrum Team?",
    options: [
      "Users",
      "Scrum Master",
      "Product Owner",
      "The Developers",
      "Customers",
    ],
    correctAnswers: [0, 1, 2, 3],
  },
  {
    question:
      "Which two activities will a Product Owner engage in during a Sprint?",
    options: [
      "Run the Daily Scrum",
      "Prioritize the Developers work on the Sprint Backlog",
      "Update management on what is being worked on",
      "Answer questions from the Developers about items in the current Sprint",
      "Work with the stakeholders",
    ],
    correctAnswers: [3, 4],
  },
  {
    question:
      "What are two good ways for the Developers to make non-functional requirements visible?",
    options: [
      "Put them on a separate list on the Scrum board, available for all to see",
      "Add them to the Product Backlog and keep the Product Owner posted on the expected effort",
      "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint",
      "Add them to the Definition of Done so the work is taken care of every Sprint",
    ],
    correctAnswers: [1, 3],
  },
  {
    question:
      "Which three questions might be answered by Developers at the Daily Scrum?",
    options: [
      "How is the Sprint proceeding?",
      "What did I do yesterday that helped the Developers meet the Sprint Goal?",
      "Why were you late?",
      "What will I do today to help the Developers meet the Sprint Goal?",
      "How many hours did I spend on the project yesterday?",
      "What will I be working on tomorrow?",
      "Do I see any impediment that prevents me or the Developers from meeting the Sprint Goal?",
    ],
    correctAnswers: [1, 3, 6],
  },
  {
    question:
      "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?",
    options: [
      "There are no such activities. The next Sprint starts immediately after the current Sprint",
      "Refine the Product Backlog",
      "Work with the Quality Assurance departments on the Increment of the current Sprint",
      "Update the project plan with stakeholders",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    options: [
      "During the Daily Scrum",
      "Whenever a team member can accommodate more work",
      "Never. The entire Scrum Team is accountable for creating value every Sprint",
      "At the Sprint Planning Event",
    ],
    correctAnswer: 2,
  },
  {
    question: "Every Developer should have:",
    options: [
      "At least one representative from each major software engineering discipline (like QA, Dev, UX)",
      "The competencies and skills needed to deliver a Done Increment in a Sprint",
      "One Lead Developer and no more than 8 other members",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which best describes the Product Backlog?",
    options: [
      "It is allowed to grow and change as more is learned about the product and its customers",
      "It provides just enough information to enable a Scrum team to start the design phase of a product",
      "It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan",
      "It is baselined to follow change management processes",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Who has the final decision about the order of items in the Product Backlog?",
    options: [
      "The Stakeholders",
      "The Product Owner",
      "The Scrum Team",
      "The Scrum Master",
      "The Developers",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which are properties of the Daily Scrum?",
    options: [
      "It is facilitated by the team lead",
      "It is held first thing in the morning",
      "It is fifteen minutes or less in duration",
      "It is free from and designed to promote conversation",
      "It consists of the Scrum Master asking the Team members the three questions",
      "Its location and time remain constant",
    ],
    correctAnswers: [2, 5],
  },
  {
    question:
      "What is the accountability of the Product Owner during Sprint 0?",
    options: [
      "There is no such thing as Sprint 0",
      "Gathering, eliciting, and analyzing the requirements that will be inserted into the Product Backlog",
      "Make the complete project plan to commit date, budget, and scope to the stakeholders",
      "Determine the composition of the Developers so they have the capacity to deliver the completed forecast",
      "Make sure enough Product Backlog items are refined to fill the first 3 Sprints",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    options: [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams",
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge",
      "Check with the allocation department to see who has worked together before and make these the first teams",
      "Create a matrix of skills, seniority, and level of experience to assign people to teams",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Who is accountable for tracking the remaining work toward the Sprint Goal?",
    options: [
      "The Developers",
      "The Scrum Master",
      "The Product Owner",
      "The Project Manager",
    ],
    correctAnswer: 0,
  },
  {
    question: "When must a Product Owner release each Increment?",
    options: [
      "When it makes sense",
      "When the Scrum Team finishes their work",
      "Whenever the product is free of defects",
      "After every Sprint, Without exception",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What are two good ways for a Scrum Team to ensure security concerns are satisfied?",
    options: [
      "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items",
      "Add security concerns to the Definition of Done",
      "Add a Sprint to specifically resolve all security concerns",
      "Delegate the work to the concerned department",
      "Have the Scrum Team create Product Backlog items for each concern",
    ],
    correctAnswers: [1, 4],
  },
  {
    question: "What is the recommended size for a Scrum Team?",
    options: ["At least 7", "9", "10 or fewer", "7 plus or minus 3"],
    correctAnswer: 2,
  },
  {
    question: "How do you know that a Scrum Team is cross-functional?",
    options: [
      "The Scrum Team has all the skills to create a potentially releasable Increment by the end of every Sprint",
      "A few of the Developers pair program and do Test Driven Development",
      "There are no conflicts within the Scrum Team",
      "Every member of the Scrum Team is able to perform every task",
    ],
    correctAnswer: 0,
  },
  {
    question: "Select the correct timebox for each Scrum event.",
    options: [
      "Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours",
      "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 4 hours",
      "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours",
      "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "True or False: The Scrum Master can be removed once Scrum is adopted.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "Who can do the work to ensure the Product Backlog is refined to a state that it is useful?",
    options: [
      "The Business Analyst",
      "Stakeholders",
      "The Developers, with support from the Product Owner who is still accountable for it",
      "The Product Owner",
    ],
    correctAnswers: [2, 3],
  },
  {
    question: "The purpose of the Sprint Review is...",
    options: [
      "to show Stakeholders work that is done and work that is near to completion",
      "to inspect the outcome of the Sprint and determine future adaptations",
      "to review the status of the Project",
      "to check what was done and not done during the Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who can change the Sprint Backlog during a Sprint?",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: Before the first Sprint, the Product Backlog must contain everything we will develop for the product.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "A Product Backlog is never complete.",
    options: [
      "False - A complete Product Backlog should be created before starting the first Sprint",
      "True - As long as a product exists, its Product Backlog also exists",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the Sprint burn-down chart show?",
    options: [
      "The evolution of the amount of uncertainty during a project",
      "An overview of the release progress by plotting the remaining workload",
      "Dependencies, start times and stop times for project tasks3",
      "How much work remains until the end of the Sprint",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "A new Developer joins the Scrum Team taking the total number to 11 people. As a Scrum Master, What should you do?",
    options: [
      "Instruct the Developers to split into 2 teams",
      "Do nothing, the Developers must fix its own issues",
      "Instruct the Developers to split into 2 teams, they should decide the appropriate sizes",
      "Raise the increased team size as a potential issue and help the Developers decide what to do about it",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which technique is the best way the Scrum Master can ensure that the Developers communicate effectively with the Product Owner?",
    options: [
      "Teach the Developers to talk in terms of business needs and objectives",
      "Observe communications between them and facilitate direct collaboration",
      "Function as a go-between for them",
      "Teach the Product Owner about the technologies employed during the Sprints",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which two things should the Scrum Team do during the first Sprint?",
    options: [
      "Develop and deliver at least one piece of functionality",
      "Deliver an Increment of useful and valuable product",
      "Determine the complete architecture and infrastructure for the product",
      "Create the complete Product Backlog to be developed in subsequent Sprints",
    ],
    correctAnswers: [0, 1],
  },
  {
    question: "Who is on the Scrum Team?",
    options: [
      "The Scrum Master",
      "Project Manager",
      "The Product Owner",
      "Developers",
    ],
    correctAnswers: [0, 2, 3],
  },
  {
    question: "The timebox for a Daily Scrum is?",
    options: [
      "15 minutes",
      "15 minutes for a 4-week sprint. For shorter Sprints it is usually shorter",
      "Two minutes per person",
      "4 hours",
      "The same time of day every day",
    ],
    correctAnswer: 0,
  },
  {
    question: "The three pillars of empiricism are:",
    options: [
      "Respect For People, Kaizen, Eliminating Waste",
      "Planning, Inspection, Adaptation",
      "Planning, Demonstration, Retrospective",
      "Inspection, Transparency, Adaptation",
      "Transparency, Eliminating Waste, Kaizen",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does it mean to say that an event has a timebox?",
    options: [
      "The event must happen by a given time",
      "The event must happen at a set time",
      "The event must take at least a minimum amount of time",
      "The event can take no more than a maximum amount of time",
    ],
    correctAnswer: 3,
  },
  {
    question: "Upon what type of process control is Scrum based?",
    options: ["Hybrid", "Empirical"],
    correctAnswer: 1,
  },
  {
    question: "The result of the Sprint Review is...",
    options: [
      "incomplete Product Backlog Items have been reviewed and returned to the top of the Product Backlog",
      "the Increment has been demonstrated to Stakeholders",
      "a revised Product Backlog that defines the probable Product Backlog items for the next Sprint",
      "acceptance (or rejection) of all Product Backlog Items",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "The Product Owner is using burn-up charts instead of burn-down charts. What would your response be as Scrum Master?",
    options: [
      "There's nothing wrong with it",
      "Burn-up charts are used in traditional methods and should be replaced by burn-down charts",
    ],
    correctAnswer: 0,
  },
  {
    question: "True or False: The Scrum Master manages the Scrum Team.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "The Scrum Master is responsible for?",
    options: [
      "Delivering the Product on budget and to the agreed schedule",
      "Ensuring Scrum is understood",
      "Solving all impediments, blockers & issues",
      "Coordinating the work of the Developers",
    ],
    correctAnswer: 1,
  },
  {
    question: "A Scrum Team has how many specific accountabilities?",
    options: ["1", "4", "2", "3"],
    correctAnswer: 3,
  },
  {
    question:
      "Who is responsible for monitoring the progress of work during a Sprint?",
    options: ["Project Manager", "Product Owner", "Scrum Master", "Developers"],
    correctAnswer: 3,
  },
  {
    question:
      "True or False: During Sprint Planning, every task must be estimated so the Developers can be sure they have the capacity to complete them in the Sprint.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "Who may be best positioned to decide who will be the Scrum Master for a new Scrum Team?",
    options: [
      "The Developers and the Product Owner",
      "The Developers",
      "The Product Owner",
      "Stakeholders",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "The Daily Scrum is consistently taking longer than 15 minutes. Which statement best describes what should be done?",
    options: [
      "A 2nd Daily Scrum should be held at the end of the day",
      "The Scrum Master should help the Developers understand why the 15 minute time-box should be respected and help them find ways to do it as required",
      "Developers should leave at the end of the 15 minutes",
      "The Developers should take the additional time that they need in the Daily Scrum",
    ],
    correctAnswer: 1,
  },
  {
    question: "True or False: A Scrum Team must be 10 or fewer people.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "True or False: A Scrum Team must never have any technical debt.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: During Sprint Planning, all Product Backlog Items must be decomposed to a definitive set of tasks for the Developers to complete.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: The Increment must be released at the end of every Sprint.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: Developers should be set stretch goals by the Product Owner as part of Sprint Planning.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: During the Daily Scrum, the Developers must answer the '3 questions'.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "Select the correct timebox for each Scrum event.",
    options: [
      "Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours",
      "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 4 hours",
      "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours",
      "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "True or False: The Scrum Master can be removed once Scrum is adopted.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "Who can do the work to ensure the Product Backlog is refined to a state that it is useful?",
    options: [
      "The Business Analyst",
      "Stakeholders",
      "The Developers, with support from the Product Owner who is still accountable for it",
      "The Product Owner",
    ],
    correctAnswers: [2, 3],
  },
  {
    question: "The purpose of the Sprint Review is...",
    options: [
      "to show Stakeholders work that is done and work that is near to completion",
      "to inspect the outcome of the Sprint and determine future adaptations",
      "to review the status of the Project",
      "to check what was done and not done during the Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who can change the Sprint Backlog during a Sprint?",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: Before the first Sprint, the Product Backlog must contain everything we will develop for the product.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "A Product Backlog is never complete.",
    options: [
      "False - A complete Product Backlog should be created before starting the first Sprint",
      "True - As long as a product exists, its Product Backlog also exists",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the Sprint burn-down chart show?",
    options: [
      "The evolution of the amount of uncertainty during a project",
      "An overview of the release progress by plotting the remaining workload",
      "Dependencies, start times and stop times for project tasks3",
      "How much work remains until the end of the Sprint",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "A new Developer joins the Scrum Team taking the total number to 11 people. As a Scrum Master, What should you do?",
    options: [
      "Instruct the Developers to split into 2 teams",
      "Do nothing, the Developers must fix its own issues",
      "Instruct the Developers to split into 2 teams, they should decide the appropriate sizes",
      "Raise the increased team size as a potential issue and help the Developers decide what to do about it",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which technique is the best way the Scrum Master can ensure that the Developers communicate effectively with the Product Owner?",
    options: [
      "Teach the Developers to talk in terms of business needs and objectives",
      "Observe communications between them and facilitate direct collaboration",
      "Function as a go-between for them",
      "Teach the Product Owner about the technologies employed during the Sprints",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which two things should the Scrum Team do during the first Sprint?",
    options: [
      "Develop and deliver at least one piece of functionality",
      "Deliver an Increment of useful and valuable product",
      "Determine the complete architecture and infrastructure for the product",
      "Create the complete Product Backlog to be developed in subsequent Sprints",
    ],
    correctAnswers: [0, 1],
  },
  {
    question: "Who is on the Scrum Team?",
    options: [
      "The Scrum Master",
      "Project Manager",
      "The Product Owner",
      "Developers",
    ],
    correctAnswers: [0, 2, 3],
  },
  {
    question: "The timebox for a Daily Scrum is?",
    options: [
      "15 minutes",
      "15 minutes for a 4-week sprint. For shorter Sprints it is usually shorter",
      "Two minutes per person",
      "4 hours",
      "The same time of day every day",
    ],
    correctAnswer: 0,
  },
  {
    question: "The three pillars of empiricism are:",
    options: [
      "Respect For People, Kaizen, Eliminating Waste",
      "Planning, Inspection, Adaptation",
      "Planning, Demonstration, Retrospective",
      "Inspection, Transparency, Adaptation",
      "Transparency, Eliminating Waste, Kaizen",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does it mean to say that an event has a timebox?",
    options: [
      "The event must happen by a given time",
      "The event must happen at a set time",
      "The event must take at least a minimum amount of time",
      "The event can take no more than a maximum amount of time",
    ],
    correctAnswer: 3,
  },
  {
    question: "Upon what type of process control is Scrum based?",
    options: ["Hybrid", "Empirical"],
    correctAnswer: 1,
  },
  {
    question:
      "True or False: It is mandatory that the product Increment be released to production at the end of each Sprint.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "The timebox for the Sprint Review is:",
    options: [
      "2 hours",
      "1 day",
      "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter",
      "4 hours and longer as needed",
      "As long as needed",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which statement best describes a Product Owner's responsibility?",
    options: [
      "Keep stakeholders from distracting the Developers",
      "Optimizing the value of the work the Scrum Team does",
      "Managing the project and ensuring that the work meets the commitments to the stakeholders",
      "Directing the Developers",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why is the Daily Scrum held at the same time and same place?",
    options: [
      "The place can be named",
      "Rooms are hard to book and this lets it be booked in advance",
      "The consistency reduces complexity",
      "The Product Owner demands it",
    ],
    correctAnswer: 2,
  },
  {
    question: "A Scrum Team consists of the following:",
    options: [
      "Users",
      "Product Owner",
      "Customers",
      "Developers",
      "Scrum Master",
    ],
    correctAnswers: [1, 3, 4],
  },
  {
    question:
      "True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working product.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question: "The timebox for the Sprint Planning event is?",
    options: [
      "4 hours",
      "Monthly",
      "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter",
      "Whenever itis done",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    options: [
      "To gather status and progress information to report to management",
      "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down",
      "They do not have to be there; they only need to ensure the Developers have a Daily Scrum",
      "To make sure every team member answers the three questions",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the function or purpose of Management in Scrum?",
    options: [
      "Identify and remove people that are not working hard enough",
      "Monitor the progress of the Developers on the Scrum Team",
      "Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to encourage organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent product delivery",
      "Continually monitor staffing levels of the Scrum Team",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "When does a Developer become the sole owner of an item on the Sprint Backlog?",
    options: [
      "Whenever a team member can accommodate more work",
      "At the Sprint Planning event",
      "Never. All Sprint Backlog items are 'owned' by the Developers on the Scrum Team",
      "During the Daily Scrum",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the typical size for a Scrum Team?",
    options: ["10 or fewer", "Minimum of 7", "7 plus or minus", "9"],
    correctAnswer: 0,
  },
  {
    question:
      "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    options: [
      "Without a new vocabulary as a reminder of the change, very little change may actually happen",
      "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost",
      "Management may feel less anxious",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team?",
    options: [
      "The Developers have all the skills they need to create a valuable, useful Increment",
      "Stakeholders attend the Daily Scrum to check on the Scrum Team's progress",
      "The Developers create their own Sprint Backlog, reflecting all work that is required to meet the Definition of Done",
      "The Developers are collaboratively selecting their own work during the Sprint",
      "The Developers invite external stakeholders to the Sprint Planning to ask them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog",
      "The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to Developer to tester to integration",
    ],
    correctAnswers: [1, 4, 5],
  },
  {
    question: "Who is required to attend the Daily Scrum?",
    options: [
      "The Scrum Master and Product Owner",
      "The Developers and Scrum Master",
      "The Developers",
      "The Developers and Product Owner",
      "The Scrum Team",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "How much work must the Developers complete for each Product Backlog item they select for a Sprint?",
    options: [
      "All development work and at least some testing",
      "Enough so that each Product Backlog item they select meets the Definition of Done",
      "Analysis, design, programming, testing and documentation",
      "As much as it can fit into the Sprint",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog items selected?",
    options: [
      "The Product Owner and all stakeholders",
      "The Scrum Master, the project manager, and the Developers",
      "The Product Owner and the Developers",
      "The Developers",
    ],
    correctAnswer: 2,
  },
  {
    question: "Who has the final say on the order of the Product Backlog?",
    options: [
      "The Product Owner",
      "The CEO",
      "The Developers",
      "The Scrum Master",
      "The Stakeholders",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?",
    options: [
      "The Product Owner",
      "The Project Manager",
      "The Developers",
      "The Scrum Master",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following services is appropriate for a Scrum Master in regard to the Daily Scrum?",
    options: [
      "Teach the Developers to keep the Daily Scrum within the 15 minute timebox",
      "Lead the discussions of the Developers",
      "Facilitate in a way that ensures each team member has a chance to speak",
      "All answers apply",
      "Ensure that all 3 questions have been answered",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Which one of the following answers is FALSE?",
    options: [
      "The Product Owner can help clarify or optimize the Sprint when asked by the Developers",
      "The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected",
      "The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint",
      "As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges",
    ],
    correctAnswer: 2,
  },
  {
    question: "When does the next Sprint begin?",
    options: [
      "Next Monday",
      "Immediately after the conclusion of the previous Sprint",
      "Immediately following the next Sprint Planning",
      "When the Product Owner is ready",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What are two ways a Scrum Master serves to enable effective Scrum Teams?",
    options: [
      "By facilitating Developer decision-making",
      "By keeping high value features high in the Product Backlog",
      "By removing impediments that hinder the Scrum Team",
      "By starting and ending the meetings at the proper time",
    ],
    correctAnswers: [0, 2],
  },
  {
    question:
      "True or False: When multiple Scrum Teams work together on the same product, each team should maintain a separate Product Backlog.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "When should a Developer on a Scrum Team be replaced?",
    options: [
      "As needed, while taking into account a short-term reduction in productivity",
      "Every Sprint to promote shared learning",
      "As needed, with no special allowance for changes in productivity",
      "Never, it reduces productivity",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which are characteristics of the Daily Scrum?",
    options: [
      "It is facilitated by the team lead",
      "It consists of the Scrum Master asking the team for status",
      "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog",
      "Is is held first thing in the morning",
      "Its location and time remain constant",
    ],
    correctAnswers: [2, 4],
  },
  {
    question:
      "True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "When does a Sprint conclude?",
    options: [
      "When the Product Owner decides enough has been delivered to meet the Sprint Goal",
      "When the Sprint Retrospective is complete",
      "When all the tasks are completed by the Developers",
      "When all Product Backlog items meet their Definition of Done",
    ],
    correctAnswer: 1,
  },
  {
    question: "When must a Scrum Team release each Increment?",
    options: [
      "When the Scrum Team finishes their work",
      "After every Sprint, without exception",
      "Whenever the product is free of defects",
      "When it makes sense to release it",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is an example of an Increment?",
    options: [
      "A plan for the overall product release",
      "A mock-up of the product marketing materials",
      "A design for the product",
      "A product roll-out plan",
      "A valuable, useful set of product features",
      "All of the above",
    ],
    correctAnswer: 4,
  },
];
