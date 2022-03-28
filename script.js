"use script";

const days = document.getElementById(`days`);
const hours = document.getElementById(`hours`);
const minutes = document.getElementById(`minutes`);
const seconds = document.getElementById(`seconds`);

let nullDays = 13;
let nullHours = 23;
let nullMinutes = 59;
let nullSeconds = 59;

let timerInterval = setInterval(() => {
  days.innerHTML = nullDays;
  hours.innerHTML = nullHours;
  minutes.innerHTML = nullMinutes;
  seconds.innerHTML = nullSeconds;

  nullSeconds--;

  if (nullSeconds < 10) {
    nullSeconds = "0" + nullSeconds;
  }

  if (nullSeconds <= 0) {
    nullMinutes--;
    nullSeconds = 59;
  }

  if (nullMinutes >= 60) {
    nullMinutes--;
  }

  // if (nullMinutes < 10) {
  //   nullMinutes = "0" + nullMinutes;
  // }

  // if (nullHours < 10) {
  //   nullHours = `0` + nullHours;
  // }
  if (nullMinutes <= 0) {
    nullHours--;
    nullMinutes = 59;
  }

  if (nullHours <= 0) {
    nullDays--;
    nullHours = 23;
  }

  if (nullDays < 0) clearInterval(timerInterval);

  // days.innerHTML = new Date().getDate();
  // hours.innerHTML = new Date().getHours();
  // minutes.innerHTML = new Date().getMinutes();
  // seconds.innerHTML = new Date().getSeconds();
  // if (days < 10) {
  //   days = "0" + days;
  // }
  // if (hours < 10) {
  //   hours = "0" + hours;
  // }
  // if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }
  // if (seconds < 10) {
  //   seconds = "0" + seconds;
  // }
}, 1000);
