import { CiEdit } from "react-icons/ci";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { getBlogsForDashboard } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditPostButton, DeletePostButton } from "../button";
import Search from "@/components/blogs/search";
import Link from "next/link";

const PostList = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const blogs = await getBlogsForDashboard(query, currentPage);
  blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <div className="container mt-10 mb-4">
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold mx-auto uppercase">Table List</h1>
      </div>

      <div className="left flex gap-3">
        <Search />
        <Link href="/dashboard/create-post">
          <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-700 duration-700 ">
            Add Post
            <span className="pl-2 m-auto">
              <BsPlusCircleFill size={22} />{" "}
            </span>
          </button>
        </Link>
      </div>
      <div className="flex flex-row gap-2 mt-5">
        <table className="min-w-full table-auto border">
          <thead>
            <tr className="bg-slate-200">
              <th className="px-5 py-2">
                <span>Title</span>
              </th>
              <th className="px-5 py-2">
                <span>Date Upload</span>
              </th>
              <th className="px-5 py-2">
                <span>Date Update</span>
              </th>
              <th className="px-5 py-2">
                <span>Category</span>
              </th>
              <th className="px-5 py-2">
                <span>Tag</span>
              </th>
              <th className="px-5 py-2">
                <span>Status</span>
              </th>
              <th className="px-5 py-2">
                <span>Author</span>
              </th>
              <th className="px-5 py-2">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody className=" text-center border">
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td className="px-2 w-80 line-clamp-1">{blog.title}</td>
                <td className="px-5 py-2">
                  {formatDate(blog.createdAt.toString())}
                </td>
                <td className="px-5 py-2">
                  {formatDate(blog.updatedAt.toString())}
                </td>
                <td className="px-5 py-2">{blog.category}</td>
                <td className="px-5 py-2">{blog.tag}</td>
                <td className="px-5 py-2">
                  <button>
                    <span className="text-green-500">{blog.status}</span>
                  </button>
                </td>
                <td className="px-5 py-2">{blog.user}</td>
                <td className="px-5 py-2 flex gap-4 items-center justify-center">
                  <EditPostButton id={blog.id} />
                  <DeletePostButton id={blog.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PostList;
