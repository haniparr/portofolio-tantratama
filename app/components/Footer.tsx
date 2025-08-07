"use client";

import React from "react";
import Link from "next/link";
import logo from "/public/assets/imgs/logo.webp";
import Image from "next/image";
import TextPressure from "./TextPressure";

// Menggunakan ikon yang lebih cocok dari react-icons
import { FiArrowUpRight } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blacked text-white">
      <div className="container mx-auto px-8 py-16 md:py-24">
        {" "}
        {/* Padding lebih besar */}
        {/* 1. Bagian "Let's Contact" */}
        <div
          style={{ position: "relative" }}
          className="pb-12 mb-12 border-b border-gray-800"
        >
          <div>
            <Link
              href="/contact"
              className="group flex items-center justify-start gap-10"
            >
              <TextPressure
                text="Let’s Contact! "
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={false}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={12}
                className="w-sm"
              />
            </Link>
          </div>
        </div>
        <div className="pb-12 mb-12 border-b border-gray-800">
          <Link
            href="/contact"
            className="group flex items-center justify-start gap-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Let’s Contact
            </h2>
            <FiArrowUpRight className="text-5xl md:text-7xl transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        {/* 2. Bagian Grid Footer Utama */}
        {/* Menggunakan CSS Grid untuk layout yang presisi */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Kolom 1: Logo */}
          <div className="md:col-span-1">
            <Image src={logo} alt="logo" className="w-12 h-auto" />
          </div>

          {/* Kolom 2: Alamat */}
          <div className="md:col-span-2">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Address
            </h6>
            <p className="text-lg leading-relaxed">
              5919 Trussville <br />
              Crossings Pkwy, Birmingham
            </p>
            <a
              href="tel:+24563432445"
              className="mt-4 inline-block text-lg text-teal-400 underline hover:text-teal-300"
            >
              +2 456 (343) 24 45
            </a>
          </div>

          {/* Kolom 3 & 4 dilewati, Kolom 5 & 6 di sini */}
          {/* Kolom 3: Useful Links */}
          <div className="md:col-span-1">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Useful Links
            </h6>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Support */}
          <div className="md:col-span-1">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Support
            </h6>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/faqs" className="hover:text-gray-300">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Term & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-gray-300">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
