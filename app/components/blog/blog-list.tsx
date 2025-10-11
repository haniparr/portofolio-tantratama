import Link from "next/link";
import BlogCard from "@/app/components/BlogCard";
import type { Blog } from "@/lib/data";

const BlogListHalf = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section
      className="text-white"
      style={{ padding: "clamp(5rem, 7vw, 6rem) 0" }}
    >
      <div
        className="max-w-container-xl mx-auto"
        style={{ padding: "0 clamp(1rem, 4vw, 4rem)" }}
      >
        <div style={{ marginBottom: "clamp(5rem, 6vw, 5rem)" }}>
          <h6
            className="text-green-500 uppercase"
            style={{
              fontSize: "clamp(0.875rem, 0.9vw, 0.875rem)",
              marginBottom: "clamp(1.5rem, 2vw, 1.5rem)",
            }}
          >
            Our Blog
          </h6>
          <div
            className="border-t border-gray-600 flex flex-col md:flex-row md:items-center"
            style={{
              paddingTop: "clamp(1.5rem, 2vw, 1.5rem)",
              gap: "clamp(1rem, 1.5vw, 1rem)",
            }}
          >
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.875rem, 2.5vw, 2.25rem)" }}
            >
              Read Latest <span className="font-light">News</span>
            </h2>
            <div className="md:ml-auto">
              <Link
                href="/blog"
                className="text-green-400 flex items-center hover:underline transition-all"
                style={{
                  gap: "clamp(0.5rem, 0.6vw, 0.5rem)",
                  fontSize: "clamp(1rem, 1.1vw, 1rem)",
                }}
              >
                <span>View all posts</span>
                <span className="inline-block rotate-45">↑</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(2rem, 3vw, 2.5rem)" }}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} layout="list" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListHalf;
