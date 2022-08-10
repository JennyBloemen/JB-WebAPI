var start = document.getElementById("start");
var quiz = document.getElementById("questions");
var choiceOne = documet.getElementById("one")
var choiceTwo = documet.getElementById("two")
var choiceThree = documet.getElementById("three")
var choiceFour = documet.getElementById("four")
var scoreDiv = document.getElementById("scoreContainer");

var myQuestions = [
  {
    question: "Select the pair that encloses a JavaScript object literal?",
    choiceOne: "{}", 
    choiceTwo: "::", 
    choiceThree: "()",
    choiceFour: "[]",
    answer: "three"
  },
  {
    question: "Which one is a looping structure in JavaScript?",
    choiceOne: "For",
    choiceTwo: "While",
    choiceThree: "do-while loops",
    choiceFour: "All the above",
    answer: "four"
  },
  {
    question: "What is the correct way to call the random method on the Math global object?",
    choiceOne: "math.random()", 
    choiceTwo: "Math.random()", 
    choiceThree: "random.Math()", 
    choiceFour: "Math(random)",
    answer: "two"
  },
  {
    question: "Which of the following is a JavaScript Data Type?",
    choiceOne: "Number", 
    choiceTwo: "String", 
    choiceThree: "Boolean", 
    choiceFour: "Object",
    answer: "All the above"
  },
  {
    question: "What are the types of Pop up boxes available in JavaScript?",
    choiceOne:"Function", 
    choiceTwo: "Count", 
    choiceThree: "Confirm", 
    choiceFour: "Object",
    answer: "Confirm"
  }
]

var quizzboxEl = document.querySelectorAll("containerQuizzBox");

var choicesEL = document.querySelectorAll("answerChoices");

var myQuestionIndex = 0;
// /* /* need to tie in My questions array*/
// function populateQuestion () {
//   questionsEl = myQuestions[]
//   quizzboxEl.appendChild(textContent);
//   console.log(question);
//   for (let i = 0; i < myQuestions.length; i++);
// }
function populateQuestion() {
  var questionDisplay = question[myQuestionIndex];
  var questionsEl = document.getElementById("questions");
  questionsEl.textContent = questionDisplay.question;
}
  
  
  
  questionsEl.textContect = currentQuestion.title;
  
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";





function populateChoices () {
  choicesEL.textContent = ("answerChoices");
  quizzboxEl.appendChild(textContent);
  console.log(choices);
  
// }



// Timer Code Block that starts when the start quizz button is selected
var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector(".time");
var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Timer: ' + secondsLeft + ' seconds';

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "Your time has burned out!🔥Try again!";
  mainEl.appendChild(textContent);
}
// calls the timer function, I think this needs to call the time when the start button is clicked

var startBtn = document.querySelector("#start");
startBtn.addEventListener("click",startTimer); 

function startTimer() {
  console.log("start");
  setTime ();
  // clearInterval ();
}




// //example from class activity 7 not to be used, just for reference
// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   // Creates element based on tag entered by user
//   var tag = document.createElement(tagName);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
//   // Appends tag as child of document body
//   document.body.appendChild(tag);
// }

// my attempt to create the same, but I am not sure if I need to create a second element. TT ta for clarity.
// if (answer = true) {
//   answer.textContent = "Answer is correct!"
//   //  use a for loop ++ to log correct answer? 
// } else if (answer = false) {
//   answer. textcontent = "Answer is incorrect!"
// //  use a for loop ++ to log wrong answer?
// document.body.appendChild(tag);
// }


// start button may need a event.preventDefault();
