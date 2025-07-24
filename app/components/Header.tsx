"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/assets/imgs/logo.webp";
import UnicornStudioEmbed from "@/app/components/UnicornStudioEmbed";
import {
  UnicornStudioDynamic,
  ResponsiveUnicornStudio,
} from "@/app/components/UnicornStudioDynamic";
import { useUnicornStudio } from "@/hooks/useUnicornStudio";

const Header = () => {
  const { isLoaded, isError } = useUnicornStudio();
  return (
    <section className="relative min-h-screen overflow-hidden bg-pink-50-100">
      {/* Background Unicorn */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-amber-50 ">
        <ResponsiveUnicornStudio
          projectId="e6OPxyCEfYV1DvzepQKI"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Konten di atas background */}
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Image src={logo} alt="logo" className="w-14 h-auto" />
          <div className="mt-[163px]">
            <p className="font-light text-2xl text-white">
              Hi, I&apos;m Tantra. For over 5 years, I&apos;ve partnered with
              brands to translate their <br /> complex challenges into clear,
              compelling identities that audiences love.
            </p>
            <div className="mt-9">
              <h1 className="text-[140px] font-medium text-white leading-none">
                Design That <br /> Truly Resonate
              </h1>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        a[href*="unicorn.studio"],
        a[href*="unicorn.studio"] img[src*="made_in_us_small_web.svg"],
        img[src*="made_in_us_small_web.svg"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  );
};

export default Header;
