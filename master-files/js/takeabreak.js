// Countdown Timer functionality
let timerInterval;
let timerDuration = 25 * 60; // 25 minutes in seconds

function startTimer() {
    let timerDisplay = document.getElementById('timer');
    let startButton = document.getElementById('start-timer');

    startButton.disabled = true;
    
    timerInterval = setInterval(function () {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timerDuration--;

        if (timerDuration < 0) {
            clearInterval(timerInterval);
            alert('Break time is over! Back to studying!');
            startButton.disabled = false;
        }
    }, 1000);
}

document.getElementById('start-timer').addEventListener('click', startTimer);
