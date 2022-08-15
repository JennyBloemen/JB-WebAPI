// card was quizz and .card-header was .questions
var start =document.getElementById('start');
var quiz = document.getElementById("card");
var questionsEl = document.querySelector(".card-header");
var choiceOne = document.getElementById("one");
var choiceTwo = document.getElementById("two");
var choiceThree = document.getElementById("three");
var choiceFour = document.getElementById("four");
var intials = document.querySelector(".end-screen");
var timerInterval;
var finalScore = document.getElementById("final-score");


// var scoreDiv = document.getElementById("scoreContainer");
// var score = document.getElementById("score");
// var highscore = document.getElementById("highScore");
// var leaderBoard = '';
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
    choiceOne: "1. Script", 
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
  // questionsEl.innerHTML = q.question;
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
  }
  
  function checkAnswer(answer) {
    if (myQuestions[runningQindex].answer == answer){
    correct++;
    console.log(correct);
    } else {
        secondsLeft = secondsLeft-5;
        console.log("lost-time");
     }
    if (runningQindex < lastQindex) {
      runningQindex++;
      populateQuestion();
    } else { 
      (runningQindex > lastQindex)
      quizEnd ();
    }
  }
// function answerIsCorrect (){
 
var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector(".time");
var secondsLeft = 35;

function setTime() {
  timerInterval = setInterval(() => {
    secondsLeft--;
    timeEl.textContent = 'Timer: ' + secondsLeft + ' seconds';
    
    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }
    // if(timerInterval === 0 || runningQindex === myQuestions.length){
    //   clearInterval(timerInterval);
// check if user ran out of time
  if (timerInterval <= 0) {
      clearInterval(timerInterval);
      quizEnd();
}
}, 1000);
}
function quizEnd(){
  // TA had me try setting quiz to empty string, but it didn't work
  // questionsEl.innerHTML = "";
  // choiceOne.innerHTML = "";
  // choiceTwo.innerHTML = "";
  // choiceThree.innerHTML = "";
  // choiceFour.innerHTML = "";
  if (runningQindex >= lastQindex || secondsLeft === 0){
    // quiz.style.display = "none";
    // choiceOne.style.display = "none";
    
    // this will show the initials block when the quiz ends
    intials.style.display = "block";
}

  var endMessage = document.createElement ("h1");
  endMessage.textContent = "You are done!";
  questionsEl.append(endMessage);
  
  var inputInitials = document.createElement ("input");
  inputInitials.setAttribute ('placeholder, type your initials');
  intials.append(inputInitials);

  var submitBtn = document.createElement("button");
  submitBtn.textcontent="submit";
  intials.append(submitBtn);

  submitBtn.addEventListener("click",function(){
    var user = {
      name: inputInitials.value,
      finalScore: correct
    }
    var storage=JSON.parse(localstorage.getItem('highscore'))
    if (storage === null){
      storage = []
      }
      storage.push(user)
      localStorage.setItem('highscore', JSON.stringify(storage))
        window.location.href = 'highscore.html'
    
  })

 }
// create a second javascript file to show highscores

function sendMessage() {
  timeEl.textContent = "Your time has burned out!🔥";
  // show score and save to local storage
  // hide quizz and show up a button to retake- Inside teh new buton fut=ntion do lines 117 and 118
  secondsLeft = 15;
  correct = 0;
}

var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

function startQuiz (){
  // quiz.style.display = "block";
  populateQuestion();
  setTime();
  
}


// finalScore = correct;

// submitBtn.addEventListener("click",intials)