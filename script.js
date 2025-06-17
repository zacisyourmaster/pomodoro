const timerDisplay = document.querySelector(".timer-display");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const shortBreak = document.querySelector(".short-break");
const longBreak = document.querySelector(".long-break");
const focus = document.querySelector(".focus");
const cycles = document.querySelector(".cycle");
const timerInterval = () => {
    setInterval(() => {
        timerTime--;
        displayTime();
    }, 1000);
};
let timerTime = 1500;
let totalTime = 0;
let nCycles = 0;

function displayTime() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    timerDisplay.textContent = `${minutes}:${seconds}`;

    // Set the document title with the current timer value
    document.title = `${minutes}:${seconds} - Pomodoro App`;

    if (seconds == 0 && minutes == 0) {
        nCycles++;
        cycles.textContent = `You've Completed ${nCycles} Cycles`;
        clearInterval(timerInterval);
    }
    // if (nCycles > 0) {
    //     sBreak();
    // }
}

document.addEventListener("DOMContentLoaded", () => {
    startButton.addEventListener("click", () => {
        timerInterval = setInterval(() => {
            timerTime--;
            displayTime();
        }, 1000);
    });

    stopButton.addEventListener("click", () => clearInterval(timerInterval));

    resetButton.addEventListener("click", () => {
        {
            clearInterval(timerInterval);
            timerTime = 1500;
            displayTime();
        }
    });

    shortBreak.addEventListener("click", () => {
        timerTime = 300; // 5 minutes in seconds
        clearInterval(timerInterval);
        displayTime();
    });

    longBreak.addEventListener("click", () => {
        timerTime = 900; // 15 minutes in seconds
        clearInterval(timerInterval);
        displayTime();
    });

    focus.addEventListener("click", () => {
        timerTime = 1500; // 25 minutes in seconds
        clearInterval(timerInterval);
        displayTime();
    });
});
