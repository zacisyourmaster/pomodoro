const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const shortBreak = document.querySelector('.short-break');
let timerInterval;
let timerTime = 1500;
let defTime = timerTime;
let totalTime = 0;
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
    timerTime=defTime;
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
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
/*shortBreak.addEventListener('click', function(){
  timerTime=300;
  resetTimer();
});*/