/*Timer*/
//Timer fields
let hourElement = document.querySelector('.hours-1');
let minuteElement = document.querySelector('.minutes-1');
let secondElement = document.querySelector('.seconds-1');


let hourElement2 = document.querySelector('.hours-2');
let minuteElement2 = document.querySelector('.minutes-2');
let secondElement2 = document.querySelector('.seconds-2');
let i;


// Project total time
let TPhoursElement = document.querySelector('.TPhours');
let TPminutesElement = document.querySelector('.TPminutes');
let TPsecondsElement = document.querySelector('.TPseconds');

TPhoursElement = hourElement;
TPminutesElement = minuteElement;
TPsecondsElement = secondElement;

//Total time
let ThoursElement = document.querySelector('.Thours');
let TminutesElement = document.querySelector('.Tminutes');
let TsecondsElement = document.querySelector('.Tseconds');

//Buttons
let playTime = document.querySelector('.play-time');
let playIcon = document.getElementById('play');


playTime.addEventListener('click', startTimer);

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
      TsecondsElement.innerText = secondElement.innerText;
      millisecond = 0;
    }

    //Seconds
    if (second < 9) {
      secondElement.innerText = "0" + second;
      TsecondsElement.innerText = secondElement.innerText;

    }
    if (second > 9) {
      secondElement.innerText = second;
      TsecondsElement.innerText = secondElement.innerText;
    }

    if (second > 59) {
      minute++;
      minuteElement.innerText = "0" + minute;
      TminutesElement.innerText = minuteElement.innerText;
      second = 0;
      secondElement.innerText = "0" + second;
      TsecondsElement.innerText = secondElement.innerText;
    }


    //Minutes
    if (minute < 9) {
      minuteElement.innerText = "0" + minute;
      TminutesElement.innerText = minuteElement.innerText;
    }

    if (minute > 9) {
      minuteElement.innerText = minute;
      TminutesElement.innerText = minuteElement.innerText;
    }

    if (minute > 59) {
      hour++;
      hourElement.innerText = "0" + hour;
      ThoursElement.innerText = hourElement.innerText;
      minute = 0;
      minuteElement.innerText = "0" + minute;
      TminutesElement.innerText = minuteElement.innerText;
    }

    //Hours
    if (hour < 9) {
      hourElement.innerText = "0" + hour;
      ThoursElement.innerText = hourElement.innerText;
    }

    if (hour > 9) {
      hourElement.innerText = hour;
      ThoursElement.innerText = hourElement.innerText;
    }

    if (hour > 23) {
      hour = 0;
      hourElement.innerText = "0" + hour;
      ThoursElement.innerText = hourElement.innerText;
    }

    /*  ThoursElement.innerText = `${hour}`;
        TminutesElement.innerText = `${minute}`;
        TsecondsElement.innerText = `${second}`;*/
  }, 10);


  this.removeEventListener('click', startTimer);
  this.addEventListener('click', stopTimer);
  playIcon.innerText = "pause";
}

function stopTimer() {
  clearInterval(interval);
  this.removeEventListener('click', stopTimer);
  this.addEventListener('click', startTimer);
  playIcon.innerText = "play_circle_outline";
}

/*
var ThoursElement = document.querySelector('.Thours');
var TminutesElement = document.querySelector('.Tminutes');
var TsecondsElement = document.querySelector('.Tseconds');*/
