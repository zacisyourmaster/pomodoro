const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timerInterval;
let timerTime = 2700;
function startTimer() {
  timerInterval = setInterval(() => {
    timerTime--;
    if(timerTime==2695){
        resetTimer(540);
        
      }
    displayTime();
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer(breakTime=2700){
    clearInterval(timerInterval)
    /*if(breakTime!=timerTime){
        timerTime=breakTime;
        displayTime();
    }*/
    timerTime=breakTime;
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