document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.querySelector('#score');
    const finalScore = parseInt(localStorage.getItem('score')) || 0;
    scoreElement.textContent = `점수: ${finalScore}`;
});
