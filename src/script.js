"use strict";
const target = document.querySelector("#target");
const time = document.querySelector("#time");
const score = document.querySelector("#score");
const userClicks = document.querySelector("#user-clicks");

let seconds = 30;
let timer = false;
let userScore = 0;
let clickCounter = 0;
let highscore = 0;

target.addEventListener("click", () => {
  if (timer === false) {
    timer = window.setInterval(function () {
      timingFunction();
    }, 1000);
  }
  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  userScore++;
  target.style.backgroundColor = randomColor();
  score.innerHTML = userScore;
  randomDivGenerator();
});

function timingFunction() {
  const userHighScore = document.querySelector("#high-score");
  if (seconds > 0) {
    seconds--;
    time.innerHTML = seconds;
  } else {
    clearInterval(timer);
    if (userScore > highscore) {
      highscore = userScore;
      userHighScore.textContent = highscore;
    }
    const modal = document.querySelector("#modal").classList.toggle("hidden");
    const overlay = document
      .querySelector("#overlay")
      .classList.toggle("hidden");
    const scoreResult = document.querySelector("#score-result");
    scoreResult.innerHTML = userScore;
    const scoreDescr = (document.querySelector(
      "#result-descr"
    ).innerHTML = `you think you can do better than ${userScore}? try again and find out!`);
  }
}

const gameBox = document
  .querySelector("#game-box")
  .addEventListener("click", () => {
    if (timer) {
      clickCounter++;
      userClicks.innerHTML = clickCounter;
    }
  });

function randomDivGenerator() {
  target.style.top = `${Math.floor(Math.random() * 700)}px`;
  target.style.left = `${Math.floor(Math.random() * 1050)}px`;
  target.style.bottom = `${Math.floor(Math.random() * 700)}px`;
  target.style.right = `${Math.floor(Math.random() * 1050)}px`;
}

function reloadGame() {
  seconds = 30;
  time.innerHTML = seconds;
  timer = false;
  userScore = 0;
  score.innerHTML = userScore;
  clickCounter = 0;
  userClicks.innerHTML = clickCounter;
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
const button = document
  .querySelector("button")
  .addEventListener("click", reloadGame);
