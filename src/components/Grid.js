
// Global state for mouse tracking to avoid multiple listeners
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let isTracking = false;

// Initialize global mouse tracker once
if (typeof window !== 'undefined' && !window._gridMouseTrackerInitialized) {
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Initialize cursor position on first move to avoid jump
    if (!isTracking) {
      cursorX = mouseX;
      cursorY = mouseY;
      isTracking = true;
    }
  });
  window._gridMouseTrackerInitialized = true;
}

// Linear interpolation for smooth movement
const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

export function Grid() {
  const projects = [
    {
      client: "FinTech Corp",
      year: "2024",
      services: "Rebrand, UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/fintech/60"
    },
    {
      client: "E-Shop Global",
      year: "2023",
      services: "E-commerce App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/eshop/60"
    },
    {
      client: "DataSystems",
      year: "2023",
      services: "SaaS Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/data/60"
    },
    {
      client: "Luxe Hotel",
      year: "2022",
      services: "Web Design",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/luxe/60"
    },
    {
      client: "Innovate Inc",
      year: "2022",
      services: "Identity System",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/innovate/60"
    },
    {
      client: "Vogue Style",
      year: "2021",
      services: "Campaign",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      logo: "https://picsum.photos/seed/vogue/60"
    }
  ];

  return `
    <section class="portfolio-list-section">
      <div class="portfolio-list">
        ${projects.map((project, index) => `
          <div class="portfolio-item" data-image="${project.image}">
            <div class="item-col client">
                <img src="${project.logo}" alt="${project.client} Logo" class="client-logo">
                ${project.client} <span class="client-year">${project.year}</span>
            </div>
          </div>
        `).join('')}
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
  `;
}

let animationFrameId = null;
let mouseMoveHandler = null;

export function initGridInteractions() {
  const items = document.querySelectorAll('.portfolio-item');

  // Remove old preview if exists (safety check)
  cleanupGridInteractions();

  // Create new preview element
  const preview = document.createElement('div');
  preview.className = 'portfolio-preview';
  preview.style.position = 'fixed';
  preview.style.top = '0';
  preview.style.left = '0';
  preview.style.zIndex = '9999';
  preview.style.pointerEvents = 'none'; // Critical for cursor tracking

  preview.innerHTML = `
    <div class="preview-inner">
      <img src="" alt="Project Preview" id="preview-image">
    </div>
  `;
  document.body.appendChild(preview);

  const previewImg = preview.querySelector('#preview-image');

  // Track cursor with smooth interpolation
  // Initialize off-screen or at a safe default
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  mouseMoveHandler = (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  document.addEventListener('mousemove', mouseMoveHandler);

  const animate = () => {
    // Smooth follow
    currentX = lerp(currentX, targetX, 0.15);
    currentY = lerp(currentY, targetY, 0.15);

    if (preview) {
      preview.style.transform = `translate3d(${currentX + 20}px, ${currentY + 20}px, 0)`;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imageUrl = item.getAttribute('data-image');
      if (imageUrl && previewImg) {
        previewImg.src = imageUrl;
        preview.classList.add('active');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (preview) {
        preview.classList.remove('active');
      }
    });
  });
}

// Cleanup function to remove preview and stop animation
export function cleanupGridInteractions() {
  const preview = document.querySelector('.portfolio-preview');
  if (preview) {
    preview.remove();
  }

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (mouseMoveHandler) {
    document.removeEventListener('mousemove', mouseMoveHandler);
    mouseMoveHandler = null;
  }
}
