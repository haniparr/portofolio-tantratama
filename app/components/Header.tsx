// app/components/Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/assets/imgs/logo.webp";
import { ResponsiveUnicornStudio } from "@/app/components/ResponsiveUnicornStudio";
import ScrollReveal from "@/app/components/ScrollReveal";

const Header = () => {
  return (
    <section className="relative lg:min-h-screen ">
      {/* Background Unicorn */}
      <div className="absolute bottom-0  w-full h-full z-10 bg-gradient-to-t from-blacked to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ResponsiveUnicornStudio
          projectId="e6OPxyCEfYV1DvzepQKI"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Konten dengan container fluid */}
      <div className="relative z-10 px-[4vw] py-[2vh] ">
        <div className="max-w-container-xl mx-auto">
          {/* Logo dengan fluid size */}
          <Image
            src={logo}
            alt="logo"
            className="h-auto"
            style={{ width: "clamp(2.5rem, 3vw, 3.5rem)" }}
          />

          <ScrollReveal direction="left" delay={0.3}>
            {/* Margin atas fluid */}
            <div style={{ marginTop: "clamp(6rem, 12vh, 10rem)" }}>
              <p
                className="font-light text-white max-w-4xl"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)" }}
              >
                Hi, I&apos;m Tantra. For over 5 years, I&apos;ve partnered with
                brands to translate their <br className="hidden lg:block" />
                complex challenges into clear, compelling identities that
                audiences love.
              </p>

              <div style={{ marginTop: "clamp(2rem, 3vh, 2.5rem)" }}>
                <h1
                  className="font-medium text-white leading-none"
                  style={{ fontSize: "clamp(3rem, 9vw, 8.75rem)" }}
                >
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
