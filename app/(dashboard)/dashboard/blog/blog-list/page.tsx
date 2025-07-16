import PostList from "@/app/components/blog/table";
import { Metadata } from "next";
import { getBlogPages } from "@/lib/data";
import Pagination from "@/app/components/blog/pagination";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

// PERBAIKAN: Definisikan tipe untuk props secara eksplisit di luar komponen.
// Ini membantu TypeScript memahami struktur yang diharapkan dengan lebih baik
// dan menghindari konflik dengan tipe 'PageProps' internal Next.js.
interface DashboardPageProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

const Dashboard = async ({ searchParams }: DashboardPageProps) => {
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
