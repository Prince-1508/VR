// Create a sparkling effect around the card
function createSparkles() {
    const card = document.querySelector('.photo-card');
    const sparkleContainer = document.createElement('div');
    sparkleContainer.classList.add('sparkle');
    card.appendChild(sparkleContainer);
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('span');
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const delay = Math.random() * 2;
        const size = Math.random() * 5 + 2;
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${randomX}%`;
        sparkle.style.top = `${randomY}%`;
        sparkle.style.animationDelay = `${delay}s`;
        
        sparkleContainer.appendChild(sparkle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createSparkles();
});
