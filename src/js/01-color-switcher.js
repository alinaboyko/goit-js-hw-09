const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChangeColor);
let timerId = null;

function changeColor(event) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 500);
  if (changeColor) {
    btnStart.disabled = true;
  }
}
function stopChangeColor(event) {
  clearInterval(timerId);
  if (stopChangeColor) {
    btnStart.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
