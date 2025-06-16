"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/assets/imgs/logo.webp";

const Header = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-[url('/assets/imgs/bg-hero.webp')] pt-11 pb-24 ">
      <div className="max-w-7xl mx-auto ">
        <Image src={logo} alt="logo" className="w-14 h-auto" />
        <div className="mt-[163px]">
          <p className="font-light text-2xl  text-white">
            Hi, I'm Tantra. For over 5 years, I've partnered with brands to
            translate their <br /> complex challenges into clear, compelling
            identities that audiences love.
          </p>
          <div className="mt-9">
            <h1 className="text-[140px] font-medium text-white leading-none">
              Design That <br /> Truly Resonate
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
