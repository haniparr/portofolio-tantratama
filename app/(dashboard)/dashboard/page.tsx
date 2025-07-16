// file: app/(dashboard)/dashboard/page.tsx

import { Metadata } from "next";
import { auth } from "@/auth";
import { getBlogPages, getPortoPages } from "@/lib/data"; // Asumsi Anda butuh ini
import Pagination from "@/app/components/blog/pagination"; // Sesuaikan path jika perlu
import PostList from "@/app/components/blog/table"; // Sesuaikan path jika perlu

export const metadata: Metadata = {
  title: "Dashboard",
};

// Pastikan komponen ini adalah `async`
const Dashboard = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const session = await auth();

  // SOLUSI: Terapkan pola yang sama di sini
  const params = await searchParams;
  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1;

  // Anda bisa mengambil data lain yang relevan untuk dashboard di sini
  // Misalnya, mengambil total halaman dari blog atau portofolio
  const totalBlogPages = await getBlogPages(query);
  // const totalPortoPages = await getPortoPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to your Dashboard, {session?.user?.name}!
      </h1>

      {/* Di sini Anda bisa menampilkan ringkasan atau tabel data.
        Contohnya, kita bisa menampilkan tabel blog seperti di halaman blog-list.
        Penting: Komponen PostList harus bisa menangani data fetching-nya sendiri
        berdasarkan props yang diterima.
      */}
      <div className="w-full max-w-6xl">
        <PostList query={query} currentPage={currentPage} />
        <div className="mt-8 flex justify-center">
          <Pagination totalPages={totalBlogPages} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
