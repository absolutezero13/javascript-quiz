"use strict";
import { questions } from "./questions.js";
import { answers } from "./questions.js";
import { corrects } from "./questions.js";
const main = document.querySelector(".main");
const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");
let score = 0;
let questionNumber = 0;
////////////////----------------------//////////////---------SELECTING QUESTIONS ---------//////
const displayFirstQuestion = () => {
  main.insertAdjacentHTML(
    "afterbegin",
    `<div class="question-container">
  <h2 class="question-tag">QUESTION 1</h2>
  <h3 class="question">
    What is the keyword to define a variable that can be modified?
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
   </div>`
  );
};

const firstStart = () => {
  container.style.animation = "hidden 1s forwards";
  container.remove();
  displayFirstQuestion();
  const questionContainer = document.querySelector(".question-container");
  const choice = [...document.querySelectorAll(".choice")];
  const choices = document.querySelector(".choices");
  const correct = document.querySelector(".correct");
  const nextButton = document.querySelector(".next-button");
  const endingContanier = document.querySelector(".ending");
  const questionTag = document.querySelector(".question-tag");
  const question = document.querySelector(".question");
  const optionA = document.querySelector(".one");
  const optionB = document.querySelector(".two");
  const optionC = document.querySelector(".three");
  const optionD = document.querySelector(".four");
  const countDown = document.querySelector(".count-down");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");
  //---- TIMER ---- //
  let minutes = 10;
  let seconds = 0;
  const timer = () => {
    minute.innerHTML = `${minutes.toString().padStart(2, 0)}`;
    second.innerHTML = `:${seconds.toString().padStart(2, 0)}`;
    if (seconds === 0) {
      minutes--;
      second.innerHTML = ":00";
      seconds = 60;
    }
    seconds--;
    if (minutes === 0) {
      minute.style.color = "red";
      second.style.color = "red";
    }
  };
  timer();
  setInterval(timer, 10);

  const answering = function (element) {
    nextButton.style.animation = "come-out 0.5s ease";
    nextButton.style.display = "inline";
    if (questionNumber === 0) {
      if (element.target.classList.contains("i")) {
        element.target.style.background = "green";
        score++;
      } else {
        element.target.style.background = "red";
      }
    } else {
      if (
        element.target.innerHTML ==
        answers[questionNumber - 1][corrects[questionNumber - 1]]
      ) {
        element.target.style.background = "green";
        score++;
      } else {
        element.target.style.background = "red";
      }
    }
    setTimeout(() => {
      nextButton.style.animation = "come-out 0.5s ease";
      nextButton.style.display = "flex";
    }, 100);
    choice.forEach((e) => e.removeEventListener("click", answering));
  };
  choice.forEach(function (e) {
    e.addEventListener("click", answering);
  });
  nextButton.addEventListener("click", () => {
    if (questionNumber === questions.length - 1) {
      setTimeout(() => (nextButton.innerHTML = "Results >>"), 101);
    }
    const displayEndingPage = () => {
      questionContainer.remove();
      main.insertAdjacentHTML(
        "afterbegin",
        `<div class="container">
      <h1>
       YOU GOT ${score} OUT OF ${questions.length + 1} ! ${
          score > (7 / 10) * (questions.length + 1)
            ? "YOU ARE GREAT!"
            : score > (4 / 10) * (questions.length + 1)
            ? "YOU ARE.. MEH.."
            : "YOU SUCK!"
        }
      </h1>
     <a href="index.html"> <button class="end-button start-button">BACK TO THE MAIN PAGE</button> <a/>
    </div>`
      );
      return;
    };
    if (questionNumber === questions.length) {
      displayEndingPage();
      return;
    }

    choice.forEach((e) => (e.style.background = "rgba(0, 0, 0, 0.432)"));

    const displayQuestion = () => {
      questionTag.innerHTML = `QUESTION ${questionNumber + 2}`;
      question.innerHTML = questions[questionNumber];
      optionA.innerHTML = answers[questionNumber][0];
      optionB.innerHTML = answers[questionNumber][1];
      optionC.innerHTML = answers[questionNumber][2];
      optionD.innerHTML = answers[questionNumber][3];
      questionNumber++;
      nextButton.style.display = "none";
    };
    setTimeout(displayQuestion, 301);

    choice.forEach(function (e) {
      e.addEventListener("click", answering);
    });
  });
};

///////////////-- STARTING --//////////////////

startButton.addEventListener("click", firstStart);

/////////////////////////////////////////////
