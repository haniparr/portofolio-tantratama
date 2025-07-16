// file: app/blog/page.tsx

import { Suspense } from "react";
import { Metadata } from "next";
import { getBlogs, getBlogPages } from "@/lib/data";
import BlogCard from "@/app/components/BlogCard";
import Pagination from "@/app/components/Pagination";
import BlogHeader from "@/app/components/blog/Header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles and news.",
};

interface BlogPageProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Gunakan solusi yang sudah kita temukan sebelumnya
  const params = await searchParams;
  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1;

  const totalPages = await getBlogPages(query);
  const blogs = await getBlogs(query, currentPage);

  return (
    <>
      <BlogHeader />
      <main className="container mx-auto px-4 py-20 md:py-28">
        <Suspense
          key={query + currentPage}
          fallback={
            <div className="text-center text-white">Loading posts...</div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </Suspense>
        <Pagination totalPages={totalPages} />
      </main>
    </>
  );
}
