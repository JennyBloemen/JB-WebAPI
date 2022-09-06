// card was quizz and .card-header was .questions
var start =document.getElementById('start');
var quiz = document.getElementById("card");
var questionsEl = document.querySelector(".card-header");
var choiceOne = document.getElementById("one");
var choiceTwo = document.getElementById("two");
var choiceThree = document.getElementById("three");
var choiceFour = document.getElementById("four");
var endScreen = document.querySelector(".end-screen");
var timerInterval;
var finalScore = document.getElementById("final-score");
var listgroup = document.querySelector(".list-group");
var feedBack = document.getElementById("feedback");
var initialsEl = document.getElementById('initials')

// Quetions, Choices and Answer Array
var myQuestions = [
  {
    question: "Select the pair that encloses a JavaScript object literal?",
    choiceOne: "1. {}", 
    choiceTwo: "2. ::", 
    choiceThree: "3. ()",
    choiceFour: "4. []",
    answer: "three",
  },
  {
    question: "Which one is a looping structure in JavaScript?",
    choiceOne: "1. For",
    choiceTwo: "2. While",
    choiceThree: "3. do-while loops",
    choiceFour: "4. All the above",
    answer: "four",
  },
  {
    question: "What is the correct way to call the random method on the Math global object?",
    choiceOne: "1. math.random()", 
    choiceTwo: "2. Math.random()", 
    choiceThree: "3. random.Math()", 
    choiceFour: "4. Math(random)",
    answer: "two",
  },
  {
    question: "Which of the following is NOT a JavaScript Data Type?",
    choiceOne: "1. Number", 
    choiceTwo: "2. String", 
    choiceThree: "3. Boolean", 
    choiceFour: "4. Class",
    answer: "four",
  },
  {
    question: "What are the types of Pop up boxes available in JavaScript?",
    choiceOne: "1. Script", 
    choiceTwo: "2. Count", 
    choiceThree: "3. Confirm", 
    choiceFour: "4. Object",
    answer: "three",
  }
]

var lastQindex= myQuestions.length - 1;
var runningQindex = 0;
var correct = 0;

// populates the quizz questions 
function populateQuestion() {
  var q = myQuestions[runningQindex];
  questionsEl.innerHTML = "<div list-group>" + q.question + "</div>";
  choiceOne.innerHTML = q.choiceOne;
  choiceTwo.innerHTML = q.choiceTwo;
  choiceThree.innerHTML = q.choiceThree;
  choiceFour.innerHTML = q.choiceFour;
}
  
function checkAnswer(answer) {
  if (myQuestions[runningQindex].answer == answer){
    correct++;
    feedBack.textContent = "Correct!";
    console.log(correct);

    } else {
        if (myQuestions[runningQindex].answer != answer) {
          feedBack.textContent = "Wrong!";
        }
        if (secondsLeft > 0) {
        secondsLeft = secondsLeft-5;
        if (secondsLeft < 0){
          secondsLeft = 0;
        }
        // console.log("lost-time");
     }
    }
    if (runningQindex < lastQindex) {
      runningQindex++;
      populateQuestion();
    } else { 
      (runningQindex > lastQindex)
      quizEnd ();
    }
  } 

var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector(".time");
var secondsLeft = 25;

function setTime() {
  timerInterval = setInterval(() => {
    if (secondsLeft > 0) {
    secondsLeft--;
    timeEl.textContent = 'Timer: ' + secondsLeft + ' seconds';
    
    if(secondsLeft === 0 ) {
      clearInterval(timerInterval);
      timeoutMsg();
    }
    if (timerInterval <= 0) {
      clearInterval(timerInterval);
      quizEnd();
    }
  }
  }, 1000);
}
function timeoutMsg() {
  timeEl.textContent = "Your time has🔥out, try again.";
  correct = 0;
}
function quizEnd(){
  // Set's quiz content to empty string to hide questions and answers.
  questionsEl.innerHTML = "";
  choiceOne.innerHTML = "";
  choiceTwo.innerHTML = "";
  choiceThree.innerHTML = "";
  choiceFour.innerHTML = "";
  feedBack.textContent = ""; 

  if (runningQindex >= lastQindex || secondsLeft === 0){
    clearInterval(timerInterval);// this is not working  
    endScreen.style.display = "block";
    listgroup.style.display ="none";
  }
// Tutoring helped to write this code and recomend I write the score code in a separate js file
  var endMessage = document.createElement ("h3");
    endMessage.textContent = "Quiz Complete!";
    questionsEl.append(endMessage);
  
  // captures final score
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = correct;
} 

function saveHighScore () {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    var newScore = {
        score: correct,
        intitals: initials,
    };  
    highScores.push(newScore);
    window.localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
  }
}

// checks if initials have been submitted
function checkForEnter(event) {
    if (event.key === 'Enter') {
      saveHighScore();
    }
  }

// starts the quiz
function startQuiz (){
  populateQuestion();
  setTime();
  listgroup.style.display ="block";
 }

// event listenter to sumbit initials and save high score 
var submitBtn = document.getElementById("submit");
submitBtn.onclick = saveHighScore;

// event listener to start quiz
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

// event listener to check if intials were entered based on keyup event
initialsEl.onkeyup = checkForEnter;