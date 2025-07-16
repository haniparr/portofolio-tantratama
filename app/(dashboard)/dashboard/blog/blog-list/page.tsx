import PostList from "@/app/components/blog/table";
import { Metadata } from "next";
import { getBlogPages } from "@/lib/data";
import Pagination from "@/app/components/blog/pagination";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

// Props 'searchParams' adalah objek biasa, bukan promise
const Dashboard = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const session = await auth();

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  // Fungsi getBlogPages dan auth() tetap di-await karena mereka adalah promise
  const totalPages = await getBlogPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <PostList query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default Dashboard;
