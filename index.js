const readline = require('readline'); // readline is a tool in Node.js that allows you to receive keyboard input frpm the user (for asking questins and processing answers) 

const rl = readline.createInterface({ // an input interface for receiving user input from the keyboard
  input: process.stdin, // standard input: where user's keyboard iput is received
  output: process.stdout // standard output: displys text on the terminal screen
}); // createInterface function completed

const questions = [ // An array that stores multiple questions, each with its own answer
  {
    question: "What is the capital of South Korea? ", // first question
    answer: "Seoul" // correct answer 
  }, 
  {
    question: "What is 2 + 2? ", // second question
    answer: "4" // correct answer 
  },
  {
    question: "What language is Node.js based on? ", // third question
    answer: "JavaScript" // correct answer 
  }
]; // end of question array

let score = 0; // initialize the score at 0
let current = 0; // initialize current question index at 0

function askQuestion() { // define a function named 'askQuestion' that runs only when called 
  if (current === questions.length) { // if the current question number equals the number of questions, the quiz is finished
    console.log(`\nGame Over! Your score: ${score} / ${questions.length}`); // how many points won 
    rl.close(); // close the input interface
    return; // exit the function
  }
  rl.question(questions[current].question, (userAnswer) => { // ask the current question and store the user's input as 'userAnswer'
    if (userAnswer.trim().toLowerCase() === questions[current].answer.toLowerCase()) { // check if the users answer matches up with correct answer
      console.log("Correct!"); // user got it right 
      score++; // increase the score by 1
    } else { // if the answer is incorrect 
      console.log(`Wrong! The correct answer is: ${questions[current].answer}`); // show correct answer 
    }
    current++; // move to the next question
    askQuestion(); // run the function again for the next question
  });
}

console.log("Welcome to the Quiz Game! Answer the questions below:"); // welcome message
askQuestion(); // start the quiz



