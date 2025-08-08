"use client";

import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import type { Portofolio } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { FaRegComment } from "react-icons/fa";

const loadBackgroudImages = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-background]");
  elements.forEach((el) => {
    if (el.dataset.background) {
      el.style.backgroundImage = `url(${el.dataset.background})`;
    }
  });
};

const PortoDetailHeader = ({ porto }: { porto: Portofolio }) => {
  useLayoutEffect(() => {
    // Set initial state untuk elemen-elemen yang akan dianimasi
    gsap.set(".header", { y: 0, opacity: 1 });
    gsap.set(".header .container", { opacity: 0, y: 40 });
    gsap.set(".background", { opacity: 0, y: 30 });

    // Buat timeline tanpa delay
    const tl = gsap.timeline();

    // Animate container content
    tl.to(".header .container", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate background image
    tl.to(
      ".background",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    ); // Mulai sedikit lebih awal

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Load background images setelah component mount
    loadBackgroudImages();
  }, [porto.image]);

  return (
    <header className="header blog-header pt-32 pb-0 text-white">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          <Link
            href={`/blog/category/${porto.category.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {porto.category}
          </Link>
          {porto.tag && <span className="mx-2">•</span>}
          {porto.tag && (
            <Link
              href={`/blog/tag/${porto.tag.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {porto.tag}
            </Link>
          )}
        </div>

        {/* Judul Utama */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-5xl">
          {porto.title}
        </h1>

        {/* Informasi Bawah (Author, Tanggal, Komentar) */}
        <div className="flex flex-wrap items-center justify-between mb-12 py-8 border-b border-gray-800">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-400">Published</p>
            <p className="font-semibold text-white">
              {formatDate(porto.createdAt.toString())}
            </p>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-20 h-[80vh] bg-auto bg-center bg-no-repeat"
        data-background={porto.image || "/placeholder.jpg"}
      ></div>
    </header>
  );
};

export default PortoDetailHeader;
