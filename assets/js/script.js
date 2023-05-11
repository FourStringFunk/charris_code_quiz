// VARIABLE DEFINITIONS USING QUERYSELECTOR
var welcome = document.querySelector("#introduction"); // assigns div element with id introduction to the welcome variable
var startBtn = document.querySelector("#startButton"); // assigns button element with the id startButton to the startBtn variable
var introPage = document.querySelector("#introPage"); // assigns the section element with the id introPage to the introPage variable
var questionPage = document.querySelector("#questionPage"); // assigns the section element with the id questionPage to the questionPage variable
var askQuestion = document.querySelector("#question"); // assigns the h2 element with the id question to the askQuestions variable

var choiceBtn = document.querySelectorAll(".choice"); // assigns the button elements with the id choice to the choiceBtn variable in an array
var answerBtn1 = document.querySelector("#answerBtn1"); // assigns the button element with the id answerBtn1 to the answerBtn1 variable
var answerBtn2 = document.querySelector("#answerBtn2"); // assigns the button element with the id answerBtn2 to the answerBtn1 variable
var answerBtn3 = document.querySelector("#answerBtn3"); // assigns the button element with the id answerBtn3 to the answerBtn1 variable
var answerBtn4 = document.querySelector("#answerBtn4"); // assigns the button element with the id answerBtn4 to the answerBtn1 variable

var checkLine = document.querySelector("#checkLine"); // assigns the div element with the id checkline to the checkLine variable
var submitPage = document.querySelector("submitPage"); // assigns the section element with the id submitPage to the Submit page variable
var finalScore = document.querySelector("#finalScore"); // assigns the p element with the id finalScore to the FinalScore variable
var userInitial = document.querySelector("#initial"); // assigns the input element with the id initial to the userInitial variable

var submitBtn = document.querySelector("#submitBtn");
var highScorePage = document.querySelector("highscorePage");
var scoreRecord = document.querySelector("#scoreRecord");
var scoreCheck = document.querySelector("#scoreCheck");
var finish = document.querySelector("#finish");

var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

// QUESTIONS DEFINED AS AN OBJECT
var questionSource = [
    {
        question: "Question 1: What value represents the first index of an array?",
        choice: ["a. 0", "b. 1", "c. 2", "d. 3"],
        answer: "a"
    },
    {
        question: "Question 2: How do you create a function in JavaScript?",
        choice: ["a. function = myFunction()", "b. function:myFunction()", "c. myFunction() ", "d. function myFunction()"],
        answer: "d"
    },
    {
        question: "Question 3: Which of the following represents the correct way to write an if statement in JavaScript?",
        choice: ["a. if i == 2 {myExecutionals};", "b. if i === 5 then {myExecutionals};", "c. if(i > 5) {myExecutionals};", "d. if(i <= 10) (myExecutionals);"],
        answer: "c"
    },
    {
        question: "Question 4: Which of the following is NOT a commonly used data type",
        choice: ["a. boolean", "b. string", "c. console.log", "d. alert"],
        answer: "c"
    },
    {
        question: "Question 5: When assigned to variable, what must string values be enclosed within?",
        choice: ["a. parentheses", "b. brackets", "c. carrots", "d. quotes"],
        answer: "c"
    },
    {
        question: "Question 6: What symbol would you use to identify variables that are equal in type and value?",
        choice: ["a. =", "b. ===", "c. ==", "d. !="],
        answer: "b"
    }
];

// VARIABLES CONTROLLING TIME
var timeLeft = document.getElementById("timer");
var timeLeft = 90;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

// START BUTTON TRIGGERS TIMER COUNTDOWN
function countdown() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeLeft.textContent = "Time left: " + timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timerInterval); // clears the countdown clock
            timeLeft.textContent = "Your time is up!"; // displays the message when time is less than or equal to zero
            finish.textContent = "Your time is up!"; // shows scoreRecord with user score instead of all done message
            gameOver();
        } else if(questionCount >= questionSource.length +1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// CLICK TO START QUIZ
function startQuiz() {
    introPage.style.display = "none"; 
    questionPage.style.display = "block"; 
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
}

// DISPLAY QUESTIONS AND ANSWERS
function showQuestion(n) {
    askQuestion.textContent = questionSource[n].question;
    answerBtn1.textContent = questionSource[n].choice[0];
    answerBtn2.textContent = questionSource[n].choice[1];
    answerBtn3.textContent = questionSource[n].choice[2];
    answerBtn4.textContent = questionSource[n].choice[3];
    questionNumber = n;
}

// VALIDATE ANSWER
function checkAnswer(event) {
    event.preventDefault();
    checkLine.style.display = "block";

    // Changes the visibility on timeout
    setTimeout(function () {
        checkLine.style.display = "none";
    }, 1000);

    // Checks if the answer is correct
    if (questionSource[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct Answer!";
        totalScore = totalScore + 1; // increases the total score by 1
    } else {
        timeLeft = timeLeft - 10; // removes 10 seconds from the timer
        checkLine.textContent = "That is wrong! the correct answer is " + questionSource[questionNumber].answer + " .";
    }

    // Moves through the question list
    if (questionNumber < questionSource.length -1) {
        showQuestion(questionNumber + 1); // displays next question on click
    } else {
        gameOver();
    }
    questionCount++;
}

// GAME END
function gameOver() {
    questionPage.style.display = "none"; // Removes question page content
    scoreRecord.style.display = "block"; // displays the scoreRecord
    finalScore.textContent = "Nice job! Your final score is" + totalScore + " points!";
    timeLeft.style.display = "none";
};

// STORES AND GETS SCORES AND INITIALS FROM LOCAL STORAGE
function getScore() {
    var currentList = localStorage.getItem("ScoreList");
    if (currentList !== null) {
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = []; // sets array to empty
    }
    return freshList;
}; 

// DISPLAY SCORE ON scoreRecord
function showScore() {
    scoreRecord.innerHTML = "";
    scoreRecord.style.display = "block";
    
    var highScores = sort();
    var topTen = highScores.slice(0,10);

    for (var i = 0; i < topTen.length; i++); {
        var item = topTen[i];
        var li = document.createElement("li");
        li.textContent = item.user + ": " + item.score;
        li.setAttribute("data-index", i);
        scoreRecord.appendChild(li);
    }
};

// SORT SCORES
function sortScores() {
    var unsortedList = getScore();
    if (getScore == null) {
        return;
    } else {
        unsortedList.sort(function(a,b){
            return b.score - a.score;
        })
    return unsortedList;
    }
};

// PUSH NEW SCORES TO LOCAL STORAGE
function addItem(n) {
    var addedList = getScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore() {
    var scoreItem = {
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    getScore();
};

// EVENT LISTENERS
startBtn.addEventListener("click", startQuiz);

choiceBtn.forEach(function(click) {
    click.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreRecord.style.display = "none";
    introPage.style.display = "none";
    questionPage.style.display = "none";
    highScorePage.style.display = "block";
    getScore();
});

backBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreRecord.style.display = "none";
    questionPage.style.display = "none";
    highScorePage.style.display = "none";
    introPage.style.display = "block";
    location.reload();
});

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    getScore();
});