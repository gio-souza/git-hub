const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");

  const worldCup = "20 Nov 2022";

function countdown(){

  const worldCupDate = new Date(worldCup);
  const currentDate = new Date();

  const totalSeconds = (worldCupDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
