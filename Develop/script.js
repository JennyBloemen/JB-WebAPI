var start = document.getElementById("start");
var quiz = document.getElementById("quizz");
var questionsEl = document.querySelector(".questions");
var choiceOne = document.getElementById("one");
var choiceTwo = document.getElementById("two");
var choiceThree = document.getElementById("three");
var choiceFour = document.getElementById("four");
var scoreDiv = document.getElementById("scoreContainer");
var highscoretext = document.getElementById("score");
var leaderBoard = '';

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

var lastQindex= myQuestions.length - 1;
var runningQindex = 0;
// let count = 0;

function populateQuestion() {
  var q = myQuestions[runningQindex];
  questionsEl.innerHTML = "<h2>" + q.question + "</h2>";
  questionsEl.innerHTML = q.question;
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
  }

function checkAnswer(answer) {
  if (myQuestions[runningQindex].correct == answer)
  } else {
    timeLeft --;
    timeLeft --;
    timeLeft --;
    timeLeft --;
    timeLeft --;
    console.log("Time is out");
}
  if (runningQindex< lastQindex) {
    runningQindex++;
    renderQ();
} else{
  endGame();
}

// Timer Code Block that starts when the start quizz button is selected
var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector("time");
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

var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);
 
function startQuiz () {
  populateQuestion();
  setTime();
}

  startButton.addEventListener( "click", startQuiz);
//can we have multiple event listeners for one element?















