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
      // ask in class hours how to get this working so it will stop going below 
        if (secondsLeft > 0) {
        secondsLeft = secondsLeft-5;
        console.log("lost-time");
     }
    }
    if (runningQindex < lastQindex) {
      runningQindex++;
      populateQuestion();
      // listgroup.style.display = "block";

    } else { 
      (runningQindex > lastQindex)
      quizEnd ();
    }
}
 
var mainEl = document.getElementById("time-time");
var timeEl = document.querySelector(".time");
var secondsLeft = 15;

// if(timerInterval === 0 || runningQindex === myQuestions.length){
//   clearInterval(timerInterval);
// check if user ran out of time
function setTime() {
  timerInterval = setInterval(() => {
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

  if (runningQindex >= lastQindex || secondsLeft === 0){
    clearInterval(timerInterval);  
    endScreen.style.display = "block";
    listgroup.style.display ="none";
  }
  // Tutoring helped to write this code and recomend I write the score code in a separate js file
  var endMessage = document.createElement ("h3");
    endMessage.textContent = "Quiz Complete!";
    questionsEl.append(endMessage);
  
  var inputInitials = document.createElement ("input");
    inputInitials.setAttribute ('placeholder, type your initials');
    endScreen.append(inputInitials);

  var submitBtn = document.createElement("button");
    submitBtn.textcontent="submit";
    endScreen.append(submitBtn);

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

// event listener to start quiq
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

function startQuiz (){
  // quiz.style.display = "block";
  populateQuestion();
  setTime();
  listgroup.style.display ="block";

 }
