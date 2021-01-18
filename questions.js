"use strict";
export const questions = [
  "How do you make the function wait for one and a half seconds before its execution?",
  "Which is the correct way of choosing an element by their class name?",
  "You are given an array filled with letters. Which method chain gives you the exact same array?",
  "Which statement returns true?",
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
];

export const corrects = [0, 2, 1, 2];
