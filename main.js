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
function renderServices() {
  console.log('Rendering Services...');
  if (!app) return;

  try {
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${ServicesPage()}
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

function renderWork() {
  console.log('Rendering Work Page...');
  try {
    app.innerHTML = `
        ${Navbar()}
        <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
            <div class="gradient-container">
                ${WorkPage()}
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
        cleanupGridInteractions();
        renderCaseStudy();
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
      e.preventDefault();
      const text = link.textContent.trim().toLowerCase();

      if (text === 'work') {
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

function renderCaseStudy() {
  console.log('Rendering Case Study...');
  app.innerHTML = `
    ${Navbar()}
    <div id="main-wrapper" style="position: relative; z-index: 1; min-height: 100vh;">
      ${CaseStudy()}
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
}

// Initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHome);
} else {
  renderHome();
}
