import { getBlogPost, getMediaUrl } from '../services/api.js';

export async function BlogDetailsPage(slug) {
    if (!slug) {
        console.error('No slug provided to BlogDetailsPage');
        return '<div class="error-state">Blog post not found</div>';
    }

    try {
        console.log('Fetching blog post with slug:', slug);
        const post = await getBlogPost(slug);
        
        console.log('Blog Post Response:', post);
        
        if (!post) {
            console.warn('Blog post not found for slug:', slug);
            return '<div class="error-state">Blog post not found</div>';
        }

        const attrs = post.attributes || post;
        
        if (!attrs) {
            console.error('Blog post has no attributes');
            return '<div class="error-state">Invalid blog post data</div>';
        }
        
        return generateBlogDetailsHTML({
            title: attrs.title || 'Untitled Post',
            excerpt: attrs.excerpt || '',
            content: attrs.content || '<p>No content available</p>',
            category: attrs.category || 'News',
            publishedDate: attrs.publishedDate,
            featuredImage: getMediaUrl(attrs.featuredImage),
            readTime: attrs.readTime || '5 min read'
        });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return generateBlogDetailsHTML(getDefaultPost());
    }
}

function getDefaultPost() {
    return {
        title: 'The Ultimate Guide to Budgeting in 2024',
        excerpt: 'Learn effective budgeting strategies for financial success',
        content: `
            <p>Budgeting is the cornerstone of financial stability, and 2024 presents new opportunities and challenges that require a fresh approach.</p>
            <h2>1. Real-Time Insights</h2>
            <p>One of the most significant advantages of SaaS analytics is real-time access to data...</p>
            <h2>2. Scalability and Flexibility</h2>
            <p>SaaS platforms are designed to scale as your business grows...</p>
        `,
        category: 'News',
        publishedDate: '2024-08-12',
        featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        readTime: '5 min read'
    };
}

function generateBlogDetailsHTML(post) {
    return `
    <div class="blog-details-page">
        <div class="blog-details-container">
            <!-- Hero Section -->
            <header class="article-header">
                <div class="article-meta">
                    <span class="meta-category">${post.category}</span>
                    <span class="meta-separator">•</span>
                    <span class="meta-date">${formatDate(post.publishedDate)}</span>
                    <span class="meta-separator">•</span>
                    <span class="meta-read-time">${post.readTime}</span>
                </div>
                <h1 class="article-title">${post.title}</h1>
                ${post.excerpt ? `<p class="article-excerpt">${post.excerpt}</p>` : ''}
            </header>

            ${post.featuredImage ? `
                <div class="article-hero-image">
                    <img src="${post.featuredImage}" alt="${post.title}">
                </div>
            ` : ''}

            <!-- Content Section -->
            <article class="article-content">
                ${post.content}
            </article>

            <!-- Read Next Section -->
            <section class="read-next-section">
                <div class="read-next-header">
                    <h3>Read Our Next Article</h3>
                </div>
                <div class="read-next-grid">
                     <article class="insight-card">
                        <div class="insight-card-image">
                            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" alt="Insight 2">
                            <div class="insight-card-overlay"></div>
                        </div>
                        <div class="insight-card-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Business Growth Strategies</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>
                     <article class="insight-card">
                        <div class="insight-card-image">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Insight 3">
                            <div class="insight-card-overlay"></div>
                        </div>
                        <div class="insight-card-content">
                            <span class="article-tag">News</span>
                            <h4 class="insight-title">Maximizing Efficiency</h4>
                            <p class="insight-excerpt">Discover strategies to streamline your business processes and enhance productivity.</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
    `;
}

function formatDate(dateString) {
    if (!dateString) return 'Date not available';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function initBlogDetailsPage() {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
}