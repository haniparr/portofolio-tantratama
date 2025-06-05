"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { handleSignOut } from "@/lib/action/auth";

interface SidebarProps {
  session: any; // Replace with your actual session type
}

const Sidebar = ({ session }: SidebarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className=" min-w-56 relative">
      <div className="flex flex-col h-screen justify-between bg-white">
        <div className="px-4 py-6">
          {/* <Image src={logo} alt="Logo Vidi" className="w-36 ml-3" /> */}

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
              >
                Dashboard
              </Link>
            </li>
            <li className="group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80 flex items-center"
              >
                Blog
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link
                    href="/dashboard/blog/blog-list"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-vidi hover:bg-gray-50 rounded-lg"
                  >
                    Daftar Blog
                  </Link>
                  <Link
                    href="/dashboard/blog/create-post"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-vidi hover:bg-gray-50 rounded-lg"
                  >
                    Tambah Artikel
                  </Link>
                </div>
              )}
            </li>
            <li className="group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80 flex items-center"
              >
                Portofolio
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link
                    href="/dashboard/portofolio/portofolio-list"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-vidi hover:bg-gray-50 rounded-lg"
                  >
                    Daftar Portofolio
                  </Link>
                  <Link
                    href="/dashboard/portofolio/create-post"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-vidi hover:bg-gray-50 rounded-lg"
                  >
                    Tambah Portofolio
                  </Link>
                </div>
              )}
            </li>
            <li>
              {session ? (
                <form action={handleSignOut}>
                  <button
                    type="submit"
                    className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
                  >
                    Sign Out
                  </button>
                </form>
              ) : (
                <Link
                  href="/login"
                  className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          {session && (
            <div className="text-base flex items-center gap-4 bg-white p-4 hover:bg-gray-50">
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full"
              >
                <Image
                  src={session.user.image || "/avatar.svg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="size-10 rounded-full object-cover"
                />
              </button>
              <span className="block font-medium capitalize">
                {session.user.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
