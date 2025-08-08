"use client";

import { useState, Fragment } from "react";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { deleteBlog, deletePorto } from "@/lib/action";
import { Dialog, Transition } from "@headlessui/react";

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
        <CiEdit size={30} color="blue" className="hover:opacity-50 " />
      </button>
    </Link>
  );
};
export const DeletePostButton = ({ id }: { id: string }) => {
  // State untuk mengontrol visibilitas modal
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membuka dan menutup modal
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // Bind action delete dengan ID
  const deleteBlogWithId = deleteBlog.bind(null, id);

  return (
    <>
      <button onClick={openModal} className="text-red-500 hover:text-red-700">
        <MdOutlineDelete size={30} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Konfirmasi Penghapusan
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Apakah Anda yakin ingin menghapus post ini? Tindakan ini
                      tidak dapat dibatalkan.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
                      onClick={closeModal}
                    >
                      Batal
                    </button>
                    {/* Form untuk memanggil server action delete */}
                    <form action={deleteBlogWithId} onSubmit={closeModal}>
                      <DeleteConfirmButton />
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

// Tombol konfirmasi delete di dalam modal, menggunakan useFormStatus
const DeleteConfirmButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none disabled:bg-red-300"
    >
      {pending ? "Menghapus..." : "Ya, Hapus"}
    </button>
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
