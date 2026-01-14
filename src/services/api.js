import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';
const MEDIA_URL = import.meta.env.VITE_MEDIA_URL || 'http://localhost:1337';

// Helper to get full media URL
export function getMediaUrl(mediaData) {
    if (!mediaData) return '';

    // Handle different media data structures from Strapi
    const url = mediaData?.url || mediaData?.data?.attributes?.url || mediaData;

    if (typeof url !== 'string') return '';
    if (url.startsWith('http')) return url; // Already full URL (Cloudinary)
    return `${MEDIA_URL}${url}`; // Local Strapi uploads
}

// Blog Posts
export async function getBlogPosts(featured = false) {
    try {
        const filters = featured ? 'filters[featured][$eq]=true&' : '';
        const response = await axios.get(
            `${API_URL}/blog-posts?${filters}populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=formats&sort[0]=publishedDate:desc`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return { data: [] };
    }
}

export async function getBlogPost(slug) {
    try {
        const response = await axios.get(
            `${API_URL}/blog-posts?filters[slug][$eq]=${slug}&populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=formats`
        );
        return response.data.data[0] || null;
    } catch (error) {
        console.error(`Error fetching blog post ${slug}:`, error);
        return null;
    }
}

// Projects
export async function getProjects(featured = false) {
    try {
        const filters = featured ? 'filters[featured][$eq]=true&' : '';
        const response = await axios.get(
            `${API_URL}/projects?${filters}populate[thumbnail][fields][0]=url&populate[thumbnail][fields][1]=formats&populate[logo][fields][0]=url&populate[logo][fields][1]=formats&populate[testimonial][populate]=*&sort[0]=year:desc`
        );
        
        console.log('Projects API Response:', response.data);
        
        if (!response.data || !response.data.data) {
            console.warn('Invalid API response structure');
            return { data: [] };
        }
        
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return { data: [] };
    }
}

export async function getProject(slug) {
    try {
        const response = await axios.get(
            `${API_URL}/projects?filters[slug][$eq]=${slug}&populate[thumbnail][fields][0]=url&populate[thumbnail][fields][1]=formats&populate[logo][fields][0]=url&populate[logo][fields][1]=formats&populate[sections][populate]=images&populate[credits]=*&populate[testimonial][populate]=*`
        );
        return response.data.data[0] || null;
    } catch (error) {
        console.error(`Error fetching project ${slug}:`, error);
        return null;
    }
}

// Testimonials
export async function getTestimonials() {
    try {
        const response = await axios.get(
            `${API_URL}/testimonials?populate[avatar][fields][0]=url&populate[avatar][fields][1]=formats`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return { data: [] };
    }
}