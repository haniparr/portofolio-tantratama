import PostList from "@/components/portofolio/table";
import { Metadata } from "next";
import { getPortoPages } from "@/lib/data";
import Pagination from "@/components/portofolio/pagination";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

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

  const totalPages = await getPortoPages(query);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <PostList query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
export default Dashboard;
