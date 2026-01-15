import { getBlogPosts, getMediaUrl } from '../services/api.js';

export async function BlogPage() {
    try {
        const response = await getBlogPosts();
        console.log('Blog Posts API Response:', response);
        
        const blogs = response.data || [];
        console.log('Blog Posts Data:', blogs);

        // Map API response with better error handling
        const formattedBlogs = blogs
            .map(item => {
                try {
                    // Safety check
                    if (!item || !item.attributes) {
                        console.warn('Blog item missing attributes:', item);
                        return null;
                    }

                    const attrs = item.attributes;

                    // Validate required fields
                    if (!attrs.title || !attrs.slug) {
                        console.warn('Blog item missing required fields:', attrs);
                        return null;
                    }

                    return {
                        id: item.id,
                        slug: attrs.slug,
                        title: attrs.title,
                        excerpt: attrs.excerpt || 'No description available',
                        category: attrs.category || 'News',
                        image: getMediaUrl(attrs.featuredImage) || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
                        publishedDate: attrs.publishedDate
                    };
                } catch (itemError) {
                    console.error('Error formatting blog item:', itemError, item);
                    return null;
                }
            })
            .filter(blog => blog !== null);

        console.log('Blog Page - Formatted:', formattedBlogs);

        // Use formatted or fallback
        const displayBlogs = formattedBlogs.length > 0 ? formattedBlogs : getDefaultBlogs();

        return generateBlogPageHTML(displayBlogs);
    } catch (error) {
        console.error('Error in BlogPage:', error);
        return generateBlogPageHTML(getDefaultBlogs());
    }
}

function getDefaultBlogs() {
    return [
        {
            id: 1,
            slug: 'maximizing-efficiency',
            title: 'Maximizing Efficiency in Operations',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            slug: 'business-growth',
            title: 'Business Growth Strategies',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            slug: 'digital-transformation',
            title: 'Digital Transformation',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            slug: 'innovation-leadership',
            title: 'Innovation & Leadership',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            slug: 'market-trends',
            title: 'Market Trends 2024',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            slug: 'team-collaboration',
            title: 'Team Collaboration',
            excerpt: 'Discover strategies to streamline your business processes and enhance productivity.',
            category: 'News',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
        }
    ];
}

function generateBlogPageHTML(blogs) {
    return `
    <div class="blog-page">
        <div class="blog-container">
            <header class="blog-page-header">
                <h1 class="blog-page-title">Blog & articles</h1>
            </header>

            <section class="latest-insights">
                <div class="insights-grid">
                    ${blogs.map(blog => `
                        <article class="insight-card" data-slug="${blog.slug}">
                            <div class="insight-card-image">
                                <img src="${blog.image}" alt="${blog.title}">
                                <div class="insight-card-overlay"></div>
                            </div>
                            <div class="insight-card-content">
                                <span class="article-tag">${blog.category}</span>
                                <h4 class="insight-title">${blog.title}</h4>
                                <p class="insight-excerpt">${blog.excerpt}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>
        </div>
    </div>
    `;
}