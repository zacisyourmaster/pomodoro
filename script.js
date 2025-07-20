const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const focus = document.getElementById("focus");
const cycles = document.getElementById("cycle");

let timerTime = 1500;
let totalTime = 0;
let nCycles = 0;
let timerInterval;
const timerSoundEffect = new Audio("timer_sound.mp3");

function displayTime() {
    const minutes = Math.floor(timerTime / 60);
    const seconds = timerTime % 60;

    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    timerDisplay.textContent = formattedTime;
    document.title = `${formattedTime} - ZachPomodoro`;

    // Handle timer completion
    if (timerTime <= 0) {
        nCycles++;
        cycles.textContent = `Cycles: ${nCycles}`;
        clearInterval(timerInterval);
        document.title = `🚨🚨🚨 - Timer Done!`;
        timerSoundEffect.play();

    }
}

document.addEventListener("DOMContentLoaded", () => {
    startButton.addEventListener("click", () => {
        clearInterval(timerInterval); // Clear any existing interval
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                displayTime();
            } else {
                clearInterval(timerInterval);
            }
        }, 1000);
    });

    stopButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerSoundEffect.pause();
        timerSoundEffect.currentTime = 0;
    });

    resetButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerTime = 1500;
        displayTime();
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
