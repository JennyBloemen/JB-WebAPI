// card was quizz and .card-header was .questions
var start =document.getElementById('start');
var quiz = document.getElementById("card");
var questionsEl = document.querySelector(".card-header");
var choiceOne = document.getElementById("one");
var choiceTwo = document.getElementById("two");
var choiceThree = document.getElementById("three");
var choiceFour = document.getElementById("four");
// var scoreDiv = document.getElementById("scoreContainer");
// var score = document.getElementById("score");
// var highscore = document.getElementById("highScore");
// var leaderBoard = '';

// var submitBtn = document.querySelector(".submit");
// var highscoreSection = document.querySelector(".high-scores");

// Quetions, Choices and Answer Array
var myQuestions = [
  {
    question: "Select the pair that encloses a JavaScript object literal?",
    choiceOne: "1. {}", 
    choiceTwo: "2. ::", 
    choiceThree: "3. ()",
    choiceFour: "4. []",
    answer: "three"
  },
  {
    question: "Which one is a looping structure in JavaScript?",
    choiceOne: "1. For",
    choiceTwo: "2. While",
    choiceThree: "3. do-while loops",
    choiceFour: "4. All the above",
    answer: "four"
  },
  {
    question: "What is the correct way to call the random method on the Math global object?",
    choiceOne: "1. math.random()", 
    choiceTwo: "2. Math.random()", 
    choiceThree: "3. random.Math()", 
    choiceFour: "4. Math(random)",
    answer: "two"
  },
  {
    question: "Which of the following is NOT a JavaScript Data Type?",
    choiceOne: "1. Number", 
    choiceTwo: "2. String", 
    choiceThree: "3. Boolean", 
    choiceFour: "4. Class",
    answer: "four"
  },
  {
    question: "What are the types of Pop up boxes available in JavaScript?",
    choiceOne:"1. Function", 
    choiceTwo: "2. Count", 
    choiceThree: "3. Confirm", 
    choiceFour: "4. Object",
    answer: "three"
  }
]

var lastQindex= myQuestions.length - 1;
var runningQindex = 0;
var correct = 0;

function populateQuestion() {
  var q = myQuestions[runningQindex];
  questionsEl.innerHTML = "<div list-group>" + q.question + "</div>";
  questionsEl.innerHTML = q.question;
  choiceOne.innerHTML =  q.question;
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
  }
  
  function checkAnswer(answer) {
    if (myQuestions[runningQindex].correct == answer){
    correct++
      } else {
        // How do I keep this from subtracting below 0
        secondsLeft = secondsLeft-5;
        console.log("lost time")
    
    }
    if (runningQindex< lastQindex) {
      runningQindex++;
      populateQuestion();
    }
  }
    
var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector(".time");
var secondsLeft = 15;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Timer: ' + secondsLeft + ' seconds';

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
      secondsLeft = 15;
    }
  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "Your time has burned out!🔥Try again!";
}
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

function startQuiz (){
  populateQuestion();
  setTime();
}
