export function Navbar() {
  return `
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
          <div class="sm-panel-logo">
            <img src="/assets/logo-navbar.png" alt="Logo" class="sm-logo-image">
          </div>
          <nav>
            <ul class="sm-panel-list" data-numbering="true">
              <li><a href="#" class="sm-panel-item" data-index="0">Home</a></li>
              <li><a href="#" class="sm-panel-item" data-index="1">Work</a></li>
              <li><a href="#" class="sm-panel-item" data-index="2">About</a></li>
              <li><a href="#" class="sm-panel-item" data-index="3">Blog</a></li>
              <li><a href="#" class="sm-panel-item" data-index="4">Contact</a></li>
              <li><a href="/assets/resume.pdf" class="sm-panel-item" data-index="5" download>Resume</a></li>
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
  `;
}

export function initNavbar() {
  const wrapper = document.querySelector('.staggered-menu-wrapper');
  const toggle = document.querySelector('.sm-toggle');
  const backdrop = document.querySelector('.sm-backdrop');
  const links = document.querySelectorAll('.sm-panel-item');
  const toggleText = document.querySelector('.sm-toggle-text');

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    wrapper.classList.toggle('open');
    toggleText.textContent = isOpen ? 'Close' : 'Menu';

    if (isOpen) {
      // Stagger in
      links.forEach((link, index) => {
        link.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
      });
    } else {
      // Reset delays
      links.forEach(link => {
        link.style.transitionDelay = '0s';
      });
    }
  }

  toggle.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', toggleMenu);

  // Close on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });
}
