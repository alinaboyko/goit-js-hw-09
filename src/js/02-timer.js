import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const dateTimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
console.log(seconds);

let selectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] - Date.now() < 0) {
      Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
    } else {
      selectedDate = selectedDates[0];
      btnStart.removeAttribute('disabled');
    }
  },
};

btnStart.setAttribute('disabled', true);

flatpickr(dateTimePicker, options);

btnStart.addEventListener('click', btnStartClick);

function btnStartClick() {
  dateTimePicker.setAttribute('disabled', true);
  btnStart.setAttribute('disabled', true);
  intervalId = setInterval(timeUpdate, 1000);
}
function timeUpdate() {
  const deltaConvertMs = selectedDate - Date.now();

  if (deltaConvertMs <= 0) {
    clearInterval(intervalId);
    return;
  }

  const timeRemaining = convertMs(deltaConvertMs);

  days.textContent = addZero(timeRemaining.days);
  hours.textContent = addZero(timeRemaining.hours);
  minutes.textContent = addZero(timeRemaining.minutes);
  seconds.textContent = addZero(timeRemaining.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return value.toString().padStart(2, 0);
}