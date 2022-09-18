/*Timer*/
//Timer fields
var hourElement = document.querySelector('.hours-1');
var minuteElement = document.querySelector('.minutes-1');
var secondElement = document.querySelector('.seconds-1');
var i;


// Project total time
var TPhoursElement = document.querySelector('.TPhours');
var TPminutesElement = document.querySelector('.TPminutes');
var TPsecondsElement = document.querySelector('.TPseconds');

TPhoursElement = hourElement;
TPminutesElement = minuteElement;
TPsecondsElement = secondElement;

//Total time
var ThoursElement = document.querySelector('.Thours');
var TminutesElement = document.querySelector('.Tminutes');
var TsecondsElement = document.querySelector('.Tseconds');

//Buttons
var playTime = document.querySelector('.play-time');
var playIcon = document.getElementById('play');


playTime.addEventListener('click', startTimer);

//Variables
var hour = 00;
var minute = 00;
var second = 00;
var millisecond = 00;
var interval;


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
  console.log(secondElement);
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
