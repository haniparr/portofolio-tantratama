import EditPost from "@/components/blogs/edit-post";
import { getBlogsById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateBlogPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blog = await getBlogsById(id);

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
