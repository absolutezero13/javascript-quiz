"use strict";

export const questions = [
  "How do you make the function wait for one and a half seconds before its execution?",
  "Which is the correct way of choosing an element by their class name?",
  "You are given an array filled with letters. Which method chain gives you the exact same array?",
  "Which statement returns true?",
  "Which method does not mutate the original array?",
  "Which one of these words can be a valid variable name?",
  "What would be the output of this? ``console.log((7 - '7') , (7 + '7'))``",
  "How do you check if an object has a certain property?",
  "Which one is correct for a function that doesn't return anything?",
];

///

export const answers = [
  [
    "A. setTimeOut(waitOneAndHalfSecond, 1500)",
    "B. setTimeOut(waitOneAndHalfSecond, 1.5)",
    "C. setInterval(waitOneAndHalfSecond, 1500)",
    "D. setTimeOut(waitOneAndHalfSecond, 150)",
  ],
  [
    "A. document.getElementbyId('container')",
    "B. document.querySelectorAll('container')",
    "C. document.querySelector('.container')",
    "D. document.querySelector('container')",
  ],
  [
    "A. letters.split('').join('')",
    "B. letters.join('').split('')",
    "C. letters.slice(1).join('')",
    "D. letters.splice('').slice('')",
  ],
  [
    "A. NaN === NaN",
    'B. 3 === "3"',
    "C. null === null",
    "D. undefined === false",
  ],
  ["A. push()", "B. unshift()", "C. splice()", "D. slice()"],
  ["A. return", "B. map", "C. catch", "D. function"],
  ["A. 0 , 14", "B. NaN , 14", "C. 0 , 77", "D. NaN , NaN"],
  [
    "A. obj.hasProperty(prop)",
    "B. obj.contains(prop)",
    "C. obj.includes(prop)",
    "D. obj.hasOwnProperty(prop)",
  ],
  [
    "A. Function doesn't work. ",
    "B. It works but its value is undefined.",
    "C. It works but it causes a warning.",
    "D. Function works like any other function.",
  ],
];

export const corrects = [0, 2, 1, 2, 3, 1, 2, 3, 1];

export const firstQuestionHtml = `<div class="question-container">
<h2 class="question-tag">QUESTION 1</h2>
<h3 class="question">
  What is the keyword to define a variable that can be reassigned?
</h3>
<div class="choices">
  <p class="choice one">A. Function</p>
  <p class="choice two">B. Const</p>
  <p class="choice i three ">C. Let</p>
  <p class="choice four">D. Var</p>
</div>
<button class="next-button">Next Question >></button>
</div>
  <div class="count-down">
    <h2 class="minute"></h2>
    <h2 class="second"></h2>
 </div>`;
