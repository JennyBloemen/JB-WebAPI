// Challenge

var scoreDisplay = document.querySelector(".score");
var highscoredisplay = document.querySelector(".high-score");



// Timer Code Block needs to start when start button is clicked
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("time-time");
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
setTime();


//Building Quizz https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
  const output = [];
  myQuestions.forEach (
    (currentQuestion, questionNumber) => {
      
      const answers = [];
      for(letter in currentQuestion.choices){
       
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.choices[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
  )
function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// Quiz Questions
var myQuestions = [
    {
      question: "Select the pair that encloses a JavaScript object literal?",
      choices: {
        a: "{}", 
        b: "::", 
        c: "()", 
        d:"[]"
      },
      answer: "c"
    },
    {
      question: "Which one is a looping structure in JavaScript?",
      choices: {
        a:"For", 
        b:"While", 
        c:"do-while loops",
        d:"All the above"
      },
      answer: "d"
    },
    {
      question: "What is the correct way to call the random method on the Math global object?",
      choices: {
        a:"math.random()", 
        b:"Math.random()", 
        c:"random.Math()", 
        d:"Math(random)"
      },
      answer: "Math.random()"
    },
    {
      question: "Which of the following is a JavaScript Data Type?",
      choices: {
        a:"Number", 
        b:"String", 
        c:"Boolean", 
        d:"Object"
      },
      answer: "All the above"
    },
    {
      question: "What are the types of Pop up boxes available in JavaScript?",
      choices: {
        a:"Function", 
        b:"Count", 
        c:"Confirm", 
        d:"Object"
      },
      answer: "Confirm"
    }
];


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
if (answer = true) {
  answer.textContent = "Answer is correct!"
  //  use a for loop ++ to log correct answer? 
} else if (answer = false) {
  answer. textcontent = "Answer is incorrect!"
//  use a for loop ++ to log wrong answer?
document.body.appendChild(tag);
}


// start button may need a event.preventDefault();
