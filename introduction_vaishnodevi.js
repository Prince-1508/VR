document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Shri Mata Vaishno Devi Website!');

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

    const onScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        onScroll.observe(section);
    });

    // Add floating animation to hero
    const floatingCircles = document.querySelectorAll('.circle');
    floatingCircles.forEach((circle, index) => {
        circle.style.animationDelay = `${index * 0.5}s`;
    });
});


