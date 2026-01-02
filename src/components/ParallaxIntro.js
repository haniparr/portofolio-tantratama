
export function ParallaxIntro() {
    const images = [
        { src: "https://images.pexels.com/photos/3052727/pexels-photo-3052727.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.2, class: "img-1" },
        { src: "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.5, class: "img-2" },
        { src: "https://images.pexels.com/photos/3052728/pexels-photo-3052728.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.3, class: "img-3" },
        { src: "https://images.pexels.com/photos/3052726/pexels-photo-3052726.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.6, class: "img-4" },
        { src: "https://images.pexels.com/photos/3052724/pexels-photo-3052724.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.4, class: "img-5" },
        // New images
        { src: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.25, class: "img-6" },
        { src: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.55, class: "img-7" },
        { src: "https://images.pexels.com/photos/3062532/pexels-photo-3062532.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.35, class: "img-8" },
        { src: "https://images.pexels.com/photos/3062553/pexels-photo-3062553.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.65, class: "img-9" },
        { src: "https://images.pexels.com/photos/3062539/pexels-photo-3062539.jpeg?auto=compress&cs=tinysrgb&w=800", speed: 0.45, class: "img-10" },
    ];

    return `
    <div class="parallax-intro">
        <div class="parallax-content">
            <h1 class="parallax-title">
                <span>TANTRA</span>
                <span>HARIASTAMA</span>
            </h1>
            <p class="parallax-year">1929</p>
        </div>
        
        <div class="parallax-images">
            ${images.map(img => `
                <div class="parallax-img-wrapper ${img.class}" data-speed="${img.speed}">
                    <img src="${img.src}" alt="Parallax Image" loading="lazy">
                </div>
            `).join('')}
        </div>
    </div>
    `;
}

export function initParallaxIntro() {
    const section = document.querySelector('.parallax-intro');
    const images = document.querySelectorAll('.parallax-img-wrapper');

    if (!section || !images.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const sectionHeight = section.offsetHeight;

        // Only animate if within view (roughly)
        if (scrollY > sectionHeight * 1.5) return;

        images.forEach(img => {
            const speed = parseFloat(img.getAttribute('data-speed'));
            const yPos = scrollY * speed * -1; // Move up as we scroll down

            // Calculate blur based on scroll position
            // Start blurring after some scroll, max out at 10px
            const blurAmount = Math.min(Math.max((scrollY - 100) / 50, 0), 10);

            img.style.transform = `translate3d(0, ${yPos}px, 0)`;
            img.style.filter = `blur(${blurAmount}px)`;
        });
    });
}
