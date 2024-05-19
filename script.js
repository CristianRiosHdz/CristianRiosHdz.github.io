function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.7; // Limitamos la altura para que los fuegos artificiales aparezcan principalmente en la parte inferior
    const size = Math.random() * 10 + 5; // Tamaño aleatorio entre 5 y 15
    
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    
    document.getElementById('fireworksContainer').appendChild(firework);
    
    setTimeout(() => {
        firework.remove();
    }, 2000); // Eliminar el fuego artificial después de 2 segundos
}

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
        
        // Generar fuegos artificiales cada 200ms
        setInterval(createFirework, 200);
    });
});
