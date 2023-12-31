console.log("JS file");

const dayElement = document.getElementById("days");
const secondElement = document.getElementById("seconds");
const minuteElement = document.getElementById("minutes");
const hourElement = document.getElementById("hours");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`Januray 01 ${currentYear + 1} 00:00:00`);

// console.log({ hour, minute, second });

setInterval(() => {
  const currentTime = new Date();

  const diff = newYearTime - currentTime;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  dayElement.innerHTML = day;
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  hourElement.innerHTML = hour;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  minuteElement.innerHTML = minute;
  const second = Math.floor(diff / 1000) % 60;
  secondElement.innerHTML = second;
}, 1000);

// one day - 8.64e+7 milli seconds
// one day - 86400 seconds = 24 * 60 * 60
// one day - 1440 minutes
// one day - 24 hours

// 1 hour = 60 seconds * 60 minutes = 3600 seconds
