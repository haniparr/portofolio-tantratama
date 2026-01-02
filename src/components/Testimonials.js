
export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      company: "FinVision",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote: "Legally Always has been an invaluable partner in navigating the complexities of business law."
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "TechFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      quote: "Their strategic insight transformed our product roadmap and accelerated our growth significantly."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Bloom & Co",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      quote: "The rebranding campaign was a massive success. We saw a 40% increase in engagement within the first month."
    },
    {
      name: "Michael Chang",
      role: "Founder",
      company: "StartUp Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Professional, creative, and data-driven. Exactly what we needed to take our business to the next level."
    },
    {
      name: "Jessica Lee",
      role: "VP of Operations",
      company: "LogiTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      quote: "Efficiency and clarity are their hallmarks. They streamlined our processes beautifully."
    }
  ];

  return `
    <section class="testimonials-section">
        <div class="testimonials-container">
            <div class="testimonials-header">
                <h2 class="section-title">Client Stories</h2>
            </div>
            
            <div class="testimonials-grid">
                ${testimonials.map(t => `
                    <div class="testimonial-card">
                        <div class="card-header">
                            <img src="${t.image}" alt="${t.name}" class="client-avatar">
                            <div class="client-info">
                                <h4 class="client-company">${t.company}</h4>
                                <p class="client-details">${t.name} - ${t.role}</p>
                            </div>
                            <span class="quote-icon">“</span>
                        </div>
                        <p class="testimonial-quote">${t.quote}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

export function initTestimonials() {
  // No logic needed for grid layout
}
