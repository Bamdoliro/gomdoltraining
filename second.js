document.addEventListener('DOMContentLoaded', () => {
    let countdown = 6;
    const timerElement = document.querySelector('#time');
    const options = document.querySelectorAll('.option');
    const nextPageUrl = './thirdQuiz.html'; 

    let score = parseInt(localStorage.getItem('score')) || 0;

    const endGame = (isCorrect) => {
        clearInterval(timerInterval);
        if (isCorrect) {
            score += 10;
        }
        localStorage.setItem('score', score);
        alert(`점수: ${score}`);
        window.location.href = nextPageUrl; 
    };

    options.forEach(option => {
        option.addEventListener('click', () => {
            const isCorrect = option.dataset.correct === "true";
            endGame(isCorrect);
        });
    });

    const timerInterval = setInterval(() => {
        if (countdown > 0) {
            timerElement.textContent = --countdown;
        } else {
            endGame(false);
        }
    }, 1000);
});
