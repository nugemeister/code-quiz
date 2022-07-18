// Timer Box
var scoreTimeEl = document.querySelector("#timer");

// The landing page that displays upon initial page load
var introEl = document.querySelector("#intro");

// The box that questions will display in
var quizEl = document.querySelector("#quiz");

// The closing page that shows final score and allows you to submit your name
var finalScoreEl = document.querySelector("#finalscore");

// The span that displays final score
var scoreEl = document.querySelector("#score");

// The box that "correct" or "incorrect" will display in
var answerResultsEl = document.querySelector("#answerresults");

// The "Begin" button
var startButtonEl = document.querySelector("#startquiz");

// Variable to track what question you're on
var currentPlace = 0;

// The clock and final score
var timeLeft = 0;

// The interval for changing the clock
var timeInterval = "";

// List of High Scores
scoresList = [];

// Intials input area where score is recorded
var initials = document.querySelector("#initials");


