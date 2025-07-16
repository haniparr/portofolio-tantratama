"use client";

import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { FaRegComment } from "react-icons/fa";

// Fungsi ini harus tersedia di scope klien jika diperlukan
const loadBackgroudImages = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-background]");
  elements.forEach((el) => {
    if (el.dataset.background) {
      el.style.backgroundImage = `url(${el.dataset.background})`;
    }
  });
};

const BlogDetailHeader = ({ blog }: { blog: Blog }) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=1.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0.5"
    );

    // SOLUSI: Gunakan kurung kurawal untuk memastikan fungsi cleanup me-return void
    return () => {
      tl.kill();
    };
  }, []); // Dependensi kosong agar hanya berjalan sekali

  useEffect(() => {
    loadBackgroudImages();
  }, [blog.image]);

  return (
    <header className="header blog-header pt-32 pb-0 text-white">
      <div className="container mx-auto px-4">
        {/* Bagian Kategori/Tag di atas */}
        <div className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          <Link
            href={`/blog/category/${blog.category.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {blog.category}
          </Link>
          {blog.tag && <span className="mx-2">•</span>}
          {blog.tag && (
            <Link
              href={`/blog/tag/${blog.tag.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {blog.tag}
            </Link>
          )}
        </div>

        {/* Judul Utama */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-5xl">
          {blog.title}
        </h1>

        {/* Informasi Bawah (Author, Tanggal, Komentar) */}
        <div className="flex flex-wrap items-center justify-between mt-12 pt-8 border-t border-gray-800">
          {/* Sisi Kiri: Author & Tanggal */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/imgs/blog/author.png" // Ganti dengan blog.user.image jika ada
                alt={blog.user}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-400">Author</p>
                <p className="font-semibold text-white">{blog.user}</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-400">Published</p>
              <p className="font-semibold text-white">
                {formatDate(blog.createdAt.toString())}
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Komentar */}
          <div className="hidden sm:flex items-center gap-2 text-gray-400">
            <FaRegComment />
            {/* Jumlah komentar bisa dibuat dinamis jika ada datanya */}
            <span className="text-sm">02 Comments</span>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-20 h-[60vh]"
        data-background={blog.image || "/placeholder.jpg"}
      ></div>
    </header>
  );
};

export default BlogDetailHeader;
