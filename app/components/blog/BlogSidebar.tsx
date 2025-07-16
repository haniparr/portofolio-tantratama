
import Image from 'next/image';
import Link from 'next/link';
import { getCategoriesWithCount, getLatestBlogs, getUniqueTags } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { FiSearch } from 'react-icons/fi';

// Sidebar adalah Server Component yang mengambil datanya sendiri
const BlogSidebar = async () => {
  const categories = await getCategoriesWithCount();
  const latestPosts = await getLatestBlogs(3);
  const tags = await getUniqueTags();

  return (
    <aside className="space-y-12">
      {/* Search Widget */}
      <div className="widget">
        <h6 className="text-xl font-bold mb-6">Search Here</h6>
        <div className="relative">
          <input type="text" placeholder="Search" className="w-full bg-transparent border border-gray-700 rounded-md py-3 px-4 focus:border-white focus:outline-none transition" />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="widget">
        <h6 className="text-xl font-bold mb-6">Categories</h6>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat.name}>
              <Link href={`/blog/category/${cat.name.toLowerCase()}`} className="flex justify-between p-3 rounded-md hover:bg-gray-800/50 transition">
                <span>{cat.name}</span>
                <span className="text-gray-500">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Posts Widget */}
      <div className="widget">
        <h6 className="text-xl font-bold mb-6">Latest Posts</h6>
        <div className="space-y-6">
          {latestPosts.map(post => (
            <div key={post.id} className="flex items-center gap-4">
              <Link href={`/blog/${post.slug}`} className="shrink-0">
                <Image src={post.image || '/placeholder.jpg'} alt={post.title} width={80} height={80} className="object-cover rounded-md aspect-square" />
              </Link>
              <div>
                <span className="text-xs text-gray-400">{formatDate(post.createdAt.toString())}</span>
                <h6 className="leading-tight mt-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tags Widget */}
      <div className="widget">
        <h6 className="text-xl font-bold mb-6">Tags</h6>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`} className="px-4 py-2 text-sm bg-gray-800 rounded-full hover:bg-gray-700 transition">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;