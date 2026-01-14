export function CaseStudy(project) {
    if (!project) return '<div class="error-state">Project not found</div>';

    // Handle credits - support both old and new structure
    const credits = Array.isArray(project.credits) ? project.credits : [];

    return `
    <article class="case-study">
        <div class="cs-container">
            <!-- Left Side - Sticky Navigation & Info -->
            <aside class="cs-sidebar">
                <div class="cs-sidebar-content">
                    <div class="cs-header-group">
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

                    ${credits.length > 0 ? `
                        <div class="cs-credits">
                            <h4 class="cs-credits-title">Credits to:</h4>
                            <div class="cs-credits-list">
                                ${credits.map(credit => `
                                    <div class="cs-credit-item">
                                        <span class="cs-credit-name">${credit.name}</span>
                                        <span class="cs-credit-role">${credit.role}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
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

// Initialize scroll observer for case study
export function initCaseStudyScroll() {
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

    // Observe all sections
    const sections = document.querySelectorAll('.cs-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    console.log('Case Study scroll observer initialized for', sections.length, 'sections');
}

function updateActiveSection(id) {
    // Remove active from all nav items
    document.querySelectorAll('.cs-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active to matching nav item
    const activeItem = document.querySelector(`.cs-nav-item[data-target="${id}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
        console.log('Active section:', id);
    }
}