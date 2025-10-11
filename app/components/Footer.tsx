"use client";

import React from "react";
import Link from "next/link";
import logo from "/public/assets/imgs/logo.webp";
import Image from "next/image";
import TextPressure from "./TextPressure";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div
        className="max-w-container-xl mx-auto"
        style={{
          padding: "clamp(4rem, 6vw, 6rem) clamp(1rem, 4vw, 4rem)",
        }}
      >
        {/* 1. Bagian "Let's Contact" */}
        <div
          style={{
            position: "relative",
            paddingBottom: "clamp(3rem, 4vw, 3rem)",
            marginBottom: "clamp(3rem, 4vw, 3rem)",
          }}
          className="border-b border-gray-800"
        >
          <div className="w-xl">
            <Link
              href="/contact"
              className="group flex items-center justify-start"
              style={{ gap: "clamp(2rem, 3vw, 2.5rem)" }}
            >
              <TextPressure
                text="Let's Contact!"
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

        {/* 2. Bagian Grid Footer Utama */}
        <div
          className="grid grid-cols-2 md:grid-cols-5"
          style={{ gap: "clamp(2rem, 3vw, 2.5rem)" }}
        >
          {/* Kolom 1: Logo */}
          <div className="md:col-span-1">
            <Image
              src={logo}
              alt="logo"
              className="h-auto"
              style={{ width: "clamp(3rem, 3.5vw, 3.5rem)" }}
            />
          </div>

          {/* Kolom 2: Alamat */}
          <div className="md:col-span-2">
            <h6
              className="font-semibold uppercase tracking-widest text-gray-400"
              style={{
                fontSize: "clamp(0.75rem, 0.8vw, 0.875rem)",
                marginBottom: "clamp(1.5rem, 2vw, 1.5rem)",
              }}
            >
              Address
            </h6>
            <p
              className="leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
            >
              5919 Trussville <br />
              Crossings Pkwy, Birmingham
            </p>
            <a
              href="tel:+24563432445"
              className="inline-block text-teal-400 underline hover:text-teal-300"
              style={{
                marginTop: "clamp(1rem, 1.5vw, 1rem)",
                fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
              }}
            >
              +2 456 (343) 24 45
            </a>
          </div>

          {/* Kolom 3: Useful Links */}
          <div className="md:col-span-1">
            <h6
              className="font-semibold uppercase tracking-widest text-gray-400"
              style={{
                fontSize: "clamp(0.75rem, 0.8vw, 0.875rem)",
                marginBottom: "clamp(1.5rem, 2vw, 1.5rem)",
              }}
            >
              Useful Links
            </h6>
            <ul
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(0.75rem, 1vw, 0.875rem)",
              }}
            >
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Support */}
          <div className="md:col-span-1">
            <h6
              className="font-semibold uppercase tracking-widest text-gray-400"
              style={{
                fontSize: "clamp(0.75rem, 0.8vw, 0.875rem)",
                marginBottom: "clamp(1.5rem, 2vw, 1.5rem)",
              }}
            >
              Support
            </h6>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(0.75rem, 1vw, 0.875rem)",
              }}
            >
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  FAQS
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  Term & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
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
