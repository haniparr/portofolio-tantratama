import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Blog } from "@/lib/data";
import { formatDate } from "@/lib/utils";

// Tambahkan prop 'layout' untuk memilih antara 'grid' atau 'list'
interface BlogCardProps {
  blog: Blog;
  layout?: "grid" | "list"; // 'grid' akan menjadi default
}

const BlogCard = ({ blog, layout = "grid" }: BlogCardProps) => {
  if (layout === "list") {
    return (
      <div className="bg-[#191919] rounded-xl overflow-hidden group">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <Link href={`/blog/${blog.slug}`}>
              <Image
                src={blog.image || "/assets/imgs/blog/placeholder.jpg"}
                alt={blog.title}
                width={400}
                height={400}
                className="w-[300px] h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 rounded-2xl bg-[#141414] flex justify-center items-center w-max h-min px-5 py-[3px]">
                <Link
                  href={`/blog/category/${blog.category.toLowerCase()}`}
                  className="text-sm text-white hover:underline"
                >
                  {blog.category}
                </Link>
              </div>
              <h5 className="text-xl font-medium mb-4 text-white">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="hover:text-green-400 transition"
                >
                  {blog.title}
                </Link>
              </h5>
            </div>
            <span className="text-xs uppercase text-gray-400 mt-6">
              {formatDate(blog.createdAt.toString())}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col h-full">
      <div className="overflow-hidden mb-6">
        <Link href={`/blog/${blog.slug}`}>
          <Image
            src={blog.image || "/placeholder.jpg"}
            alt={blog.title}
            width={800}
            height={600}
            className="w-full object-cover aspect-[4/3] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-grow px-1">
        <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
          <span>{formatDate(blog.createdAt.toString())}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
          <Link
            href={`/blog/${blog.slug}`}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {blog.title}
          </Link>
        </h3>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-sm text-white font-medium group-hover:text-gray-300 transition-colors duration-300"
          >
            Read more
          </Link>
          <Link href={`/blog/${blog.slug}`}>
            <FiArrowRight className="text-white text-xl transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
