export function CaseStudy() {
    const project = {
        title: "Miette",
        subtitle: "Brand Identity & Web Design",
        sections: [
            {
                id: "overview",
                title: "01 Overview",
                description: "Miette is a cozy café serving fresh coffee and homemade pies, with a playful yet minimal brand identity. Bold typography and quirky illustrations create a warm, inviting atmosphere across all touchpoints.",
                images: [
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                ]
            },
            {
                id: "identity",
                title: "02 Visual Identity",
                description: "The visual identity centers around a custom logotype that balances elegance with approachability. We selected a color palette of warm creams, rich espressos, and vibrant berry tones to reflect the menu offerings.",
                images: [
                    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                ]
            },
            {
                id: "digital",
                title: "03 Digital Experience",
                description: "For the web experience, we focused on storytelling and ease of ordering. The site features smooth transitions, mouth-watering photography, and a seamless mobile-first menu system.",
                images: [
                    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                ]
            }
        ]
    };

    // Wait for DOM to be ready to attach observers
    setTimeout(() => {
        initProjectScroll();
    }, 100);

    return `
    <article class="case-study">
        <div class="cs-container">
            <!-- Left Side - Sticky Navigation & Info -->
            <aside class="cs-sidebar">
                <div class="cs-sidebar-content">
                    <div class="cs-header">
                        <h1 class="cs-main-title">${project.title}</h1>
                        <p class="cs-subtitle">${project.subtitle}</p>
                    </div>

                    <nav class="cs-nav">
                        ${project.sections.map((section, index) => `
                            <div class="cs-nav-item ${index === 0 ? 'active' : ''}" data-target="${section.id}">
                                <h3 class="cs-nav-title">${section.title}</h3>
                                <div class="cs-nav-desc-wrapper">
                                    <p class="cs-nav-desc">${section.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </nav>
                </div>
            </aside>
            
            <!-- Right Side - Scrolling Content -->
            <div class="cs-content">
                ${project.sections.map(section => `
                    <section id="${section.id}" class="cs-section" data-id="${section.id}">
                        <div class="cs-gallery">
                            ${section.images.map(img => `
                                <div class="cs-image-wrapper">
                                    <img src="${img}" alt="${section.title}" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </section>
                `).join('')}
                
                <div class="cs-footer-spacer"></div>
            </div>
        </div>
    </article>
    `;
}

function initProjectScroll() {
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Active when element is in the middle 20% of screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.dataset.id;
                updateActiveSection(id);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cs-section').forEach(section => {
        observer.observe(section);
    });
}

function updateActiveSection(id) {
    document.querySelectorAll('.cs-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === id) {
            item.classList.add('active');
        }
    });
}
