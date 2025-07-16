import Link from "next/link";
import BlogCard from "@/app/components/BlogCard";
import type { Blog } from "@/lib/data";

const BlogListHalf = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="py-20 bg-gray-700/5 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h6 className="text-green-500 uppercase text-sm mb-6">Our Blog</h6>
          <div className="border-t border-gray-600 pt-6 flex items-center">
            <h2 className="text-4xl font-bold">
              Read Latest <span className="font-light">News</span>
            </h2>
            <div className="ml-auto">
              <Link
                href="/blog"
                className="text-green-400 flex items-center gap-2 hover:underline"
              >
                <span>View all posts</span>
                <span className="inline-block rotate-45">↑</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} layout="list" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListHalf;
