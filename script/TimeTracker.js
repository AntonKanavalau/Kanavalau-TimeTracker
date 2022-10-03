/*Timer*/
//Timer fields
let hourElement = document.querySelector('.hours');
let minuteElement = document.querySelector('.minutes');
let secondElement = document.querySelector('.seconds');


//Buttons
let playTime = document.querySelectorAll('.play-time');
let playIcon = document.querySelectorAll('.play-icon');

playTime.forEach(btn => {
  btn.addEventListener('click', startTimer);
})


//Variables
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;


function startTimer() {
  interval = setInterval(function () {
    millisecond++;

    //Milliseconds
    if (millisecond > 99) {
      second++;
      secondElement.innerText = "0" + second;
      millisecond = 0;
    }

    //Seconds
    if (second < 9) {
      secondElement.innerText = "0" + second;

    }
    if (second > 9) {
      secondElement.innerText = second;
    }

    if (second > 59) {
      minute++;
      minuteElement.innerText = "0" + minute;
      second = 0;
      secondElement.innerText = "0" + second;
    }


    //Minutes
    if (minute < 9) {
      minuteElement.innerText = "0" + minute;
    }

    if (minute > 9) {
      minuteElement.innerText = minute;
    }

    if (minute > 59) {
      hour++;
      hourElement.innerText = "0" + hour;
      minute = 0;
      minuteElement.innerText = "0" + minute;
    }

    //Hours
    if (hour < 9) {
      hourElement.innerText = "0" + hour;
    }

    if (hour > 9) {
      hourElement.innerText = hour;
    }

    if (hour > 23) {
      hour = 0;
      hourElement.innerText = "0" + hour;
    }
  }, 10);


  playTime.forEach(btn => {
    btn.removeEventListener('click', startTimer);
    btn.addEventListener('click', stopTimer);
  })
/*  this.removeEventListener('click', startTimer);
  this.addEventListener('click', stopTimer);*/
  playIcon.forEach(icon => {
    icon.innerText = "pause";
  })
}

function stopTimer() {
  clearInterval(interval);
  playTime.forEach(btn => {
    btn.removeEventListener('click', startTimer);
    btn.addEventListener('click', stopTimer);
  })
/*  this.removeEventListener('click', stopTimer);
  this.addEventListener('click', startTimer);*/
  playIcon.forEach(icon => {
    icon.innerText = "play_circle_outline";
  })
}