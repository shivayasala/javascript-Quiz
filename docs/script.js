const arr = [
    {
        "question": "What is the correct syntax to print a message in the console in JavaScript?",
        "options": [
            "1. console.log('Hello World')",
            "2. print('Hello World')",
            "3. echo('Hello World')",
            "4. System.out.println('Hello World')"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which data type is NOT supported in JavaScript?",
        "options": [
            "1. Undefined",
            "2. Float",
            "3. Boolean",
            "4. String"
        ],
        "correctAnswer": 2
    },
    {
        "question": "How do you create a function in JavaScript?",
        "options": [
            "1. function = myFunction()",
            "2. function myFunction()",
            "3. create myFunction()",
            "4. def myFunction()"
        ],
        "correctAnswer": 2
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "options": [
            "1. call myFunction()",
            "2. call function myFunction()",
            "3. myFunction()",
            "4. Call.myFunction()"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "options": [
            "1. *",
            "2. -",
            "3. =",
            "4. +"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": [
            "1. onmouseover",
            "2. onchange",
            "3. onclick",
            "4. onmouseclick"
        ],
        "correctAnswer": 3
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "options": [
            "1. var myVar",
            "2. variable myVar",
            "3. v myVar",
            "4. declare myVar"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which method can be used to find the length of a string?",
        "options": [
            "1. getSize()",
            "2. length()",
            "3. size()",
            "4. length"
        ],
        "correctAnswer": 4
    },
    {
        "question": "Which statement can be used to terminate a loop, switch, or label statement?",
        "options": [
            "1. stop",
            "2. halt",
            "3. break",
            "4. exit"
        ],
        "correctAnswer": 3
    },
    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "options": [
            "1. NaN",
            "2. false",
            "3. true",
            "4. undefined"
        ],
        "correctAnswer": 3
    }
]


const ques = document.querySelector('.ques');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const next_btn = document.querySelector(".next_btn");
const marks_btn = document.querySelector(".marks_btn");

let marks = 0;
let i = 0;
let chosenAnswer = null;

function loadQuestion(index) {
    const obj = arr[index];
    ques.innerHTML = obj.question;
    opt1.innerHTML = obj.options[0];
    opt2.innerHTML = obj.options[1];
    opt3.innerHTML = obj.options[2];
    opt4.innerHTML = obj.options[3];
   
}

function checkAnswer() {
    const correctAns = arr[i].correctAnswer;
    if (chosenAnswer === correctAns) {
        marks++;
        marks_btn.innerHTML = `Total Marks: ${marks} / 10`
    }
    console.log(marks);
}

opt1.addEventListener('click', () => chosenAnswer = 1);
opt2.addEventListener('click', () => chosenAnswer = 2);
opt3.addEventListener('click', () => chosenAnswer = 3);
opt4.addEventListener('click', () => chosenAnswer = 4);

next_btn.addEventListener('click', function () {
    if (next_btn.innerHTML === 'Restart') {
       
        location.reload()
        
        loadQuestion(i);
    } else {
        checkAnswer();
        i++;
        if (i < arr.length) {
            loadQuestion(i);

        } else {
            ques.innerHTML = "Quiz Completed!";
            opt1.style.display = 'none';
            opt2.style.display = 'none';
            opt3.style.display = 'none';
            opt4.style.display = 'none';
            next_btn.innerHTML = 'Restart';
         
       
           
        }
    }
});

loadQuestion(i);