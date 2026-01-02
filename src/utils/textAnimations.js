// Vanilla JS Text Animations
export function initTextAnimations() {
    // Exclude footer-cta-text from general text animations as it has its own typewriter effect
    const headings = document.querySelectorAll('h1:not(.footer-cta-text), h2:not(.footer-cta-text)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateText(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    headings.forEach(heading => {
        // Prepare the text
        // We'll split by words to keep it readable and semantic-ish
        const text = heading.textContent.trim();
        if (!text) return;

        // Clear content and replace with spans
        heading.innerHTML = '';
        heading.style.opacity = '1'; // Ensure parent is visible

        const words = text.split(' ');

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word; // Removed trailing space
            span.style.marginRight = '0.25em'; // Added explicit spacing
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.filter = 'blur(10px)';
            span.style.transform = 'translate3d(0, 20px, 0)';
            span.style.transition = 'all 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9)';
            // Stagger delay
            span.style.transitionDelay = `${index * 0.1}s`;

            heading.appendChild(span);
        });

        observer.observe(heading);
    });
}

function animateText(element) {
    const spans = element.querySelectorAll('span');
    spans.forEach(span => {
        span.style.opacity = '1';
        span.style.filter = 'blur(0px)';
        span.style.transform = 'translate3d(0, 0, 0)';
    });
}
