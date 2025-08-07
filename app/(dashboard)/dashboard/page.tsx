import { Metadata } from "next";
import { auth } from "@/auth";
import { getBlogPages, getPortoPages } from "@/lib/data";
import Pagination from "@/app/components/blog/pagination";
import PostList from "@/app/components/blog/table";
import PortoList from "@/app/components/portofolio/table";

export const metadata: Metadata = {
  title: "Dashboard",
};

// Pastikan komponen ini adalah `async`
const Dashboard = async ({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const session = await auth();

  const params = await searchParams;
  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1;
  const totalBlogPages = await getBlogPages(query);
  const totalPortoPages = await getPortoPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to your Dashboard, {session?.user?.name}!
      </h1>
      <div className="w-full max-w-6xl">
        <PostList query={query} currentPage={1} />
        <PortoList query={query} currentPage={1} />
      </div>
    </div>
  );
};

export default Dashboard;
