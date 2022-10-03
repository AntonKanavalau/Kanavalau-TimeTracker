/*Timer*/
//Timer fields
let hourElement = document.querySelectorAll('.hours');
let minuteElement = document.querySelectorAll('.minutes');
let secondElement = document.querySelectorAll('.seconds');

//Buttons
let playTime = document.querySelectorAll('.play-time');
let playIcon = document.querySelectorAll('.play-icon');

playTime.forEach(btn => {
  btn.addEventListener('click', startTimer);
});

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
      secondElement.forEach(secondText => {
        secondText.innerText = "0" + second;
      });
      millisecond = 0;
    }

    //Seconds
    if (second < 9) {
      secondElement.forEach(secondText => {
        secondText.innerText = "0" + second;
      });
    }

    if (second > 9) {
      secondElement.forEach(secondText => {
        secondText.innerText = second;
      });
    }

    if (second > 59) {
      minute++;
      minuteElement.forEach(minuteText => {
        minuteText.innerText = "0" + minute;
      });
      second = 0;
      secondElement.forEach(secondText => {
        secondText.innerText = second;
      });
    }


    //Minutes
    if (minute < 9) {
      minuteElement.forEach(minuteText => {
        minuteText.innerText = "0" + minute;
      });
    }

    if (minute > 9) {
      minuteElement.forEach(minuteText => {
        minuteText.innerText = minute;
      });
    }

    if (minute > 59) {
      hour++;
      hourElement.forEach(hourText => {
        hourText.innerText = "0" + hour;
      });
      minute = 0;
      minuteElement.forEach(minuteText => {
        minuteText.innerText = "0" + minute;
      });
    }

    //Hours
    if (hour < 9) {
      hourElement.forEach(hourText => {
        hourText.innerText = "0" + hour;
      });
    }

    if (hour > 9) {
      hourElement.forEach(hourText => {
        hourText.innerText = hour;
      });
    }

    if (hour > 23) {
      hour = 0;
      hourElement.forEach(hourText => {
        hourText.innerText = "0" + hour;
      });
    }
  }, 10);

  playTime.forEach(btn => {
    btn.removeEventListener('click', startTimer);
    btn.addEventListener('click', stopTimer);
  });
  playIcon.forEach(icon => {
    icon.innerText = "pause";
  });
}

function stopTimer() {
  clearInterval(interval);
  playTime.forEach(btn => {
    btn.removeEventListener('click', stopTimer);
    btn.addEventListener('click', startTimer);
  });
  playIcon.forEach(icon => {
    icon.innerText = "play_circle_outline";
  });
}