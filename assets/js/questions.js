// Creating the Question Set!

var questions = [
   
{
    question: 'JavaScript has a file extension of:',
    answers: [ '.java', '.js', '.javascript', '.xml' ],
    correctAnswer: '.js',
},
{
    question: 'Which function is used to parse a string to int?',
    answers: [ 'Integer.Parse', 'Int.Parse', 'Parse.Int' ],
    correctAnswer: 'Int.Parse',
},
{
    question: 'Which of the below dialog boxes displays a message and a data entry field?',
    answers: [ 'Alert()', 'Prompt()', 'Confirm()', 'Msg()' ],
    correctAnswer: 'Prompt()',
},
{
    question: 'A function associated with an object is called:',
    answers: [ 'Function', 'Method', 'Link' ],
    correctAnswer: 'Method',
},
{
    question: 'IsNaN() evaluates an arguement to determine if the given value is:',
    answers: [ 'is not a null', 'is not a number', 'is not a new object', 'is not on the page' ],
    correctAnswer: 'is not a number',
},
{
    question: 'When a button is clicked, the following event handler is invoked:',
    answers: [ 'OnSubmit()', 'OnLoad()', 'IsPostBack()', 'OnClick()' ],
    correctAnswer: 'OnClick()',
},
{
    question: 'GetMonth() returns the month as:',
    answers: [ 'Int', 'Float', 'Char', 'String' ],
    correctAnswer: 'Int',
},
{
    question: 'How would you write "Hello World" into an alert box?',
    answers: [ 'alertBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'modal("Hello World")' ],
    correctAnswer: 'alert("Hello World");',
},
{
    question: 'The != and !== symbols both work the same for inequality comparisons:',
    answers: [ 'True', 'False' ],
    correctAnswer: 'Flase',
},
{
    question: 'For strict equality comparisons, you should use:',
    answers: [ '=', '==','===' ],
    correctAnswer: '===',
},
{
    question: 'The expression 8 >= 8 evaluates to:',
    answers: [ 'True', 'False' ],
    correctAnswer: 'True',
},
{
    question: 'Which of the following represent truthy values in javascript?',
    answers: [ 'true', '{}', '[]', 'All of the above' ],
    correctAnswer: 'All of the above',
},
{
    question: 'Which of the following represent falsy values in javascript?',
    answers: [ 'false', '\"\"', 'undefined', 'All of the above' ],
    correctAnswer: 'All of the above',
},
{
    question: 'What is the default value of an uninitialized variable?',
    answers: [ '0', 'undefined', 'null', 'NaN' ],
    correctAnswer: 'undefined',
},
{
    question: 'What is the correct way to write comments in JavaScript?',
    answers: [ '{# ... #}', '(! ... )', '// ....', '\\\\ ...' ],
    correctAnswer: '// ....',
}

];

var questionSet =
{
    question: '',
    answers: ['', '', '', '' ],
    correctAnswer: '',
};