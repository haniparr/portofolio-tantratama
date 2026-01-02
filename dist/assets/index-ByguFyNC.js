(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const U="data:image/png;base64,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";function X(){const e=Array(8).fill(U),t=550,s=360/e.length;return`
    <div class="circle-animator-container">
      <div class="circle-overlay">
        <h1>Creative Strategist</h1>
        <p>Building Future Brands</p>
      </div>
      <div class="circle-track">
        ${e.map((n,r)=>`
      <div class="circle-item" style="transform: rotate(${r*s}deg) translate(${t}px) rotate(90deg)">
        <div class="circle-item-inner">
            <img src="${n}" alt="Work ${r+1}" style="object-fit: contain;" />
        </div>
      </div>
    `).join("")}
      </div>
    </div>
  `}function K(){return`
        <section class="hero" id="hero">
            ${X()}
            
            <div class="hero-overlay-content">
                 <div class="hero-cta-wrapper">
                    <button class="btn-primary">View Selected Work</button>
                 </div>
            </div>
        </section>
    `}function _(){return`
    <div class="parallax-intro">
        <div class="parallax-content">
            <h1 class="parallax-title">
                <span>URBAN</span>
                <span>JÜRGENSEN</span>
            </h1>
            <p class="parallax-year">1773</p>
        </div>
        
        <div class="parallax-images">
            ${[{src:"https://images.pexels.com/photos/3052727/pexels-photo-3052727.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.2,class:"img-1"},{src:"https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.5,class:"img-2"},{src:"https://images.pexels.com/photos/3052728/pexels-photo-3052728.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.3,class:"img-3"},{src:"https://images.pexels.com/photos/3052726/pexels-photo-3052726.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.6,class:"img-4"},{src:"https://images.pexels.com/photos/3052724/pexels-photo-3052724.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.4,class:"img-5"},{src:"https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.25,class:"img-6"},{src:"https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.55,class:"img-7"},{src:"https://images.pexels.com/photos/3062532/pexels-photo-3062532.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.35,class:"img-8"},{src:"https://images.pexels.com/photos/3062553/pexels-photo-3062553.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.65,class:"img-9"},{src:"https://images.pexels.com/photos/3062539/pexels-photo-3062539.jpeg?auto=compress&cs=tinysrgb&w=800",speed:.45,class:"img-10"}].map(t=>`
                <div class="parallax-img-wrapper ${t.class}" data-speed="${t.speed}">
                    <img src="${t.src}" alt="Parallax Image" loading="lazy">
                </div>
            `).join("")}
        </div>
    </div>
    `}function G(){const e=document.querySelector(".parallax-intro"),t=document.querySelectorAll(".parallax-img-wrapper");!e||!t.length||window.addEventListener("scroll",()=>{const i=window.scrollY,s=e.offsetHeight;i>s*1.5||t.forEach(o=>{const n=parseFloat(o.getAttribute("data-speed")),r=i*n*-1,a=Math.min(Math.max((i-100)/50,0),10);o.style.transform=`translate3d(0, ${r}px, 0)`,o.style.filter=`blur(${a}px)`})})}typeof window<"u"&&!window._gridMouseTrackerInitialized&&(window.addEventListener("mousemove",e=>{e.clientX,e.clientY}),window._gridMouseTrackerInitialized=!0);function Z(){return`
    <section class="portfolio-list-section">
      <div class="portfolio-list">
        ${[{client:"FinTech Corp",year:"2024",services:"Rebrand, UI/UX",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/fintech/60"},{client:"E-Shop Global",year:"2023",services:"E-commerce App",image:"https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/eshop/60"},{client:"DataSystems",year:"2023",services:"SaaS Dashboard",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/data/60"},{client:"Luxe Hotel",year:"2022",services:"Web Design",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/luxe/60"},{client:"Innovate Inc",year:"2022",services:"Identity System",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/innovate/60"},{client:"Vogue Style",year:"2021",services:"Campaign",image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",logo:"https://picsum.photos/seed/vogue/60"}].map((t,i)=>`
          <div class="portfolio-item" data-image="${t.image}">
            <div class="item-col client">
                <img src="${t.logo}" alt="${t.client} Logo" class="client-logo">
                ${t.client} <span class="client-year">${t.year}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
    
    <div class="pagination-controls">
        <button class="pagination-btn prev" disabled>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="pagination-numbers">
            <span class="page-number active">1</span>
            <span class="page-number">2</span>
            <span class="page-number">3</span>
        </div>
        <button class="pagination-btn next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    </div>
  `}let I=null,z=null;function J(){const e=document.querySelectorAll(".portfolio-item");V();const t=document.createElement("div");t.className="portfolio-preview",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.zIndex="9999",t.style.pointerEvents="none",t.innerHTML=`
    <div class="preview-inner">
      <img src="" alt="Project Preview" id="preview-image">
    </div>
  `,document.body.appendChild(t);const i=t.querySelector("#preview-image");let s=window.innerWidth/2,o=window.innerHeight/2,n=s,r=o;const a=(c,h,m)=>c+(h-c)*m;z=c=>{s=c.clientX,o=c.clientY},document.addEventListener("mousemove",z);const d=()=>{n=a(n,s,.15),r=a(r,o,.15),t&&(t.style.transform=`translate3d(${n+20}px, ${r+20}px, 0)`),I=requestAnimationFrame(d)};I=requestAnimationFrame(d),e.forEach(c=>{c.addEventListener("mouseenter",()=>{const h=c.getAttribute("data-image");h&&i&&(i.src=h,t.classList.add("active"))}),c.addEventListener("mouseleave",()=>{t&&t.classList.remove("active")})})}function V(){const e=document.querySelector(".portfolio-preview");e&&e.remove(),I&&(cancelAnimationFrame(I),I=null),z&&(document.removeEventListener("mousemove",z),z=null)}function Q(){return`
    <div class="work-page" style="padding-top: 120px; min-height: 100vh;">
        <div style="max-width: 1440px; margin: 0 auto; padding: 0 var(--spacing-md);">
            <h1 style="font-size: clamp(3rem, 6vw, 5rem); margin-bottom: var(--spacing-lg);">Selected Work</h1>
        </div>
        ${Z()}
    </div>
  `}function ee(){const e=[{number:"01",title:"Visual Identity",description:"Logos, typography, and color systems that tell your brand's story."},{number:"02",title:"Digital Design",description:"Websites and social assets that engage and convert."},{number:"03",title:"Print & Packaging",description:"Tangible brand experiences that leave a lasting impression."},{number:"04",title:"Art Direction",description:"Guiding the visual narrative across all platforms."}],t=[{question:"What services do you offer?",answer:"We offer a comprehensive range of creative services including brand strategy, visual identity design, digital design, print and packaging, and art direction. Our team works closely with clients to deliver tailored solutions that meet their specific needs."},{question:"What is your design process?",answer:"Our design process begins with discovery and research, followed by strategy development, creative exploration, and iterative refinement. We believe in collaborative partnerships and keep clients involved at every stage."},{question:"How long does a typical project take?",answer:"Project timelines vary based on scope and complexity. A brand identity project typically takes 4-8 weeks, while larger digital projects may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."},{question:"Do you work with international clients?",answer:"Yes! We work with clients across 12+ countries. Thanks to modern communication tools, we can collaborate effectively regardless of location and time zone differences."},{question:"What is included in a brand identity package?",answer:"Our brand identity packages typically include logo design, color palette, typography system, brand guidelines, and core brand assets. We can customize packages based on your specific requirements."},{question:"How do you price your services?",answer:"We provide custom quotes based on project scope, timeline, and deliverables. Contact us for a free consultation and we'll put together a proposal tailored to your needs and budget."}];return`
    <div class="services-page">
        <section class="services-intro">
            <div class="intro-content">
                <div class="intro-image-box">
                    <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&w=400&q=80" alt="Creative Placeholder" class="intro-placeholder-img">
                </div>
                <h1 class="intro-headline">
                    No more generic templates. No more flaky freelancers. No more managing junior designers. 
                    <span class="text-muted">Just top-tier graphic design that’s strategic, high velocity, and sensibly priced.</span>
                </h1>
                <p class="intro-subheadline">
                    Get transformational visual identity and capabilities in a direct partnership that promises your brand will stand out.
                </p>
                
                <div class="intro-divider"></div>
                
                <div class="intro-features-grid">
                    <div class="features-label">
                        <span class="dot">●</span> CREATIVE AS IT SHOULD BE
                    </div>
                    <div class="features-list">
                        <div class="feature-item">
                            <h3 class="feature-title">Comprehensive Design</h3>
                            <p class="feature-desc">From complex brand identities to marketing collateral, every visual touchpoint is crafted with precision and strategic intent.</p>
                        </div>
                        <div class="feature-item">
                            <h3 class="feature-title">Transparent Partnership</h3>
                            <p class="feature-desc">No hidden fees or hourly haggling. Clear, project-based engagement that respects your budget and timeline.</p>
                        </div>
                        <div class="feature-item">
                            <h3 class="feature-title">Direct Collaboration</h3>
                            <p class="feature-desc">Work directly with the lead designer. No account managers, no game of telephone. Pure creative efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Grid Section (Added) -->
        <section class="services-section">
            <div class="services-container">
                <div class="services-grid">
                    ${e.map(i=>`
                        <div class="service-card">
                            <span class="service-number">${i.number}</span>
                            <h3 class="service-title">${i.title}</h3>
                            <p class="service-description">${i.description}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- Clients Section -->
        <section class="clients-section">
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
        </section>

        <!-- FAQ Section (Moved from Home) -->
        <section class="faq-section">
            <div class="faq-container">
                <div class="faq-layout">
                    <div class="faq-header">
                        <span class="faq-label">FAQ</span>
                        <h2 class="faq-title">You may have some <em>questions</em></h2>
                    </div>
                    
                    <div class="faq-content">
                        ${t.map((i,s)=>`
                            <div class="faq-item" data-faq-index="${s}">
                                <button class="faq-question" aria-expanded="false">
                                    <span>${i.question}</span>
                                    <span class="faq-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M6 9l6 6 6-6"/>
                                        </svg>
                                    </span>
                                </button>
                                <div class="faq-answer">
                                    <p>${i.answer}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>
    </div>
    `}function te(){const e=document.querySelectorAll(".faq-item");e.length>0&&e.forEach(t=>{const i=t.querySelector(".faq-question");t.querySelector(".faq-answer"),i.addEventListener("click",()=>{const s=t.classList.contains("is-open");e.forEach(o=>{o!==t&&(o.classList.remove("is-open"),o.querySelector(".faq-question").setAttribute("aria-expanded","false"))}),t.classList.toggle("is-open"),i.setAttribute("aria-expanded",!s)})})}function ie(){return`
    <div class="blog-page">
        <div class="blog-container">
            <header class="blog-page-header">
                <h1 class="blog-page-title">Blog & articles</h1>
                <div class="blog-filters">
                    <button class="filter-btn active">All</button>
                    <button class="filter-btn">Marketing Tips</button>
                    <button class="filter-btn">Business Strategies</button>
                    <button class="filter-btn">Industry Insights</button>
                    <button class="filter-btn">Client Success</button>
                </div>
            </header>

            <section class="featured-article">
                <div class="featured-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Featured Article">
                </div>
                <div class="featured-content">
                    <span class="article-tag">News</span>
                    <h2 class="featured-title">Maximizing Efficiency in Operations</h2>
                    <p class="featured-excerpt">We offer a comprehensive range of services designed to meet the unique needs of your business. From strategy development to risk management, our expert team is dedicated to driving your success.</p>
                    <button class="btn-read-more">Read more</button>
                </div>
            </section>

            <section class="latest-insights">
                <div class="section-header">
                    <span class="sub-label">● Blog and articles</span>
                    <h3 class="section-headline">Latest insights and trends</h3>
                </div>
                
                <div class="insights-grid">
                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Insight 1">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>

                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" alt="Insight 2">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>

                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Insight 3">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>
                    
                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" alt="Insight 4">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>

                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" alt="Insight 5">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>

                    <article class="insight-card">
                        <div class="insight-image">
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" alt="Insight 6">
                        </div>
                        <div class="insight-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency in Operations</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
    `}function se(){return`
    <section class="contact-page">
      <div class="contact-container">
        
        <div class="contact-hero">
          <h1 class="contact-headline">
            Got a cool project you're working on or an idea you want to chat about? Hit me up—I'm ready to help if I can.
          </h1>
        </div>

        <div class="contact-links-section">
          <div class="contact-link-row">
            <span class="link-label">Email</span>
            <a href="mailto:me@connormurphy.design" class="link-url">me@connormurphy.design</a>
          </div>
          <div class="contact-link-row">
            <span class="link-label">Formerly Twitter</span>
            <a href="https://x.com/atconnormurphy" target="_blank" class="link-url">x.com/atconnormurphy</a>
          </div>
          <div class="contact-link-row">
            <span class="link-label">Linkedin</span>
            <a href="https://linkedin.com/connormurphydesign" target="_blank" class="link-url">linkedin.com/connormurphydesign</a>
          </div>
          <div class="contact-link-row">
            <span class="link-label">Dribbble</span>
            <a href="https://dribbble.com/connormurphy" target="_blank" class="link-url">dribbble.com/connormurphy</a>
          </div>
          <div class="contact-link-row">
            <span class="link-label">CV</span>
            <a href="https://read.cv/connormurphy" target="_blank" class="link-url">read.cv/connormurphy</a>
          </div>
        </div>

        <div class="contact-footer-cta">
          <p class="cta-text">Interested in working together?</p>
          <a href="mailto:me@connormurphy.design" class="cta-email">me@connormurphy.design</a>
        </div>

      </div>
    </section>
  `}function oe(){return`
    <section class="about-section">
      <div class="about-container">
        <div class="about-layout">
          <div class="about-label">
            <span>about me</span>
          </div>
          
          <div class="about-content">
            <div class="quote-box">
              <h1>"I am a creative team dedicated to crafting innovative designs and strategies."</h1>
            </div>
            
            <div class="about-description">
              <p>
                At <strong>Antigravity®</strong>, I believe in the power of creativity to captivate audiences and build meaningful connections. I exist to liberate brands from the ordinary. With my expertise in design and marketing, I transform ideas into powerful campaigns that capture attention, inspire action, and make a lasting impact.
              </p>
              <a href="#" class="more-link">more about me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ne(){const e=["Development","UI/UX Design","E-commerce","Product Design","Development","UI/UX Design","E-commerce","Product Design","Development","UI/UX Design","E-commerce","Product Design"],t=["Packaging","Art Direction","Content","Brand Identity","Packaging","Art Direction","Content","Brand Identity","Packaging","Art Direction","Content","Brand Identity"],i=(s,o=!1)=>`
        <div class="ticker-track ${o?"reverse":""}">
            <div class="ticker-content">
                ${s.map(n=>`
                    <div class="ticker-item">
                        <div class="ticker-placeholder"></div>
                        ${n}
                    </div>
                `).join("")}
                ${s.map(n=>`
                    <div class="ticker-item">
                        <div class="ticker-placeholder"></div>
                        ${n}
                    </div>
                `).join("")}
            </div>
        </div>
    `;return`
        <section class="skill-ticker-section">
            <div class="ticker-wrapper">
                ${i(e)}
                ${i(t,!0)}
            </div>
        </section>
    `}function S(){return`
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-top">
          <div class="cta-section">
            <h2 class="footer-cta-text">
              Have a project in mind? Let’s get to work. We’re always open for a chat, so get in touch to find out how we can help.
            </h2>
            <a href="mailto:hello@example.com" class="btn-footer">
              <span>↳ Let's Collaborate</span>
            </a>
          </div>
        </div>

        <div class="footer-middle">
          <div class="footer-tagline">
            <h3>Simplicity Creates<br>Clarity</h3>
          </div>
          
          <div class="footer-cols">
            <div class="footer-col">
              <h4>Office</h4>
              <p>Jakarta, Indonesia</p>
              <p>South Quarter, Tower A</p>
              <p>Jl. R.A. Kartini Kav 8</p>
            </div>
            
            <div class="footer-col">
              <h4>Sitemap</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Behance</a></li>
                <li><a href="#">Twitter / X</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            <p>Copyright © 2024 Creative Strategist</p>
          </div>
          <div class="big-text">
            <span>CREATIVE — STRATEGIST</span>
          </div>
        </div>
      </div>
    </footer>
  `}function x(){const e=document.querySelector(".site-footer"),t=document.querySelector("#main-wrapper");if(!e||!t)return;const i=()=>{const o=e.offsetHeight,n=window.innerHeight;o>n?(e.style.position="relative",e.style.zIndex="2",t.style.marginBottom="0px"):(e.style.position="fixed",e.style.zIndex="0",e.style.bottom="0",e.style.left="0",e.style.width="100%",t.style.marginBottom=`${o}px`)};requestAnimationFrame(i),new ResizeObserver(i).observe(e),window.addEventListener("resize",i)}function $(e={}){const t={position:"bottom",strength:2,height:"120px",divCount:8,zIndex:50,...e},i=document.createElement("div");i.className=`gradual-blur gradual-blur-${t.position}`,Object.assign(i.style,{position:"fixed",left:"0",right:"0",[t.position]:"0",height:t.height,zIndex:t.zIndex,pointerEvents:"none",overflow:"hidden"});for(let s=1;s<=t.divCount;s++){const o=document.createElement("div"),n=Math.pow(s,2)/Math.pow(t.divCount,2)*t.strength,r=100/t.divCount,a=(r*s-r).toFixed(1),d=(r*s).toFixed(1),c=(r*s+r).toFixed(1),h=(r*s+r*2).toFixed(1),m=t.position==="bottom"?"to bottom":"to top";let l=`transparent ${a}%, black ${d}%`;parseFloat(c)<=100&&(l+=`, black ${c}%`),parseFloat(h)<=100&&(l+=`, transparent ${h}%`),Object.assign(o.style,{position:"absolute",inset:"0",maskImage:`linear-gradient(${m}, ${l})`,webkitMaskImage:`linear-gradient(${m}, ${l})`,backdropFilter:`blur(${n}px)`,webkitBackdropFilter:`blur(${n}px)`}),i.appendChild(o)}return i}function k(){const e=document.querySelector("#app"),t=$({position:"top",height:"100px",strength:2,divCount:6}),i=$({position:"bottom",height:"100px",strength:2,divCount:6});e.appendChild(t),e.appendChild(i)}function re(){const e={title:"Miette",subtitle:"Brand Identity & Web Design",sections:[{id:"overview",title:"01 Overview",description:"Miette is a cozy café serving fresh coffee and homemade pies, with a playful yet minimal brand identity. Bold typography and quirky illustrations create a warm, inviting atmosphere across all touchpoints.",images:["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"]},{id:"identity",title:"02 Visual Identity",description:"The visual identity centers around a custom logotype that balances elegance with approachability. We selected a color palette of warm creams, rich espressos, and vibrant berry tones to reflect the menu offerings.",images:["https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"]},{id:"digital",title:"03 Digital Experience",description:"For the web experience, we focused on storytelling and ease of ordering. The site features smooth transitions, mouth-watering photography, and a seamless mobile-first menu system.",images:["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"]}]};return setTimeout(()=>{ae()},100),`
    <article class="case-study">
        <div class="cs-container">
            <!-- Left Side - Sticky Navigation & Info -->
            <aside class="cs-sidebar">
                <div class="cs-sidebar-content">
                    <div class="cs-header">
                        <h1 class="cs-main-title">${e.title}</h1>
                        <p class="cs-subtitle">${e.subtitle}</p>
                    </div>

                    <nav class="cs-nav">
                        ${e.sections.map((t,i)=>`
                            <div class="cs-nav-item ${i===0?"active":""}" data-target="${t.id}">
                                <h3 class="cs-nav-title">${t.title}</h3>
                                <div class="cs-nav-desc-wrapper">
                                    <p class="cs-nav-desc">${t.description}</p>
                                </div>
                            </div>
                        `).join("")}
                    </nav>
                </div>
            </aside>
            
            <!-- Right Side - Scrolling Content -->
            <div class="cs-content">
                ${e.sections.map(t=>`
                    <section id="${t.id}" class="cs-section" data-id="${t.id}">
                        <div class="cs-gallery">
                            ${t.images.map(i=>`
                                <div class="cs-image-wrapper">
                                    <img src="${i}" alt="${t.title}" loading="lazy">
                                </div>
                            `).join("")}
                        </div>
                    </section>
                `).join("")}
                
                <div class="cs-footer-spacer"></div>
            </div>
        </div>
    </article>
    `}function ae(){const e={root:null,rootMargin:"-40% 0px -40% 0px",threshold:0},t=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){const o=s.target.dataset.id;le(o)}})},e);document.querySelectorAll(".cs-section").forEach(i=>{t.observe(i)})}function le(e){document.querySelectorAll(".cs-nav-item").forEach(t=>{t.classList.remove("active"),t.dataset.target===e&&t.classList.add("active")})}function A(){return`
    <div class="staggered-menu-wrapper fixed-wrapper">
      <header class="staggered-menu-header">
        <a href="#" class="sm-logo">CREATIVE STRATEGIST</a>
        <button class="sm-toggle" aria-label="Toggle Menu">
          <span class="sm-toggle-text">Menu</span>
          <span class="sm-icon">
            <span class="sm-icon-line"></span>
            <span class="sm-icon-line"></span>
          </span>
        </button>
      </header>
      
      <div class="sm-backdrop"></div>
      
      <div class="staggered-menu-panel">
        <div class="sm-panel-inner">
          <nav>
            <ul class="sm-panel-list" data-numbering="true">
              <li><a href="#" class="sm-panel-item" data-index="0">Work</a></li>
              <li><a href="#" class="sm-panel-item" data-index="1">About</a></li>
              <li><a href="#" class="sm-panel-item" data-index="2">Blog</a></li>
              <li><a href="#" class="sm-panel-item" data-index="3">Contact</a></li>
            </ul>
          </nav>
          
          <div class="sm-socials">
            <h3 class="sm-socials-title">Connect</h3>
            <ul class="sm-socials-list">
              <li><a href="#" class="sm-socials-link">LinkedIn</a></li>
              <li><a href="#" class="sm-socials-link">Instagram</a></li>
              <li><a href="#" class="sm-socials-link">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function E(){const e=document.querySelector(".staggered-menu-wrapper"),t=document.querySelector(".sm-toggle"),i=document.querySelector(".sm-backdrop"),s=document.querySelectorAll(".sm-panel-item"),o=document.querySelector(".sm-toggle-text");let n=!1;function r(){n=!n,e.classList.toggle("open"),o.textContent=n?"Close":"Menu",n?s.forEach((a,d)=>{a.style.transitionDelay=`${.2+d*.1}s`}):s.forEach(a=>{a.style.transitionDelay="0s"})}t.addEventListener("click",r),i.addEventListener("click",r),s.forEach(a=>{a.addEventListener("click",()=>{n&&r()})})}function ce(){return`
    <section class="featured-work-section">
      <div class="featured-work-header">
        <h1 class="featured-headline">Selected Work</h1>
        <p class="featured-sub">A curated selection of projects that define our creative vision.</p>
      </div>
      
      <div class="work-grid">
        ${[{image:"https://images.unsplash.com/photo-1481487484168-9b930d5b7d25?auto=format&fit=crop&w=800&q=80",title:"Beermut",tagline:"Bringing fun to gatherings."},{image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",title:"Body Ōm",tagline:"To elevate mood and awaken the senses."},{image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",title:"Fapro",tagline:"Every piece of data, a business opportunity."},{image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",title:"El Guarango",tagline:"This vermouth will bring you knowledge."},{image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",title:"Salta",tagline:"A gourmet snack for breaking routine."},{image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",title:"Pocho",tagline:"Clothing to play and explore."}].map((t,i)=>`
          <div class="work-card" data-index="${i}">
            <div class="work-card-image">
              <img src="${t.image}" alt="${t.title}" loading="lazy">
              <div class="work-card-overlay"></div>
            </div>
            <div class="work-card-content">
              <span class="work-card-title">${t.title}</span>
              <h3 class="work-card-tagline">${t.tagline}</h3>
            </div>
          </div>
        `).join("")}
      </div>
      
      <div class="featured-cta">
        <button class="btn-primary" id="see-all-work">
          See All Work
        </button>
      </div>
    </section>
  `}function de(){const e=document.querySelectorAll(".work-card");e.length&&e.forEach(t=>{t.addEventListener("mouseenter",()=>{t.classList.add("is-hovered")}),t.addEventListener("mouseleave",()=>{t.classList.remove("is-hovered")})})}function he(){return`
    <section class="blog-section">
      <div class="blog-header">
        <span class="section-label">[ OUR WORK ]</span>
        <h2 class="section-title">
          Explore the artistry and <br>
          precision behind <strong>our <br>
          portfolio</strong> of timeless <br>
          photography
        </h2>
        <p class="section-desc">
          Embark On A Visual Journey Through Our Cherished Moments Captured With Creativity And Precision. Each Image In Our Portfolio Reflects Our Dedication To Preserving Life's Beauty And Significance.
          <br><br>
          <button class="btn-explore">
            EXPLORE MORE 
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </p>
      </div>

      <div class="blog-grid">
        ${[{id:"01",title:"Majestic Creatures of the African Savanna",desc:"Capturing the Exquisite Patterns and Dynamic Energy of Africa's Most Iconic Big Cat",tags:["Wildlife Portraits","Nature","Mammals","#2023"],image:"https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"},{id:"02",title:"A Temple's Serene Silhouette",desc:"Exploring the spiritual architecture and peaceful atmosphere of ancient eastern temples.",tags:["Architecture","Travel","Culture"],image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"},{id:"03",title:"Moments Framed in Portraits",desc:"A deep dive into the art of capturing human emotion and storytelling through portraiture.",tags:["Portrait","Lifestyle","People"],image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"},{id:"04",title:"Urban Solitude",desc:"Finding stillness in the chaos of city life through the lens of architectural minimalism.",tags:["Urban","Architecture","City"],image:"https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80"}].map(t=>`
          <div class="blog-card">
            <div class="blog-card-bg">
                <img src="${t.image}" alt="${t.title}">
            </div>
            <div class="blog-card-overlay"></div>
            
            <div class="blog-content">
                <div class="blog-tags">
                    ${t.tags.map(i=>`<span class="blog-tag">${i}</span>`).join("")}
                </div>
                
                <h3 class="blog-title">${t.title}</h3>
                <p class="blog-desc">${t.desc}</p>
                
                <button class="blog-btn">
                    MORE DETAILS
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `}function P(){const e={root:null,rootMargin:"0px",threshold:.1},t=new IntersectionObserver((s,o)=>{s.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-in"),o.unobserve(n.target))})},e);document.querySelectorAll(".project-card, .cs-section, .hero-content > *, .hero-visual").forEach(s=>{s.classList.add("fade-up-element"),t.observe(s)})}function O(){const e=document.querySelectorAll("h1, h2"),t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(pe(s.target),t.unobserve(s.target))})},{threshold:.2});e.forEach(i=>{const s=i.textContent.trim();if(!s)return;i.innerHTML="",i.style.opacity="1",s.split(" ").forEach((n,r)=>{const a=document.createElement("span");a.textContent=n,a.style.marginRight="0.25em",a.style.display="inline-block",a.style.opacity="0",a.style.filter="blur(10px)",a.style.transform="translate3d(0, 20px, 0)",a.style.transition="all 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9)",a.style.transitionDelay=`${r*.1}s`,i.appendChild(a)}),t.observe(i)})}function pe(e){e.querySelectorAll("span").forEach(i=>{i.style.opacity="1",i.style.filter="blur(0px)",i.style.transform="translate3d(0, 0, 0)"})}var ue="1.3.15";function F(e,t,i){return Math.max(e,Math.min(t,i))}function me(e,t,i){return(1-i)*e+i*t}function ge(e,t,i,s){return me(e,t,1-Math.exp(-i*s))}function ve(e,t){return(e%t+t)%t}var fe=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const i=F(0,this.currentTime/this.duration,1);t=i>=1;const s=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=ge(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i,duration:s,easing:o,onStart:n,onUpdate:r}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,n?.(),this.onUpdate=r}};function we(e,t){let i;return function(...s){let o=this;clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(o,s)},t)}}var ye=class{constructor(e,t,{autoResize:i=!0,debounce:s=250}={}){this.wrapper=e,this.content=t,i&&(this.debouncedResize=we(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},j=class{events={};emit(e,...t){let i=this.events[e]||[];for(let s=0,o=i.length;s<o;s++)i[s]?.(...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(i=>t!==i)}}off(e,t){this.events[e]=this.events[e]?.filter(i=>t!==i)}destroy(){this.events={}}},B=100/6,y={passive:!1},be=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,y),this.element.addEventListener("touchstart",this.onTouchStart,y),this.element.addEventListener("touchmove",this.onTouchMove,y),this.element.addEventListener("touchend",this.onTouchEnd,y)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new j;on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,y),this.element.removeEventListener("touchstart",this.onTouchStart,y),this.element.removeEventListener("touchmove",this.onTouchMove,y),this.element.removeEventListener("touchend",this.onTouchEnd,y)}onTouchStart=e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,s=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:i,deltaMode:s}=e;const o=s===1?B:s===2?this.window.width:1,n=s===1?B:s===2?this.window.height:1;t*=o,i*=n,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},H=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Se=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new fe;emitter=new j;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:i=e,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:n=.075,touchInertiaExponent:r=1.7,duration:a,easing:d,lerp:c=.1,infinite:h=!1,orientation:m="vertical",gestureOrientation:l=m==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:g=1,autoResize:f=!0,prevent:v,virtualScroll:C,overscroll:L=!0,autoRaf:q=!1,anchors:N=!1,autoToggle:b=!1,allowNestedScroll:W=!1,__experimental__naiveDimensions:R=!1}={}){window.lenisVersion=ue,(!e||e===document.documentElement)&&(e=window),typeof a=="number"&&typeof d!="function"?d=H:typeof d=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:e,content:t,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:n,touchInertiaExponent:r,duration:a,easing:d,lerp:c,infinite:h,gestureOrientation:l,orientation:m,touchMultiplier:u,wheelMultiplier:g,autoResize:f,prevent:v,virtualScroll:C,overscroll:L,autoRaf:q,anchors:N,autoToggle:b,allowNestedScroll:W,__experimental__naiveDimensions:R},this.dimensions=new ye(e,t,{autoResize:f}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new be(i,{touchMultiplier:u,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",i=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(i)?this.internalStop():this.internalStart()}};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}onClick=e=>{const i=e.composedPath().find(s=>s instanceof HTMLAnchorElement&&s.getAttribute("href")?.includes("#"));if(i){const s=i.getAttribute("href");if(s){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,n=`#${s.split("#")[1]}`;this.scrollTo(n,o)}}};onPointerDown=e=>{e.button===1&&this.reset()};onVirtualScroll=e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:i,event:s}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");this.isTouching=s.type==="touchstart"||s.type==="touchmove";const r=t===0&&i===0;if(this.options.syncTouch&&o&&s.type==="touchstart"&&r&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(r||d)return;let c=s.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(v=>v instanceof HTMLElement&&(typeof h=="function"&&h?.(v)||v.hasAttribute?.("data-lenis-prevent")||o&&v.hasAttribute?.("data-lenis-prevent-touch")||n&&v.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(v,{deltaX:t,deltaY:i}))))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let l=i;this.options.gestureOrientation==="both"?l=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(l=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const u=o&&this.options.syncTouch,f=o&&s.type==="touchend";f&&(l=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+l,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:r=this.options.lerp,onStart:a,onComplete:d,force:c=!1,programmatic:h=!0,userData:m}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let l;if(typeof e=="string"?(l=document.querySelector(e),l||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&e?.nodeType&&(l=e),l){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const u=l.getBoundingClientRect();e=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;const l=e-this.animatedScroll;l>this.limit/2?e=e-this.limit:l<-this.limit/2&&(e=e+this.limit)}}else e=F(0,e,this.limit);if(e===this.targetScroll){a?.(this),d?.(this);return}if(this.userData=m??{},i){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=e),typeof o=="number"&&typeof n!="function"?n=H:typeof n=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:n,lerp:r,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(l,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=l-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=l,this.setScroll(this.scroll),h&&(this.targetScroll=l),u||this.emit(),u&&(this.reset(),this.emit(),d?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:i}){const s=Date.now(),o=e._lenis??={};let n,r,a,d,c,h,m,l;const u=this.options.gestureOrientation;if(s-(o.time??0)>2e3){o.time=Date.now();const b=window.getComputedStyle(e);o.computedStyle=b;const W=b.overflowX,R=b.overflowY;if(n=["auto","overlay","scroll"].includes(W),r=["auto","overlay","scroll"].includes(R),o.hasOverflowX=n,o.hasOverflowY=r,!n&&!r||u==="vertical"&&!r||u==="horizontal"&&!n)return!1;c=e.scrollWidth,h=e.scrollHeight,m=e.clientWidth,l=e.clientHeight,a=c>m,d=h>l,o.isScrollableX=a,o.isScrollableY=d,o.scrollWidth=c,o.scrollHeight=h,o.clientWidth=m,o.clientHeight=l}else a=o.isScrollableX,d=o.isScrollableY,n=o.hasOverflowX,r=o.hasOverflowY,c=o.scrollWidth,h=o.scrollHeight,m=o.clientWidth,l=o.clientHeight;if(!n&&!r||!a&&!d||u==="vertical"&&(!r||!d)||u==="horizontal"&&(!n||!a))return!1;let g;if(u==="horizontal")g="x";else if(u==="vertical")g="y";else{const b=t!==0,W=i!==0;b&&n&&a&&(g="x"),W&&r&&d&&(g="y")}if(!g)return!1;let f,v,C,L,q;if(g==="x")f=e.scrollLeft,v=c-m,C=t,L=n,q=a;else if(g==="y")f=e.scrollTop,v=h-l,C=i,L=r,q=d;else return!1;return(C>0?f<v:f>0)&&L&&q}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?ve(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const w=document.querySelector("#app");let p;function xe(){if(console.log("Rendering Services..."),!!w)try{w.innerHTML=`
        ${A()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${ee()}
            </div>
        </div>
        ${S()}
      `,E(),x(),D(),O(),k(),P(),T(),te()}catch(e){console.error("Error rendering Services:",e)}}function D(){try{let t=function(i){p.raf(i),requestAnimationFrame(t)};var e=t;p=new Se({duration:1.2,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2}),requestAnimationFrame(t)}catch(t){console.error("Error initializing smooth scroll:",t)}}function M(){if(console.log("Rendering Home..."),!w){console.error("App element not found");return}try{w.innerHTML=`
      ${A()}
      <div id="main-wrapper" style="position: relative; z-index: 1; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <div class="gradient-container">
          ${_()}
          ${K()}
          ${oe()}
          ${ne()}
          ${ce()}
          ${he()}
        </div>
      </div>
      ${S()}
    `,console.log("Home rendered successfully")}catch(e){console.error("Error rendering Home components:",e);return}try{E(),G(),de(),x(),P(),k(),O(),D(),T();const e=document.querySelector(".btn-primary");e&&e.addEventListener("click",i=>{if(i.target.id==="see-all-work")return;const s=document.querySelector(".portfolio-list-section");s?p?p.scrollTo(s):s.scrollIntoView({behavior:"smooth"}):console.warn("Portfolio list section not found on Home page (expected behavior with FeaturedWork).")});const t=document.querySelector("#see-all-work");t&&(console.log("Attaching listener to See All Work button"),t.addEventListener("click",()=>{console.log("See All Work clicked"),Y(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})}))}catch(e){console.error("Error initializing Home scripts:",e)}}function Y(){console.log("Rendering Work Page...");try{w.innerHTML=`
        ${A()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${Q()}
            </div>
        </div>
        ${S()}
        `,console.log("Work Page rendered successfully")}catch(e){console.error("Error rendering Work Page:",e);return}try{E(),J(),x(),P(),k(),O(),T(),document.querySelectorAll(".portfolio-item").forEach(e=>{e.addEventListener("click",()=>{V(),Ee(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})})})}catch(e){console.error("Error initializing Work Page scripts:",e)}}function ke(){if(console.log("Rendering Blog Page..."),!!w)try{w.innerHTML=`
        ${A()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${ie()}
            </div>
        </div>
        ${S()}
      `,E(),x(),D(),O(),k(),P(),T()}catch(e){console.error("Error rendering Blog Page:",e)}}function Ae(){if(console.log("Rendering Contact Page..."),!!w)try{w.innerHTML=`
        ${A()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            ${se()}
        </div>
        ${S()}
      `,E(),x(),D(),k(),T()}catch(e){console.error("Error rendering Contact Page:",e)}}function T(){document.querySelectorAll(".sm-panel-item").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();const o=i.textContent.trim().toLowerCase();o==="work"?(Y(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})):o==="about"?(xe(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})):o==="blog"?(ke(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})):o==="contact"?(Ae(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})):(M(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0}))})});const t=document.querySelector(".sm-logo");t&&t.addEventListener("click",i=>{i.preventDefault(),M(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})})}function Ee(){console.log("Rendering Case Study..."),w.innerHTML=`
    ${A()}
    <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
      ${re()}
    </div>
    ${S()} 
  `,E(),x(),P(),k(),O(),T(),D();const e=document.querySelector("#back-home");e&&e.addEventListener("click",()=>{M(),window.scrollTo(0,0),p&&p.scrollTo(0,{immediate:!0})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M();
