// app/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/definitions";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="item bg-[#1d1d1d] mb-10 rounded-2xl overflow-hidden group text-white">
      <div className="img relative overflow-hidden">
        <Image
          src={blog.image || "/images/blog-placeholder.jpg"}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-96 transition-transform duration-500 group-hover:scale-105 object-cover"
        />
        <div className="tag bg-[#1d1d1d] absolute -bottom-px left-1/2 -translate-x-1/2 px-8 py-2 rounded-t-3xl text-xs uppercase tracking-wider">
          <span>{blog.category || "Envato"}</span>

          {/* Shape decorations */}
          <div className="shap-right-bottom absolute -bottom-px -right-[1.05rem] rotate-[270deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[1.1rem] h-[1.1rem]"
            >
              <path
                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                fill="#1d1d1d"
              />
            </svg>
          </div>
          <div className="shap-left-bottom absolute -bottom-px -left-[1.05rem] rotate-180">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[1.1rem] h-[1.1rem]"
            >
              <path
                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                fill="#1d1d1d"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="cont p-10">
        <div className="date text-xs uppercase tracking-widest mb-2.5 opacity-70">
          <Link
            href={`/blog/${blog.slug}`}
            className="hover:text-[#14cf93] transition-colors"
          >
            {formatDate(blog.createdAt)}
          </Link>
        </div>
        <h5 className="text-2xl font-medium leading-tight mb-0">
          <Link
            href={`/blog/${blog.slug}`}
            className="hover:text-[#14cf93] transition-colors duration-300"
          >
            {blog.title}
          </Link>
        </h5>
        <Link
          href={`/blog/${blog.slug}`}
          className="flex items-center mt-8 group/link"
        >
          <span className="text mr-4 group-hover/link:text-[#14cf93] transition-colors">
            Read More
          </span>
          <span className="ti-arrow-top-right inline-block transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
