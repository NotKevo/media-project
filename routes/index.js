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
      "das Kind → die Kindern",
      "das Kind → die Kinder",
      "das Kind → die Kindes",
    ],
    answer: "das Kind → die Kinder",
    explanation: "Correct plural form.",
  },
  {
    question: "How do you say 'I would like' in German?",
    options: ["Ich möchte", "Ich mögen", "Ich mag"],
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
    questions: questions
  });
});

router.post("/", function (req, res, next) {
  try{
    const answers = req.body;
    console.log("ANSWERS:", answers);
    let correctAnswerCount = 0;

    questions.forEach(question => {
      const questionId = question.question;
      console.log(`Checking question: ${questionId}, User answer: ${answers[questionId]}, Correct answer: ${question.answer}`);
      if(answers[questionId] === question.answer){
        correctAnswerCount++;
      }
    });

    const totalAttempts = 1;

    res.json({
      totalAttempts,
      correctAnswers: correctAnswerCount,
      wrongAnswers: Object.keys(answers).length - correctAnswerCount
    });
  } catch(error) {
    console.error("ERROR:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
 // res.json(req.body);
});

module.exports = router;
