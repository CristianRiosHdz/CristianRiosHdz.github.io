document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const mainContent = document.getElementById('mainContent');
    const fireworksContainer = document.getElementById('fireworksContainer');

    noButton.addEventListener('mouseover', () => {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', () => {
        mainContent.classList.add('hidden');
        fireworksContainer.classList.remove('hidden');
    });
});