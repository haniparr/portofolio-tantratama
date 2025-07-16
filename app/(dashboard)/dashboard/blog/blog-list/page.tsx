import PostList from "@/app/components/blog/table";
import { Metadata } from "next";
import { getBlogPages } from "@/lib/data";
import Pagination from "@/app/components/blog/pagination";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

// PERBAIKAN: Definisikan tipe untuk props secara eksplisit di luar komponen.
// Kita tambahkan 'params' ke dalam interface karena itu adalah bagian wajib
// dari tipe 'PageProps' standar di Next.js, meskipun tidak kita gunakan.
interface DashboardPageProps {
  params: { [key: string]: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}

// Kita juga tambahkan 'params' di sini saat destructuring props
const Dashboard = async ({ params, searchParams }: DashboardPageProps) => {
  const session = await auth();

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getBlogPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <PostList query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default Dashboard;
