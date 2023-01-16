const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector('.long-break');
const cycles = document.querySelector('.cycle');
let timerInterval;
let timerTime = 1500;
let totalTime = 0;
let nCycles = 0;
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
    timerTime=1500;
    displayTime();
}
function displayTime() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    timerDisplay.textContent = `${minutes}:${seconds}`;
    if(seconds==00 && minutes == 0){
      nCycles++;
      cycles.textContent= `You've Completed ${nCycles} Cycles`
    }
    if(nCycles>0){
      sBreak();
    }
}
function sBreak(){
  timerTime=300;
  clearInterval(timerInterval);
  displayTime();
}
function lBreak(){
  clearInterval(timerInterval);
timerTime=900;
displayTime();
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
shortBreak.addEventListener('click', () => {
  timerTime = 300; // 5 minutes in seconds
  clearInterval(timerInterval);
  displayTime();
});
longBreak.addEventListener('click', () => {
  timerTime = 900; // 15 minutes in seconds
  clearInterval(timerInterval);
  displayTime();
});