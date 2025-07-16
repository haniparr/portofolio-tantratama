import EditPost from "@/app/components/blog/edit-post";
import { getBlogsById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateBlogPage = async ({ params }: { params: { id: string } }) => {
  const awaitedParams = await params;

  const blog = await getBlogsById(awaitedParams.id);

  if (!blog) {
    notFound();
  }
  return (
    <div className="w-full h-full">
      <EditPost blog={blog} />
    </div>
  );
};
export default UpdateBlogPage;
