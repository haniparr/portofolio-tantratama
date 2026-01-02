export function Blog() {
  const blogs = [
    {
      id: "01",
      title: "Majestic Creatures of the African Savanna",
      desc: "Capturing the Exquisite Patterns and Dynamic Energy of Africa's Most Iconic Big Cat",
      tags: ["Wildlife Portraits", "Nature", "Mammals", "#2023"],
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80" // Cheetah/Leopard
    },
    {
      id: "02",
      title: "A Temple's Serene Silhouette",
      desc: "Exploring the spiritual architecture and peaceful atmosphere of ancient eastern temples.",
      tags: ["Architecture", "Travel", "Culture"],
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80" // Temple
    },
    {
      id: "03",
      title: "Moments Framed in Portraits",
      desc: "A deep dive into the art of capturing human emotion and storytelling through portraiture.",
      tags: ["Portrait", "Lifestyle", "People"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" // Portrait
    },
    {
      id: "04",
      title: "Urban Solitude",
      desc: "Finding stillness in the chaos of city life through the lens of architectural minimalism.",
      tags: ["Urban", "Architecture", "City"],
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80" // Tokyo/Urban
    }
  ];

  return `
    <section class="blog-section">
      <div class="blog-header">
        <span class="section-label">[ MY THOUGHT ]</span>
        <h2 class="section-title">
          Explore the artistry and precision behind <strong>our portfolio</strong> of timeless photography
        </h2>
        <p class="section-desc">
          Embark On A Visual Journey Through Our Cherished Moments Captured With Creativity And Precision. Each Image In Our Portfolio Reflects Our Dedication To Preserving Life's Beauty And Significance.
          <br><br>
          <button class="btn-primary">
            EXPLORE MORE
          </button>
        </p>
      </div>

      <div class="blog-grid">
        ${blogs.map(item => `
          <div class="blog-card">
            <div class="blog-card-bg">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="blog-card-overlay"></div>
            
            <div class="blog-content">
                <div class="blog-tags">
                    ${item.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                
                <h3 class="blog-title">${item.title}</h3>
                <p class="blog-desc">${item.desc}</p>
                
                <button class="blog-btn">
                    MORE DETAILS
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
