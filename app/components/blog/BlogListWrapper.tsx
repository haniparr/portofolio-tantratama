import { getLatestBlogs } from "@/lib/data";
import BlogListHalf from "./blog-list";

export default async function BlogListWrapper() {
  // 1. Ambil data di server
  const latestBlogs = await getLatestBlogs(2);

  // 2. Render komponen display dan teruskan datanya sebagai prop
  return <BlogListHalf blogs={latestBlogs} />;
}
