// app/components/parallax-floating-demo.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  initialImages,
  motionImages,
  illustrationImages,
  uiImages,
  ExampleImage,
  brandingImage,
} from "@/lib/demo-images";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";
import { useMediaQuery } from "@/hooks/use-media-query";

const Preview = () => {
  const [scope, animate] = useAnimate();
  const [activeImages, setActiveImages] =
    useState<ExampleImage[]>(initialImages);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.1) });
  }, [activeImages, animate]);

  const handleSetImages = useCallback((imageSet: ExampleImage[]) => {
    setActiveImages(imageSet);
  }, []);

  return (
    <div
      className="flex w-full max-w-[1920px] mx-auto justify-center items-center bg-blacked overflow-hidden"
      ref={scope}
      style={{ height: "clamp(600px, 60vw, 991px)" }}
    >
      <motion.div
        className="z-50 text-center items-center flex flex-col px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
        style={{ gap: "clamp(1rem, 1.5vw, 1rem)" }}
      >
        <p
          className="z-50 hover:scale-110 transition-transform border text-white rounded-[10px] cursor-pointer"
          style={{
            fontSize: "clamp(1.875rem, 3.5vw, 3.125rem)",
            padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.25rem)",
          }}
          onClick={isMobile ? () => handleSetImages(brandingImage) : undefined}
          onMouseEnter={
            !isMobile ? () => handleSetImages(brandingImage) : undefined
          }
        >
          Brand Design
        </p>

        <p
          className="z-50 text-white font-medium capitalize"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
            margin: "clamp(1rem, 2vw, 2rem) 0",
          }}
        >
          is the foundation, <br /> But personality makes it a home.
        </p>

        <p
          className="z-50 text-white font-medium capitalize"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
            marginTop: "clamp(1.5rem, 2vw, 1.5rem)",
          }}
        >
          The Spark is
        </p>

        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "clamp(1.25rem, 1.5vw, 1.25rem)" }}
        >
          <p
            className="z-50 hover:scale-110 transition-transform border text-white rounded-[10px] cursor-pointer"
            style={{
              fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
              padding:
                "clamp(0.5rem, 0.8vw, 0.75rem) clamp(0.5rem, 1vw, 0.5rem)",
            }}
            onClick={
              isMobile ? () => handleSetImages(illustrationImages) : undefined
            }
            onMouseEnter={
              !isMobile ? () => handleSetImages(illustrationImages) : undefined
            }
          >
            Charming Illustration
          </p>

          <p
            className="z-50 hover:scale-110 transition-transform border text-white rounded-[10px] cursor-pointer"
            style={{
              fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
              padding:
                "clamp(0.5rem, 0.8vw, 0.75rem) clamp(0.5rem, 1vw, 0.5rem)",
            }}
            onClick={isMobile ? () => handleSetImages(uiImages) : undefined}
            onMouseEnter={
              !isMobile ? () => handleSetImages(uiImages) : undefined
            }
          >
            Intuitive UI Design
          </p>
        </div>
      </motion.div>

      {/* Gambar-gambar floating dengan size fluid */}
      <Floating sensitivity={-1} className="p-0 overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[5%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[0]?.url}
            alt={activeImages[0]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(4rem, 13vw, 13rem)",
              height: "clamp(4rem, 14.5vw, 14.5rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[75%] left-[19%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[1]?.url}
            alt={activeImages[1]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(5rem, 9.9vw, 9.9rem)",
              height: "clamp(7rem, 13.7vw, 13.7rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[0%] left-[48%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[2]?.url}
            alt={activeImages[2]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(7rem, 13vw, 13rem)",
              height: "clamp(10rem, 14.5vw, 14.5rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[0%] left-[85%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[3]?.url}
            alt={activeImages[3]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(6rem, 13vw, 13rem)",
              height: "clamp(8rem, 18vw, 18rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[4]?.url}
            alt={activeImages[4]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(7rem, 9.9vw, 9.9rem)",
              height: "clamp(7rem, 13.7vw, 13.7rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[90%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[5]?.url}
            alt={activeImages[5]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(7rem, 9.9vw, 9.9rem)",
              height: "clamp(7rem, 13.7vw, 13.7rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[85%] left-[46%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[6]?.url}
            alt={activeImages[6]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(10rem, 13.4vw, 13.4rem)",
              height: "clamp(12rem, 18.6vw, 18.6rem)",
            }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[75%] left-[76%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[7]?.url}
            alt={activeImages[7]?.alt}
            className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            style={{
              width: "clamp(6rem, 9.9vw, 9.9rem)",
              height: "clamp(6rem, 13.7vw, 13.7rem)",
            }}
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Preview;
