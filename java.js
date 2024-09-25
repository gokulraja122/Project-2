let startTime;
let updatedTime;
let difference;
let running = false;
let timerInterval;

const display = document.getElementById('display');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
        running = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    running = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    display.innerHTML = "00:00:00.000";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10); // Convert to milliseconds

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
    
    display.innerHTML = formattedTime;
}

function pad(number, length = 2) {
    return String(number).padStart(length, '0');
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
