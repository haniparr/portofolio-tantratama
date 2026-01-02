import './src/styles/main.css';
import { BlogDetailsPage, initBlogDetailsPage } from './src/components/BlogDetailsPage.js';
import './src/styles/blog-details.css';

// ... existing imports ...

function renderBlogDetails() {
  console.log('Rendering Blog Details Page...');
  if (!app) return;

  try {
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${BlogDetailsPage()}
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

// ... existing functions ...
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
import { getProjects, getProject, getTestimonials } from './src/services/api.js';
import { Hero } from './src/components/Hero.js';
import { ParallaxIntro, initParallaxIntro } from './src/components/ParallaxIntro.js';
import './src/styles/parallax-intro.css';
import { WorkPage } from './src/components/WorkPage.js';
import { ServicesPage, initServicesPage } from './src/components/ServicesPage.js';
import './src/styles/services.css';
import { BlogPage } from './src/components/BlogPage.js';
import './src/styles/blog-page.css';
import { ContactPage } from './src/components/ContactPage.js';
import './src/styles/contact.css';
import { About } from './src/components/About.js';
import { Grid, initGridInteractions, cleanupGridInteractions } from './src/components/Grid.js';
import { SkillTicker } from './src/components/SkillTicker.js';
import { Footer, initFooterReveal, initFooterTypewriter } from './src/components/Footer.js';
import { GradualBlur, initGradualBlur } from './src/components/GradualBlur.js';
import { CaseStudy } from './src/components/CaseStudy.js';
import { Navbar, initNavbar } from './src/components/Navbar.js';
import { FeaturedWork, initFeaturedWork } from './src/components/FeaturedWork.js';
import { Blog } from './src/components/Blog.js';
import { initScrollAnimations } from './src/utils/animations.js';
import { initTextAnimations } from './src/utils/textAnimations.js';
import { initGradientEffect } from './src/utils/gradientEffect.js';
import Lenis from 'lenis';

const app = document.querySelector('#app');

// Smooth Scroll Initialization
let lenis;

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
          ${Blog()}
        </div>
      </div>
      ${Footer()}
    `;
    console.log('Home rendered successfully');
  } catch (e) {
    console.error('Error rendering Home components:', e);
    return;
  }

  try {
    initNavbar();
    initParallaxIntro();
    initFeaturedWork();
    // initGridInteractions(); // Not needed for FeaturedWork
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    initSmoothScroll();
    // initFaqAccordion(); // Removed from Home
    setupNavigation();

    // Attach event listeners
    // Attach event listeners
    const ctaBtn = document.querySelector('.btn-primary');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', (e) => {
        // Check if this is the "See All Work" button to avoid double handling if it happens to be the first btn-primary
        if (e.target.id === 'see-all-work') return;

        const target = document.querySelector('.portfolio-list-section');
        if (target) {
          if (lenis) {
            lenis.scrollTo(target);
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          console.warn('Portfolio list section not found on Home page (expected behavior with FeaturedWork).');
        }
      });
    }

    // "See All Work" button listener
    const seeAllBtn = document.querySelector('#see-all-work');
    if (seeAllBtn) {
      console.log('Attaching listener to See All Work button');
      seeAllBtn.addEventListener('click', () => {
        console.log('See All Work clicked');
        renderWork();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    }

  } catch (e) {
    console.error('Error initializing Home scripts:', e);
  }
}

async function renderWork() {
  console.log('Rendering Work Page...');
  try {
    const projectsResponse = await getProjects();
    const projects = projectsResponse.data.map(p => {
      // Normalize the data structure to match what Grid expects
      // Assuming api.js returns standard Strapi response structure
      const attrs = p.attributes;
      // Helper to extract image URL (Strapi specific)
      const getUrl = (media) => media?.data?.attributes?.url || '';

      return {
        slug: attrs.slug,
        client: attrs.client,
        year: attrs.year,
        services: attrs.services,
        // Assuming 'logo' and 'thumbnail' are media fields
        logo: getUrl(attrs.logo) ? `http://localhost:1337${getUrl(attrs.logo)}` : 'https://picsum.photos/60',
        image: getUrl(attrs.thumbnail) ? `http://localhost:1337${getUrl(attrs.thumbnail)}` : 'https://via.placeholder.com/800'
      };
    });

    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${WorkPage(projects)}
            </div>
        </div>
        ${Footer()}
        `;
    console.log('Work Page rendered successfully');
  } catch (e) {
    console.error('Error rendering Work Page:', e);
    return;
  }

  try {
    initNavbar();
    initGridInteractions(); // Grid IS used here
    initFooterReveal();
    initFooterTypewriter();
    initScrollAnimations();
    initGradualBlur();
    initTextAnimations();
    setupNavigation();

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
    console.error('Error initializing Work Page scripts:', e);
  }
}

function renderBlog() {
  console.log('Rendering Blog Page...');
  if (!app) return;

  try {
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${BlogPage()}
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
        renderBlogDetails();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    });

  } catch (e) {
    console.error('Error rendering Blog Page:', e);
  }
}

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

function setupNavigation() {
  const links = document.querySelectorAll('.sm-panel-item');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const text = link.textContent.trim().toLowerCase();

      // Allow resume link to proceed with default download behavior
      if (text === 'resume') {
        return; // Don't prevent default, let the download happen
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

async function renderCaseStudy(slug) {
  console.log('Rendering Case Study for slug:', slug);
  try {
    // Fetch project data if slug is provided
    let projectData = null;
    if (slug) {
      const projectResponse = await getProject(slug);
      if (projectResponse) {
        const attrs = projectResponse.attributes;
        const getUrl = (media) => media?.data?.attributes?.url || '';
        const getGalleryUrls = (gallery) => {
          if (!gallery?.data) return [];
          return gallery.data.map(img => `http://localhost:1337${img.attributes.url}`);
        };

        projectData = {
          title: attrs.client, // Using client name as title
          subtitle: attrs.services,
          credits: attrs.credits || [],
          sections: [
            {
              id: "overview",
              title: "01 Overview",
              description: attrs.overview || "No overview available.",
              images: getGalleryUrls(attrs.gallery).slice(0, 2) // Just taking first 2 for demo if not specific
            },
            {
              id: "challenge",
              title: "02 Challenge",
              description: attrs.challenge || "No challenge content available.",
              images: getGalleryUrls(attrs.gallery).slice(2, 4)
            },
            {
              id: "solution",
              title: "03 Solution",
              description: attrs.solution || "No solution content available.",
              images: getGalleryUrls(attrs.gallery).slice(4, 6)
            }
          ]
        };
      }
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

    // Close button handler
    const closeBtn = document.querySelector('#back-home');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        renderHome();
        window.scrollTo(0, 0);
        if (lenis) lenis.scrollTo(0, { immediate: true });
      });
    }

  } catch (e) {
    console.error('Error rendering Case Study:', e);
    // Fallback or error state
    app.innerHTML = `<div>Error loading case study.</div>`;
  }
}

// Initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHome);
} else {
  renderHome();
}
