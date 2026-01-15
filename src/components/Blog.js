import { getBlogPosts, getMediaUrl } from '../services/api.js';

export async function Blog() {
  try {
    const response = await getBlogPosts();
    console.log('Blog Posts API Response:', response);
    
    const blogs = response.data || [];
    console.log('Blog Posts Data:', blogs);

    // Map API response to expected format with SAFETY CHECKS
    const formattedBlogs = blogs
      .map(item => {
        try {
          // Safety check: ensure item and attributes exist
          if (!item || !item.attributes) {
            console.warn('Blog item missing attributes:', item);
            return null;
          }

          const attrs = item.attributes;

          // Safety check: ensure required fields exist
          if (!attrs.title || !attrs.slug) {
            console.warn('Blog item missing required fields:', attrs);
            return null;
          }

          return {
            id: item.id,
            slug: attrs.slug,
            title: attrs.title,
            desc: attrs.excerpt || 'No description available',
            tags: Array.isArray(attrs.tags) ? attrs.tags : [],
            image: getMediaUrl(attrs.featuredImage) || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            category: attrs.category || 'News',
            publishedDate: attrs.publishedDate || new Date().toISOString()
          };
        } catch (itemError) {
          console.error('Error formatting blog item:', itemError, item);
          return null;
        }
      })
      .filter(blog => blog !== null); // Remove null entries

    console.log('Formatted Blogs:', formattedBlogs);

    // Use fetched blogs or fallback to default
    const displayBlogs = formattedBlogs.length > 0 ? formattedBlogs : getDefaultBlogs();

    return generateBlogHTML(displayBlogs);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return generateBlogHTML(getDefaultBlogs());
  }
}

function getDefaultBlogs() {
  return [
    {
      id: "01",
      slug: "majestic-creatures",
      title: "Majestic Creatures of the African Savanna",
      desc: "Capturing the Exquisite Patterns and Dynamic Energy of Africa's Most Iconic Big Cat",
      tags: ["Wildlife Portraits", "Nature", "Mammals"],
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      category: "News"
    },
    {
      id: "02",
      slug: "temple-silhouette",
      title: "A Temple's Serene Silhouette",
      desc: "Exploring the spiritual architecture and peaceful atmosphere of ancient eastern temples.",
      tags: ["Architecture", "Travel", "Culture"],
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      category: "News"
    },
    {
      id: "03",
      slug: "moments-framed",
      title: "Moments Framed in Portraits",
      desc: "A deep dive into the art of capturing human emotion and storytelling through portraiture.",
      tags: ["Portrait", "Lifestyle", "People"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      category: "News"
    },
    {
      id: "04",
      slug: "urban-solitude",
      title: "Urban Solitude",
      desc: "Finding stillness in the chaos of city life through the lens of architectural minimalism.",
      tags: ["Urban", "Architecture", "City"],
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
      category: "News"
    }
  ];
}

function generateBlogHTML(blogs) {
  return `
    <section class="blog-section">
      <div class="blog-header">
        <span class="section-label">[ MY THOUGHT ]</span>
        <h2 class="section-title">
          The view from here: A collection of personal notes.
        </h2>
      </div>

      <div class="blog-grid">
        ${blogs.map(item => `
          <div class="blog-card" data-slug="${item.slug || ''}">
            <div class="blog-card-bg">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="blog-card-overlay"></div>
            
            <div class="blog-content">
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