/*Timer*/
//Timer fields
var hourElement = document.querySelector('.hours-task');
var minuteElement = document.querySelector('.minutes-task');
var secondElement = document.querySelector('.seconds-task');
var i;


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
  interval = setInterval(function ()
  {
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
