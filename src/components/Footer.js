import { initFooterTypewriter as startTypewriter } from '../utils/typewriter.js';

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-top">
          <div class="cta-section">
            <h2 class="footer-cta-text">
              Have a <span class="txt-type"></span>?<br>
              Let’s get to work. We’re always open<br>
              for a chat, so get in touch<br>
              to find out how we can help.
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
            <img src="/footer-logo.svg" alt="Creative Strategist" class="footer-logo-img">
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterReveal() {
  const footer = document.querySelector('.site-footer');
  const mainWrapper = document.querySelector('#main-wrapper');

  if (!footer || !mainWrapper) return;

  const updateFooterState = () => {
    const footerHeight = footer.offsetHeight;
    const windowHeight = window.innerHeight;

    // If footer is taller than viewport (or close to it), disable the reveal effect
    // Using a small buffer (e.g., 20px) to prevent flickering if it's borderline
    if (footerHeight > windowHeight) {
      footer.style.position = 'relative';
      footer.style.zIndex = '2'; // Ensure it sits above potentially fixed background elements
      mainWrapper.style.marginBottom = '0px';
    } else {
      footer.style.position = 'fixed';
      footer.style.zIndex = '0';
      footer.style.bottom = '0';
      footer.style.left = '0';
      footer.style.width = '100%';
      mainWrapper.style.marginBottom = `${footerHeight}px`;
    }
  };

  // Initial set
  // We need to wait for a tick to ensure styles are applied and heights are correct
  requestAnimationFrame(updateFooterState);

  // Update on resize of footer or window
  const resizeObserver = new ResizeObserver(updateFooterState);
  resizeObserver.observe(footer);

  window.addEventListener('resize', updateFooterState);
}

export function initFooterTypewriter() {
  startTypewriter();
}
