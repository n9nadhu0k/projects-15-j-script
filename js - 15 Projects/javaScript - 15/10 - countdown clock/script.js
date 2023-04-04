
let countDownDate = new Date("january 20, 2024 0:0:0").getTime();

// setting the date and getting the time..


let getTime = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(days)
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(seconds);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(getTime);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// reference :

// To access the current date

console.log(new Date());

// To access the currentYear itself

console.log(new Date().getFullYear())

// To access the currentTime itself

console.log(new Date().getTime())

// 1000ms  = 1s
// 60s = 1m
// 60m = 1h
// 24hr = 1d
