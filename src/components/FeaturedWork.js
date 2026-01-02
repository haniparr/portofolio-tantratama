export function FeaturedWork() {
  const works = [
    {
      image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d25?auto=format&fit=crop&w=800&q=80",
      title: "Beermut",
      tagline: "Bringing fun to gatherings."
    },
    {
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      title: "Body Ōm",
      tagline: "To elevate mood and awaken the senses."
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      title: "Fapro",
      tagline: "Every piece of data, a business opportunity."
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      title: "El Guarango",
      tagline: "This vermouth will bring you knowledge."
    },
    {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      title: "Salta",
      tagline: "A gourmet snack for breaking routine."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      title: "Pocho",
      tagline: "Clothing to play and explore."
    }
  ];

  return `
    <section class="featured-work-section">
      <div class="featured-work-header">
        <div class="featured-label">
          <span>[ WORK ]</span>
        </div>
        <div class="featured-center">
            <h1 class="featured-headline">A Curated Selection Of Projects That Define Our Creative Vision</h1>
        </div>
        <div class="featured-action">
            <button class="btn-primary" id="see-all-work">See All Work</button>
        </div>
      </div>

      
      <div class="work-grid">
        ${works.map((work, index) => `
          <div class="work-card" data-index="${index}">
            <div class="work-card-image">
              <img src="${work.image}" alt="${work.title}" loading="lazy">
              <div class="work-card-overlay"></div>
            </div>
            <div class="work-card-content">
              <span class="work-card-title">${work.title}</span>
              <h3 class="work-card-tagline">${work.tagline}</h3>
            </div>
          </div>
        `).join('')}
      </div>
      
    </section>
  `;
}

export function initFeaturedWork() {
  const cards = document.querySelectorAll('.work-card');

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
    });
  });
}
