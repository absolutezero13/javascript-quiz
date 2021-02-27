"use strict";
import {
  questions,
  answers,
  corrects,
  firstQuestionHtml,
} from "./questions.js";

// - Selecting Core Elements - //
const main = document.querySelector(".main");
const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");
export let score = 0;
let questionNumber = 0;

const displayFirstQuestion = () => {
  main.insertAdjacentHTML("afterbegin", firstQuestionHtml);
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
  let minutes = questions.length * 1 + 1;
  let seconds = 0;
  const displayEndingPage = () => {
    questionContainer.remove();
    countDown.remove();
    const lastPageHtml = `<div class="container">
  <h1>  YOU GOT <span class="score"> ${score} </span> OUT OF ${
      questions.length + 1
    } ! ${
      score > (7 / 10) * (questions.length + 1)
        ? "YOU ARE GREAT!"
        : score > (4 / 10) * (questions.length + 1)
        ? "YOU ARE.. MEH.."
        : "YOU SUCK!"
    }
</h1>
<a href="index.html"> <button class="end-button start-button">BACK TO THE MAIN PAGE</button> <a/>
</div>`;

    main.insertAdjacentHTML("afterbegin", lastPageHtml);
    return;
  };

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
    if (minutes === -1 && second.innerHTML === ":00") {
      displayEndingPage();
    }
  };
  timer();
  const timerCountDown = () => setInterval(timer, 1000);
  timerCountDown();

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
      setTimeout(() => (nextButton.innerHTML = "Results >>"), 500);
    }

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

/////////New questions upcoming /////
