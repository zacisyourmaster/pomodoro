const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const shortBreak =document.querySelector('.short-break');
let timerInterval;
let timerTime = 2700;
function startTimer() {
  timerInterval = setInterval(() => {
    timerTime--;
    displayTime();
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer(){
    clearInterval(timerInterval)
    timerTime=2700;
    displayTime();
}
function displayTime() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    timerDisplay.textContent = `${minutes}:${seconds}`;
}
function shortTimer(){
  clearInterval(timerInterval)
  timerTime=540;
  displayTime();
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
shortBreak.addEventListener('click', shortTimer);