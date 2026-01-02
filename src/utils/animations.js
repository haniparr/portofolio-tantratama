export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const elements = document.querySelectorAll('.project-card, .cs-section, .hero-content > *, .hero-visual');
    elements.forEach(el => {
        el.classList.add('fade-up-element');
        observer.observe(el);
    });
}
