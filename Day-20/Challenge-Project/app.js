const que = [ 
  { question: "Capital of India?", options: ["Mumbai", "Delhi", "Pune", "Nagpur"], answer: "Delhi" }, 
  { question: "Capital of Maharashtra?", options: ["Mumbai", "Delhi", "Pune", "Nagpur"], answer: "Mumbai" }, 
  { question: "Capital of Gujarat?", options: ["Mumbai", "Delhi", "Gandhinagar", "Nagpur"], answer: "Gandhinagar" }, 
  { question: "Capital of Kerala?", options: ["Mumbai", "Thiruvananthapuram", "Gandhinagar", "Nagpur"], answer: "Thiruvananthapuram" }, 
  { question: "Capital of Karnataka?", options: ["Bengaluru", "Delhi", "Gandhinagar", "Nagpur"], answer: "Bengaluru" } 
];

let index = 0;
let score = 0;
let timerCount = 10;
let timerIntervalId = null;
let autoNextTimeoutId = null;
let isAnswered = false;

console.log("--- Welcome to the Quiz Timer Game ---");
console.log("To start the quiz, type: start();");

const showque = () => {
  try {
    if (!que || que.length === 0) {
      throw new Error("Question bank is empty or undefined!");
    }

    if (index >= que.length) {
      showFinalResult();
      return;
    }

    isAnswered = false;
    timerCount = 10;
    
    console.log(`\n========================================`);
    console.log(`QUESTION ${index + 1} / ${que.length}`);
    console.log(`========================================`);
    console.log(que[index].question);
    console.log(`Options:`, que[index].options);
    console.log(`Time Remaining: ${timerCount}s`);
    console.log(`Submit answer using: submitAnswer("Your Answer Here");`);
    console.log(`----------------------------------------`);

    timerIntervalId = setInterval(() => {
      timerCount--;
      if (timerCount > 0 && !isAnswered) {
        console.log(`${timerCount}s remaining...`);
      } else if (timerCount <= 0) {
        clearInterval(timerIntervalId);
      }
    }, 1000);

    autoNextTimeoutId = setTimeout(() => {
      clearInterval(timerIntervalId);
      if (!isAnswered) {
        console.log("\nTime's up! Moving to the next question.");
        index++;
        showque();
      }
    }, 10000);

  } catch (error) {
    console.error(`Error displaying question: ${error.message}`);
  }
};

const submitAnswer = (userAnswer) => {
  try {
    if (isAnswered) {
      console.log("You have already answered this question or time is up!");
      return;
    }
    if (timerCount <= 0) {
      console.log("Time's up! You cannot answer now.");
      return;
    }

    isAnswered = true;
    clearInterval(timerIntervalId);
    clearTimeout(autoNextTimeoutId);

    const correctAnswer = que[index].answer;

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct Answer!");
      score++;
    } else {
      console.log(`Incorrect! The correct answer was: ${correctAnswer}`);
    }

    index++;
    setTimeout(showque, 2000);

  } catch (error) {
    console.error(`Error processing your answer: ${error.message}`);
  }
};

const showFinalResult = () => {
  clearAllTimers();
  console.log(`\n========================================`);
  console.log(`QUIZ FINISHED!`);
  console.log(`========================================`);
  console.log(`Your Final Score: ${score} out of ${que.length}`);
  console.log(`Percentage: ${(score / que.length) * 100}%`);
  console.log(`To play again, type: restart();`);
  console.log(`========================================\n`);
};

const clearAllTimers = () => {
  if (timerIntervalId) clearInterval(timerIntervalId);
  if (autoNextTimeoutId) clearTimeout(autoNextTimeoutId);
};

const start = () => {
  index = 0;
  score = 0;
  clearAllTimers();
  showque();
  console.log("\nGame Started! Use stop() to pause or reset() to clear.");
};

const stop = () => {
  clearAllTimers();
  console.log("Game Stopped. Resume by typing showque(); or clear with reset();");
};

const reset = () => {
  index = 0;
  score = 0;
  clearAllTimers();
  console.log("Game Reset to starting state.");
};

const restart = () => {
  console.log("Restarting Quiz...");
  start();
};
