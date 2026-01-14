import './src/styles/main.css';
import './src/styles/hero.css';
import './src/styles/grid.css';
import './src/styles/case-study.css';
import './src/styles/animations.css';
import './src/styles/navbar.css';
import './src/styles/footer.css';
import './src/styles/gradient-bg.css';
import './src/styles/circle-animator.css';
import './src/styles/skill-ticker.css';
import './src/styles/about.css';
import './src/styles/featured-work.css';
import './src/styles/blog.css';
import './src/styles/button.css';
import './src/styles/parallax-intro.css';
import './src/styles/services.css';
import './src/styles/blog-page.css';
import './src/styles/blog-details.css';
import './src/styles/contact.css';

import { getProjects, getProject, getBlogPosts, getBlogPost, getTestimonials } from './src/services/api.js';
import { Hero } from './src/components/Hero.js';
import { ParallaxIntro, initParallaxIntro } from './src/components/ParallaxIntro.js';
import { WorkPage } from './src/components/WorkPage.js';
import { ServicesPage, initServicesPage } from './src/components/ServicesPage.js';
import { BlogPage } from './src/components/BlogPage.js';
import { BlogDetailsPage, initBlogDetailsPage } from './src/components/BlogDetailsPage.js';
import { ContactPage } from './src/components/ContactPage.js';
import { About } from './src/components/About.js';
import { Grid, initGridInteractions, cleanupGridInteractions } from './src/components/Grid.js';
import { SkillTicker } from './src/components/SkillTicker.js';
import { Footer, initFooterReveal, initFooterTypewriter } from './src/components/Footer.js';
import { GradualBlur, initGradualBlur } from './src/components/GradualBlur.js';
import { CaseStudy, initCaseStudyScroll } from './src/components/CaseStudy.js';
import { Navbar, initNavbar } from './src/components/Navbar.js';
import { FeaturedWork, initFeaturedWork } from './src/components/FeaturedWork.js';
import { Blog } from './src/components/Blog.js';
import { initScrollAnimations } from './src/utils/animations.js';
import { initTextAnimations } from './src/utils/textAnimations.js';
import Lenis from 'lenis';

const app = document.querySelector('#app');
let lenis;

// Smooth Scroll Initialization
function initSmoothScroll() {
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  } catch (e) {
    console.error('Error initializing smooth scroll:', e);
  }
}

// HOME PAGE
function renderHome() {
  console.log('Rendering Home...');
  if (!app) {
    console.error('App element not found');
    return;
  }

  try {
    app.innerHTML = `
      ${Navbar()}
      <div id="main-wrapper" style="position: relative; z-index: 1; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <div class="gradient-container">
          ${ParallaxIntro()}
          ${Hero()}
          ${About()}
          ${SkillTicker()}
          ${FeaturedWork()}
          <div id="blog-section-placeholder">
            <div style="min-height: 400px; display: flex; align-items: center; justify-content: center;">
              <p>Loading blog posts...</p>
            </div>
          </div>
        </div>
      </div>
      ${Footer()}
    `;
    console.log('Home rendered successfully');
  } catch (e) {
    console.error('Error rendering Home components:', e);
    return;
  }

  // Load blog data asynchronously
  Blog().then(blogHTML => {
    const blogPlaceholder = document.querySelector('#blog-section-placeholder');
    if (blogPlaceholder) {
      blogPlaceholder.innerHTML = blogHTML;
      
      // Attach click handlers to blog cards
      const blogCards = document.querySelectorAll('.blog-card');
      blogCards.forEach(card => {
        card.addEventListener('click', () => {
          const slug = card.getAttribute('data-slug');
          if (slug) {
            renderBlogDetails(slug);
            window.scrollTo(0, 0);
            if (lenis) lenis.scrollTo(0, { immediate: true });
          }
        });
      });
    }
  }).catch(error => {
    console.error('Error loading blog section:', error);
  });

  try {
    initNavbar();
    initParallaxIntro();
    initFeaturedWork();
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    initSmoothScroll();
    setupNavigation();

    // "See All Work" button listener
    const seeAllBtn = document.querySelector('#see-all-work');
    if (seeAllBtn) {
      seeAllBtn.addEventListener('click', () => {
        renderWork();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    }
  } catch (e) {
    console.error('Error initializing Home scripts:', e);
  }
}

// WORK PAGE
async function renderWork() {
  console.log('Rendering Work Page...');
  
  try {
    // Fetch projects from Strapi
    const projectsResponse = await getProjects();
    let projects = [];

    if (projectsResponse && projectsResponse.data && Array.isArray(projectsResponse.data)) {
      projects = projectsResponse.data
        .map((p) => {
          try {
            const attrs = p.attributes || p;
            if (!attrs || !attrs.client) return null;

            const getUrl = (media) => {
              if (!media) return '';
              const url = media?.data?.attributes?.url || '';
              if (!url) return '';
              return url.startsWith('http') ? url : `http://localhost:1337${url}`;
            };

            return {
              slug: attrs.slug || '',
              client: attrs.client,
              year: attrs.year || '2024',
              services: attrs.services || 'Design',
              logo: getUrl(attrs.logo) || `https://via.placeholder.com/60x60/1a1a1a/ffffff?text=${attrs.client.charAt(0)}`,
              image: getUrl(attrs.thumbnail) || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
            };
          } catch (err) {
            console.error('Error processing project:', err);
            return null;
          }
        })
        .filter(p => p !== null);
    }

    // Fallback if no projects
    if (projects.length === 0) {
      projects = getFallbackProjects();
    }

    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${WorkPage(projects)}
            </div>
        </div>
        ${Footer()}
    `;
    
    initNavbar();
    initGridInteractions();
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    setupNavigation();

    // Setup click handlers
    document.querySelectorAll('.portfolio-item').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-slug');
        cleanupGridInteractions();
        renderCaseStudy(slug);
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    });
    
  } catch (e) {
    console.error('Error rendering Work Page:', e);
  }
}

// CASE STUDY PAGE
async function renderCaseStudy(slug) {
  console.log('Rendering Case Study for slug:', slug);
  
  try {
    let projectData = null;
    
    // Fetch from Strapi
    if (slug) {
      const projectResponse = await getProject(slug);
      
      if (projectResponse) {
        const attrs = projectResponse.attributes || projectResponse;
        
        const getUrl = (media) => {
          if (!media) return '';
          const url = media?.data?.attributes?.url || '';
          if (!url) return '';
          return url.startsWith('http') ? url : `http://localhost:1337${url}`;
        };
        
        const getGalleryUrls = (gallery) => {
          if (!gallery?.data || !Array.isArray(gallery.data)) return [];
          return gallery.data
            .map(img => {
              const url = img?.attributes?.url;
              if (!url) return null;
              return url.startsWith('http') ? url : `http://localhost:1337${url}`;
            })
            .filter(url => url !== null);
        };

        const galleryImages = getGalleryUrls(attrs.gallery);
        const defaultImages = [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
        ];

        // Check if project has new sections structure
        let sections = [];
        
        if (attrs.sections && Array.isArray(attrs.sections) && attrs.sections.length > 0) {
          // Use new dynamic sections from Strapi
          sections = attrs.sections.map((section, index) => {
            const sectionImages = section.images?.data 
              ? section.images.data.map(img => {
                  const url = img?.attributes?.url;
                  if (!url) return null;
                  return url.startsWith('http') ? url : `http://localhost:1337${url}`;
                }).filter(url => url !== null)
              : defaultImages;

            return {
              id: section.title.toLowerCase().replace(/\s+/g, '-'),
              title: `${String(index + 1).padStart(2, '0')} ${section.title}`,
              description: stripHtmlTags(section.description) || "No content available.",
              images: sectionImages.length > 0 ? sectionImages : defaultImages
            };
          });
        } else {
          // Fallback to old structure (overview, challenge, solution)
          sections = [
            {
              id: "overview",
              title: "01 Overview",
              description: stripHtmlTags(attrs.overview) || "No overview available.",
              images: galleryImages.slice(0, 2).length > 0 ? galleryImages.slice(0, 2) : defaultImages
            },
            {
              id: "challenge",
              title: "02 Challenge",
              description: stripHtmlTags(attrs.challenge) || "No challenge content available.",
              images: galleryImages.slice(2, 4).length > 0 ? galleryImages.slice(2, 4) : defaultImages
            },
            {
              id: "solution",
              title: "03 Solution",
              description: stripHtmlTags(attrs.solution) || "No solution content available.",
              images: galleryImages.slice(4, 6).length > 0 ? galleryImages.slice(4, 6) : defaultImages
            }
          ];
        }

        // Transform credits
        let credits = [];
        if (attrs.credits && Array.isArray(attrs.credits) && attrs.credits.length > 0) {
          // New structure: component with name + role
          credits = attrs.credits.map(credit => ({
            name: credit.name || 'Unknown',
            role: credit.role || 'Contributor'
          }));
        } else if (Array.isArray(attrs.credits)) {
          // Old structure: array of strings, convert to new format
          credits = attrs.credits.map(name => ({
            name: name,
            role: 'Contributor'
          }));
        } else if (attrs.credit && typeof attrs.credit === 'string') {
          // Very old structure: single text field, try to parse
          // Assuming format like "Name - Role, Name2 - Role2"
          const lines = attrs.credit.split(',').map(line => line.trim());
          credits = lines.map(line => {
            const parts = line.split('-').map(p => p.trim());
            return {
              name: parts[0] || line,
              role: parts[1] || 'Contributor'
            };
          });
        }

        projectData = {
          title: attrs.client || 'Untitled Project',
          subtitle: attrs.services || 'Design Project',
          year: attrs.year || '2024',
          credits: credits,
          sections: sections
        };
      }
    }

    // Fallback if not found
    if (!projectData) {
      projectData = getDefaultProjectData(slug);
    }

    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
          ${CaseStudy(projectData)}
        </div>
        ${Footer()} 
      `;

    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    setupNavigation();
    initSmoothScroll();
    initCaseStudyScroll(); // Initialize scroll observer for case study

  } catch (e) {
    console.error('Error rendering Case Study:', e);
    
    // Fallback on error
    const projectData = getDefaultProjectData(slug);
    app.innerHTML = `
      ${Navbar()}
      <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
        ${CaseStudy(projectData)}
      </div>
      ${Footer()}
    `;
    
    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    setupNavigation();
    initSmoothScroll();
    initCaseStudyScroll(); // Initialize scroll observer
  }
}

// SERVICES/ABOUT PAGE
async function renderServices() {
  console.log('Rendering Services...');
  if (!app) return;

  try {
    const testimonialsResponse = await getTestimonials();
    const testimonials = testimonialsResponse.data || [];

    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${ServicesPage(testimonials)}
            </div>
        </div>
        ${Footer()}
      `;
    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initSmoothScroll();
    initTextAnimations();
    initGradualBlur();
    initScrollAnimations();
    setupNavigation();
    initServicesPage();
  } catch (e) {
    console.error('Error rendering Services:', e);
  }
}

// BLOG PAGE
async function renderBlog() {
  console.log('Rendering Blog Page...');
  if (!app) return;

  try {
    const blogPageHTML = await BlogPage();
    
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${blogPageHTML}
            </div>
        </div>
        ${Footer()}
      `;
    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initSmoothScroll();
    initTextAnimations();
    initGradualBlur();
    initScrollAnimations();
    setupNavigation();

    // Blog Details Navigation
    const cards = document.querySelectorAll('.insight-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-slug');
        if (slug) {
          renderBlogDetails(slug);
          window.scrollTo(0, 0);
          if (lenis) lenis.scrollTo(0, { immediate: true });
        }
      });
    });

  } catch (e) {
    console.error('Error rendering Blog Page:', e);
  }
}

// BLOG DETAILS PAGE
async function renderBlogDetails(slug) {
  console.log('Rendering Blog Details Page for:', slug);
  if (!app) return;

  try {
    const blogDetailsHTML = await BlogDetailsPage(slug);
    
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${blogDetailsHTML}
            </div>
        </div>
        ${Footer()}
      `;
    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initSmoothScroll();
    initTextAnimations();
    initGradualBlur();
    initScrollAnimations();
    setupNavigation();
    initBlogDetailsPage();

    // Back button handler
    const backBtn = document.querySelector('#back-to-blog');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderBlog();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    }

  } catch (e) {
    console.error('Error rendering Blog Details Page:', e);
  }
}

// CONTACT PAGE
function renderContact() {
  console.log('Rendering Contact Page...');
  if (!app) return;

  try {
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            ${ContactPage()}
        </div>
        ${Footer()}
      `;
    initNavbar();
    initFooterReveal();
    initFooterTypewriter();
    initSmoothScroll();
    initGradualBlur();
    setupNavigation();
  } catch (e) {
    console.error('Error rendering Contact Page:', e);
  }
}

// NAVIGATION SETUP
function setupNavigation() {
  const links = document.querySelectorAll('.sm-panel-item');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const text = link.textContent.trim().toLowerCase();

      if (text === 'resume') {
        return;
      }

      e.preventDefault();

      if (text === 'home') {
        renderHome();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      } else if (text === 'work') {
        renderWork();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      } else if (text === 'about') {
        renderServices();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      } else if (text === 'blog') {
        renderBlog();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      } else if (text === 'contact') {
        renderContact();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      } else {
        renderHome();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      }
    });
  });

  const logo = document.querySelector('.sm-logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      renderHome();
      window.scrollTo(0, 0);
      if (lenis) lenis.scrollTo(0, { immediate: true });
    });
  }
}

// HELPER FUNCTIONS
function stripHtmlTags(html) {
  if (!html) return '';
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

function getFallbackProjects() {
  return [
    {
      slug: 'fintech-corp',
      client: 'FinTech Corp',
      year: '2024',
      services: 'Rebrand, UI/UX',
      logo: 'https://via.placeholder.com/60x60/1a1a1a/ffffff?text=F',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      slug: 'eshop-global',
      client: 'E-Shop Global',
      year: '2023',
      services: 'E-commerce App',
      logo: 'https://via.placeholder.com/60x60/1a1a1a/ffffff?text=E',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80'
    },
    {
      slug: 'datasystems',
      client: 'DataSystems',
      year: '2023',
      services: 'SaaS Dashboard',
      logo: 'https://via.placeholder.com/60x60/1a1a1a/ffffff?text=D',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
  ];
}

function getDefaultProjectData(slug) {
  const defaultProjects = {
    'fintech-corp': {
      title: 'FinTech Corp',
      subtitle: 'Rebrand, UI/UX',
      year: '2024',
      credits: ['Creative Direction', 'Brand Strategy', 'UI/UX Design', 'Development'],
      sections: [
        {
          id: "overview",
          title: "01 Overview",
          description: "FinTech Corp approached us to modernize their digital presence and create a cohesive brand identity.",
          images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
          ]
        },
        {
          id: "challenge",
          title: "02 Challenge",
          description: "The main challenge was to differentiate FinTech Corp in a crowded market.",
          images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80'
          ]
        },
        {
          id: "solution",
          title: "03 Solution",
          description: "We developed a bold visual identity centered around transparency.",
          images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80'
          ]
        }
      ]
    }
  };

  return defaultProjects[slug] || {
    title: 'Sample Project',
    subtitle: 'Design & Development',
    year: '2024',
    credits: ['Creative Direction', 'Design', 'Development'],
    sections: [
      {
        id: "overview",
        title: "01 Overview",
        description: "This is a sample project showcasing our design capabilities.",
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: "challenge",
        title: "02 Challenge",
        description: "Every project comes with unique challenges.",
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: "solution",
        title: "03 Solution",
        description: "We delivered a comprehensive solution.",
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  };
}

// INITIAL RENDER
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHome);
} else {
  renderHome();
}