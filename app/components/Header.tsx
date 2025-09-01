// app/components/Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/assets/imgs/logo.webp";
import { ResponsiveUnicornStudio } from "@/app/components/ResponsiveUnicornStudio";
import ScrollReveal from "@/app/components/ScrollReveal";

const Header = () => {
  return (
    <section className="relative min-h-screen ">
      {/* Background Unicorn */}
      <div className="absolute bottom-0 left-0 w-full h-10 z-10 bg-gradient-to-t from-blacked to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full z-0  ">
        <ResponsiveUnicornStudio
          projectId="e6OPxyCEfYV1DvzepQKI"
          className="w-full h-screen object-cover"
        />
      </div>
      {/* Konten di atas background */}
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Image src={logo} alt="logo" className="lg:w-14 w-10 h-auto" />
          <ScrollReveal direction="left" delay={0.3}>
            {/* Margin atas yang responsif */}
            <div className="mt-24 md:mt-32 lg:mt-[163px]">
              <p className="font-light text-base   lg:text-2xl text-white">
                Hi, I&apos;m Tantra. For over 5 years, I&apos;ve partnered with
                brands to translate their <br /> complex challenges into clear,
                compelling identities that audiences love.
              </p>
              <div className="mt-9">
                <h1 className="lg:text-[140px] text-5xl font-medium text-white leading-none">
                  Design That <br /> Truly Resonate
                </h1>
              </div>
            </div>
          </ScrollReveal>
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
