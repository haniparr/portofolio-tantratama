"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/assets/imgs/logo.webp";

const Header = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-[url('/assets/imgs/bg-hero.webp')] pt-11 pb-24 ">
      <div className="max-w-7xl mx-auto px-4">
        <Image src={logo} alt="logo" className="h-[120px] w-auto" />
        <div className="mt-40">
          <p className="font-light text-2xl  text-white">
            Hi, I'm Tantra. For over 5 years, I've partnered with brands to
            translate their <br /> complex challenges into clear, compelling
            identities that audiences love.
          </p>
          <div className="mt-10">
            <h1 className="text-[140px] leading-none tracking-wider font-medium text-white">
              Design That
            </h1>
            <h1 className="text-[140px] text-white">Truly Resonate</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
