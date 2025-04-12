var express = require("express");
var router = express.Router();

const questions = [
  {
    question:
      "Which of the following is the correct definite article for 'Auto' (car)?",
    options: ["der", "die", "das"],
    answer: "das",
    explanation: "Auto is a neuter noun.",
  },
  {
    question:
      "How do you correctly conjugate 'sein' (to be) in the 'wir' form?",
    options: ["seid", "sind", "ist"],
    answer: "sind",
    explanation: "'Wir sind' means 'we are.'",
  },
  {
    question: "What is the correct translation of 'I have a book'?",
    options: [
      "Ich habe ein Buch",
      "Ich habe eine Buch",
      "Ich habe einen Buch",
    ],
    answer: "Ich habe ein Buch",
    explanation: "Correct use of 'ein' with neuter noun.",
  },
  {
    question: "Which sentence correctly uses the dative case?",
    options: [
      "Ich gebe dem Kind einen Apfel",
      "Ich gebe den Kind einen Apfel",
      "Ich gebe die Kind einen Apfel",
    ],
    answer: "Ich gebe dem Kind einen Apfel",
    explanation: "Dative case: 'dem Kind.'",
  },
  {
    question:
      "What is the correct translation of 'She goes to the school'?",
    options: [
      "Sie geht in die Schule",
      "Sie geht zur Schule",
      "Sie geht auf die Schule",
    ],
    answer: "Sie geht zur Schule",
    explanation: "Common phrasing for going to school.",
  },
  {
    question: "Which of the following is a correct plural form?",
    options: [
      "das Kind -> die Kindern",
      "das Kind -> die Kinder",
      "das Kind -> die Kindes",
    ],
    answer: "das Kind die Kinder",
    explanation: "Correct plural form.",
  },
  {
    question: "How do you say 'I would like' in German?",
    options: ["Ich möchte", "Ich mogen", "Ich mag"],
    answer: "Ich möchte",
    explanation: "'I would like.'",
  },
  {
    question: "Which sentence correctly uses the accusative case?",
    options: [
      "Ich sehe der Hund",
      "Ich sehe den Hund",
      "Ich sehe die Hund",
    ],
    answer: "Ich sehe den Hund",
    explanation: "Accusative case: 'den Hund.'",
  },
  {
    question: "What is the correct translation of 'I am cold'?",
    options: ["Ich bin kalt", "Mir ist kalt", "Ich habe kalt"],
    answer: "Mir ist kalt",
    explanation: "Correct German phrasing for feeling cold.",
  },
  {
    question: "Which of the following is a separable verb?",
    options: ["besuchen", "einkaufen", "verstehen"],
    answer: "einkaufen",
    explanation: "A separable verb: 'Ich kaufe ein.'",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "German Challenge",
    subtitle: "Welcome to the German Challenge!",
    scoreEachQuestion: 100,
    questions: questions,
  });
});

router.post("/", function (req, res, next) {
  const answers = req.body;
  let correctAnswersCount = 0;
  console.log("User Answers:", answers);

  for(const question of questions) {
    const questionKey = question.question.toLowerCase().replace(/[^_\w]+/g, '_').replace(/^_+|_+$/g, '');
    const userAnswer = answers[questionKey];

    if (userAnswer.replace(/_/g, ' ').toLowerCase() === question.answer.toLowerCase()) {
      correctAnswersCount++;
    }
  }

  console.log("User Answers:", correctAnswersCount);
  res.json({answers, correctAnswersCount});
 
});

module.exports = router;
