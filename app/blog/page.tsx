// app/blog/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import { getBlogs, getBlogPages } from "@/lib/data";
import BlogCard from "@/app/components/blog/BlogCard";
import Pagination from "@/app/components/Pagination";
import BlogHeader from "@/app/components/blog/Header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles and news.",
};

interface BlogPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1;

  const totalPages = await getBlogPages(query);
  const blogs = await getBlogs(query, currentPage);

  return (
    <>
      <BlogHeader />
      <section className="blog-crev section-padding bg-[#1a1a1a] py-36">
        <div className="container mx-auto px-4">
          <Suspense
            key={query + currentPage}
            fallback={
              <div className="text-center text-white">Loading posts...</div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </Suspense>
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
