
export function ServicesPage(testimonials = []) {
    const services = [
        {
            number: "01",
            title: "Visual Identity",
            description: "Logos, typography, and color systems that tell your brand's story."
        },
        {
            number: "02",
            title: "Digital Design",
            description: "Websites and social assets that engage and convert."
        },
        {
            number: "03",
            title: "Print & Packaging",
            description: "Tangible brand experiences that leave a lasting impression."
        },
        {
            number: "04",
            title: "Art Direction",
            description: "Guiding the visual narrative across all platforms."
        }
    ];

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "My expertise covers the three pillars of modern digital branding: Graphic Design, User Interface (UI), and Motion. From crafting your core identity to designing your website and animating your launch assets, I execute the full visual scope personally."
        },
        {
            question: "What is your design process?",
            answer: "My process is lean and direct. We start by defining your core challenge, then I move immediately into strategy and execution. Because you work only with me, there are no hand-offs or communication gaps—just a straight line from problem to solution."
        },
        {
            question: "How long does a typical project take?",
            answer: "Because I work without agency bureaucracy, I move significantly faster. While it depends on the scope, most brand identity projects are completed in 3-5 weeks, not months. I focus on rapid iteration and maintaining momentum to get you to market sooner."
        },
        {
            question: "Do you work with international clients?",
            answer: "Absolutely. My client base is primarily global, spanning from North America to Southeast Asia. I have refined a remote-first workflow that turns time zone differences into an advantage—often delivering work while you sleep so it’s ready for you in the morning."
        },
        {
            question: "How do you price your services?",
            answer: "I don't charge by the hour; I price by the value delivered. You will receive a clear, flat-project fee before we begin. This ensures that I am incentivized to deliver the best result efficiently, not to drag out the clock."
        }
    ];

    // Helper to render testimonials
    const renderTestimonials = () => {
        if (!testimonials || testimonials.length === 0) {
            // Fallback placeholder data
            const placeholders = [
                {
                    clientName: "Sarah Jenkins",
                    company: "CEO, TechStart",
                    content: "The team transformed our undefined concept into a market-leading brand identity. Truly exceptional work that exceeded all expectations."
                },
                {
                    clientName: "Mark Thompson",
                    company: "Founder, Innovate",
                    content: "Professional, efficient, and creatively brilliant. They didn't just design a logo, they built our entire visual language from scratch."
                },
                {
                    clientName: "Elena Rodriguez",
                    company: "Director, FutureScale",
                    content: "From the first meeting to final delivery, the process was seamless. The results speak for themselves - our conversion rate doubled."
                }
            ];

            return placeholders.map((data, index) => {
                const num = (index + 1).toString().padStart(2, '0');
                return `
                   <div class="service-card">
                       <div class="card-header">
                           <span class="service-number">${num}</span>
                       </div>
                       <div class="card-content">
                           <h3 class="service-title">${data.clientName}</h3>
                           <p class="service-company" style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-bottom: 1rem; margin-top: -0.5rem;">${data.company}</p>
                           <p class="service-description">"${data.content}"</p>
                       </div>
                   </div>
                 `;
            }).join('');
        }

        return testimonials.map((t, index) => {
            const data = t.attributes || t;
            const num = (index + 1).toString().padStart(2, '0');

            return `
               <div class="service-card">
                   <div class="card-header">
                       <span class="service-number">${num}</span>
                   </div>
                   <div class="card-content">
                       <h3 class="service-title">${data.clientName || 'Client Name'}</h3>
                       <p class="service-company" style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-bottom: 1rem; margin-top: -0.5rem;">${data.company || ''}</p>
                       <p class="service-description">"${data.content || ''}"</p>
                   </div>
               </div>
             `;
        }).join('');
    };

    return `
    <div class="services-page">
        <!-- Intro / Services Section -->
        <section class="services-intro">
            <div class="section-layout">
                <div class="section-label">
                    <span>[ SERVICES ]</span>
                </div>
                <div class="intro-content">
                    <div class="intro-image-box">
                        <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&w=400&q=80" alt="Creative Placeholder" class="intro-placeholder-img">
                    </div>
                    <h1 class="intro-headline">
                       I bring the discipline of a Graphic Design to the craft of visual communication. With over 5 years of experience across the US and Singapore, I translate complex business goals into clear, scalable design systems. No guesswork, just precision.
                    </h1>
                    
                    <div class="intro-features-grid">
                        <div class="service-card">
                            <div class="card-header">
                                <span class="service-number">01</span>
                            </div>
                            <div class="card-content">
                                <h3 class="service-title">Cross-Disciplinary Skillset</h3>
                                <p class="service-description">From UI design to motion graphics, I handle the entire visual ecosystem. You get a cohesive brand language without managing three different specialists.</p>
                            </div>
                        </div>
                        <div class="service-card">
                            <div class="card-header">
                                <span class="service-number">02</span>
                            </div>
                            <div class="card-content">
                                <h3 class="service-title">Timezone Agnostic</h3>
                                <p class="service-description">Distance is not a barrier. I offer flexible availability to match your working hours, ensuring that we are always in sync, no matter where your HQ is located.</p>
                            </div>
                        </div>
                        <div class="service-card">
                            <div class="card-header">
                                <span class="service-number">03</span>
                            </div>
                            <div class="card-content">
                                <h3 class="service-title">Direct Strategic Access</h3>
                                <p class="service-description">I don't just push pixels; I try tosolve problems. I align every design decision with your business goals to ensure the work actually performs, not just looks good.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Work Experience Section - Vertical Parallax -->
        <section class="work-experience-section" id="work-experience-section">

            
            <div class="section-layout">
                <div class="section-label">
                    <span>[ WORK EXPERIENCE ]</span>
                </div>
                <div class="experience-entries">
                    ${timelineData.slice(0, 5).map((item, index) => `
                        <article class="experience-entry" data-index="${index}">
                            <div class="entry-header">
                                <div class="entry-logo-box">
                                    <!-- Square Logo Placeholder -->
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <rect x="2" y="2" width="20" height="20" rx="2"></rect>
                                        <path d="M7 7h10v10H7z"></path>
                                    </svg>
                                </div>
                                <h3 class="entry-title">${item.company}</h3>
                            </div>
                            
                            <div class="entry-footer">
                                <div class="entry-meta">
                                    <span class="entry-role">${item.role}</span>
                                    <span class="entry-year">${item.year}</span>
                                </div>
                                <div class="entry-achievements-wrapper">
                                    <p class="entry-achievements">${item.achievements}</p>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>


        <!-- Clients Section -->
        <section class="clients-section">
            <div class="section-layout">
                <div class="section-label">
                    <span>[ CLIENTS ]</span>
                </div>
                <!-- ... clients grid ... -->
                <div class="clients-grid">
                    <div class="client-logo-item"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" alt="Coca Cola"></div>
                    <div class="client-logo-item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/2560px-USAID-Identity.svg.png" alt="USAID"></div>
                    <div class="client-logo-item"><span class="client-text">APLMA</span></div>
                    <div class="client-logo-item"><span class="client-text">KIK</span></div>
                    <div class="client-logo-item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ministry_of_Education%2C_Culture%2C_Research%2C_and_Technology.svg/1200px-Ministry_of_Education%2C_Culture%2C_Research%2C_and_Technology.svg.png" alt="Ministry of Education"></div>
                    <div class="client-logo-item"><span class="client-text">Client 6</span></div>
                    <div class="client-logo-item"><span class="client-text">Client 7</span></div>
                    <div class="client-logo-item"><span class="client-text">Client 8</span></div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section">
            <div class="section-layout">
                <div class="section-label">
                    <span>[ TESTIMONIALS ]</span>
                </div>
                <div class="intro-content">
                    <div class="testimonials-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0;">
                        <h1 class="intro-headline" style="margin-bottom: 0;">What my clients said</h1>
                        <div class="testimonial-controls" style="display: flex; gap: 1rem;">
                            <button id="prev-testimonial" class="nav-arrow-btn" aria-label="Previous">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <button id="next-testimonial" class="nav-arrow-btn" aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="testimonial-slider-wrapper" style="overflow: hidden;">
                        <div class="intro-features-grid testimonial-slider" id="testimonial-slider" style="display: flex; overflow-x: auto; scroll-behavior: smooth; grid-template-columns: none; scrollbar-width: none; -ms-overflow-style: none; margin-top: var(--spacing-md);">
                            ${renderTestimonials()}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="section-layout">
                <div class="section-label">
                    <span>[ FAQ ]</span>
                </div>
                <div class="faq-container">
                    <div class="faq-header">
                        <h2 class="faq-title">You may have some <em>questions</em></h2>
                    </div>
                    
                    <div class="faq-content">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item" data-faq-index="${index}">
                                <button class="faq-question" aria-expanded="false">
                                    <span>${faq.question}</span>
                                    <span class="faq-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M6 9l6 6 6-6"/>
                                        </svg>
                                    </span>
                                </button>
                                <div class="faq-answer">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
}

export function initServicesPage() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-open');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                item.classList.toggle('is-open');
                question.setAttribute('aria-expanded', !isOpen);
            });
        });
    }

    // Work Experience - Intersection Observer for scroll animations
    const experienceEntries = document.querySelectorAll('.experience-entry');
    const workSection = document.getElementById('work-experience-section');

    if (experienceEntries.length > 0) {
        // Intersection Observer for fade-in animations
        const entryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-10% 0px -10% 0px'
        });

        experienceEntries.forEach(entry => {
            entryObserver.observe(entry);
        });

        // Stacking Cards Animation
        const handleScroll = () => {
            experienceEntries.forEach((entry, index) => {
                // If it's the last one, it doesn't need to scale down
                if (index === experienceEntries.length - 1) return;

                const nextEntry = experienceEntries[index + 1];
                const stickyTop = 150; // Match CSS top value
                const nextEntryTop = nextEntry.getBoundingClientRect().top;

                // Calculate distance from the sticky position
                // We want animation to start when next card enters viewport and end when it hits sticky position
                const viewportHeight = window.innerHeight;
                const dist = nextEntryTop - stickyTop;
                const maxDist = viewportHeight - stickyTop;

                // Normalize progress: 1 when next card is at bottom, 0 when it overlaps
                let progress = Math.min(1, Math.max(0, dist / maxDist));

                // Scale from 1 down to 0.95
                const scale = 0.95 + (0.05 * progress);
                // Opacity from 1 down to 0.5 for depth
                const opacity = 0.5 + (0.5 * progress);

                // Apply ONLY if the current card is likely in its sticky state (top <= 150)
                // or simpler: just apply based on next card position if current card is visible
                if (entry.getBoundingClientRect().top <= stickyTop + 10) { // +10 fuzziness
                    entry.style.transform = `scale(${scale})`;
                    entry.style.opacity = progress < 0.1 ? 0 : opacity; // Fade out completely when covered
                    // Actually, keeping it slightly visible (opacity) might look better or worse? 
                    // User said "fade a tiny bit". Let's stick to simple scale + slight fade.
                    entry.style.opacity = opacity;
                    entry.style.filter = `brightness(${0.5 + (0.5 * progress)})`; // Darken as it goes back
                } else {
                    // Reset if not sticky yet (scrolling into view)
                    entry.style.transform = 'translateY(0) scale(1)';
                    entry.style.opacity = '1';
                    entry.style.filter = 'brightness(1)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call
        handleScroll();

    }

}

// Data Definition (moved outside to be shared)
const timelineData = [
    {
        year: 2018,
        company: "TechStart Inc.",
        role: "Junior Designer",
        achievements: "Spearheaded the redesign of internal tools, reducing user error rates by 40%. Collaborated with engineering to implement a new design system."
    },
    {
        year: 2019,
        company: "Creative Agency X",
        role: "UI Designer",
        achievements: "Delivered award-winning websites for 5 top-tier clients. Optimization of asset pipelines improved page load speeds by 25%."
    },
    {
        year: 2020,
        company: "Global Corp",
        role: "Senior Designer",
        achievements: "Led a cross-functional team of 10 in a complete brand refresh. Establish visually consistent guidelines adopted globally."
    },
    {
        year: 2021,
        company: "Freelance",
        role: "Art Director",
        achievements: "Developed comprehensive visual identity strategies for startups, resulting in a collective $5M raised in seed funding."
    },
    {
        year: 2022,
        company: "Design Studio Y",
        role: "Lead Product Designer",
        achievements: "Orchestrated the end-to-end UX/UI for a SaaS platform serving 50k+ users. improved customer retention by 15%."
    }
];

