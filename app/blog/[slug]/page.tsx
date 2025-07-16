import { getBlogBySlug } from "@/lib/data";
import { Metadata } from "next";
import BlogContent from "@/app/components/blog/BlogContent";
import BlogSidebar from "@/app/components/blog/BlogSidebar";
import BlogDetailHeader from "@/app/components/blog/BlogDetailHeader"; // <-- Impor header baru

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // SOLUSI 1: Await params di sini
  const awaitedParams = await params;
  const blog = await getBlogBySlug(awaitedParams.slug);

  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
  };
}

export default async function BlogDetailPage({ params }: Props) {
  // Ambil data untuk post spesifik berdasarkan slug dari URL
  const awaitedParams = await params;
  const blog = await getBlogBySlug(awaitedParams.slug);
  return (
    <>
      {/* GUNAKAN KOMPONEN HEADER BARU DI SINI DAN KIRIM DATA BLOG */}
      <BlogDetailHeader blog={blog} />

      {/* Konten Utama */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-8/12">
              <BlogContent blog={blog} />
            </div>
            <div className="w-full lg:w-4/12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
