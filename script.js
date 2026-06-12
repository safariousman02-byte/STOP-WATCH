let hours = 0;
let minutes = 0;
let seconds = 0;
let timerinterval = null;
let isrunning = false;

function formatTime() {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime()
}

function updateTimer() {
    second++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes === 60) {
        minutes = 0;
        hours ++;
    }

    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterVal(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    hour = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

document.getElementById('startbtn').addEventListener('click', startTimer);
document.getElementById('startbtn').addEventListener('click', pauseTimer);
document.getElementById('startbtn').addEventListener('click', resetTimer);

updateDisplay();