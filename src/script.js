"use strict";
const target = document.querySelector("#target");
const score = document.querySelector("#score");
const time = document.querySelector("#time");

let userScore = 0;
let seconds = 60;
time.innerHTML = seconds;

function randomDivGenerator() {
  target.style.top = `${Math.floor(Math.random() * 700)}px`;
  target.style.left = `${Math.floor(Math.random() * 900)}px`;
  target.style.bottom = `${Math.floor(Math.random() * 700)}px`;
  target.style.right = `${Math.floor(Math.random() * 900)}px`;
}

target.addEventListener("click", () => {
  userScore++;
  score.innerHTML = userScore;
  randomDivGenerator();
  setInterval(());
});
