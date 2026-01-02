export function initGradientEffect() {
    const container = document.querySelector('.gradient-container');

    if (!container) return;

    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateGradient = () => {
        const rect = container.getBoundingClientRect();
        const x = ((mouseX - rect.left) / rect.width) * 100;
        const y = ((mouseY - rect.top) / rect.height) * 100;

        container.style.setProperty('--mouse-x', `${x}%`);
        container.style.setProperty('--mouse-y', `${y}%`);

        rafId = null;
    };

    const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!rafId) {
            rafId = requestAnimationFrame(updateGradient);
        }
    };

    const handleMouseEnter = () => {
        container.classList.add('active');
    };

    const handleMouseLeave = () => {
        container.classList.remove('active');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
    };
}
