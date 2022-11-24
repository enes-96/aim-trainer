"use strict";
const target = document.querySelector("#target");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const scoreResult = document.querySelector("#score-result");
const scoreDescr = document.querySelector("#result-descr");
const button = document.querySelector("button");

let seconds = 60;
let timer;
let userScore = 0;

time.innerHTML = seconds;

function randomDivGenerator() {
  target.style.top = `${Math.floor(Math.random() * 700)}px`;
  target.style.left = `${Math.floor(Math.random() * 900)}px`;
  target.style.bottom = `${Math.floor(Math.random() * 700)}px`;
  target.style.right = `${Math.floor(Math.random() * 900)}px`;
}

function timingFunction() {
  if (seconds > 0) {
    seconds--;
    time.innerHTML = seconds;
  } else {
    clearInterval(timer);
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    scoreResult.innerHTML = userScore;
    scoreDescr.innerHTML = `you think you can do better than ${userScore}? try again and find out!`;
  }
}

target.addEventListener("click", () => {
  if (!timer) {
    timer = window.setInterval(function () {
      timingFunction();
    }, 1000);
  }
  userScore++;
  score.innerHTML = userScore;
  randomDivGenerator();
});

function reloadGame() {
  window.location.reload();
}
button.addEventListener("click", reloadGame);
