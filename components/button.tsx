"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { deleteBlog, deletePorto } from "@/lib/action";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "px-6 py-2 rounded-xl bg-blue-500 text-white font-bold transition duration-200 hover:bg-blue-200 hover:text-vidi border-2 border-transparent hover:border-vidi",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditPostButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/dashboard/blog/create-post/edit/${id}`} passHref>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <CiEdit size={30} color="blue" />
      </button>
    </Link>
  );
};
export const DeletePostButton = ({ id }: { id: string }) => {
  const DeleteBlogWithId = deleteBlog.bind(null, id);
  return (
    <form action={DeleteBlogWithId}>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <MdOutlineDelete size={30} color="red" />
      </button>
    </form>
  );
};

export const EditPortoButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/dashboard/portofolio/create-post/edit/${id}`} passHref>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <CiEdit size={30} color="blue" />
      </button>
    </Link>
  );
};
export const DeletPortoButton = ({ id }: { id: string }) => {
  const DeletePortoWithId = deletePorto.bind(null, id);
  return (
    <form action={DeletePortoWithId}>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <MdOutlineDelete size={30} color="red" />
      </button>
    </form>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
    >
      {pending ? "Authenticating..." : "Sign In"}
    </button>
  );
};

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};
