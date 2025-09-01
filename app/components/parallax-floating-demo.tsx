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
    // Tinggi container responsif
    <div
      className="flex w-screen h-[600px] md:h-[800px] lg:h-[991px] justify-center items-center bg-blacked overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p
          // Ukuran font dan padding responsif
          className="text-4xl md:text-5xl z-50 hover:scale-110 transition-transform border text-white rounded-[10px] px-4 py-2 md:px-5 md:py-3 cursor-pointer"
          onClick={isMobile ? () => handleSetImages(brandingImage) : undefined}
          onMouseEnter={
            !isMobile ? () => handleSetImages(brandingImage) : undefined
          }
        >
          Brand Design
        </p>
        {/* Ukuran font responsif */}
        <p className="text-3xl md:text-5xl z-50 text-white font-medium capitalize m-4 md:m-8">
          is the foundation, <br /> But personality makes it a home.
        </p>
        {/* Ukuran font responsif */}
        <p className="text-2xl md:text-[32px] z-50 text-white font-medium capitalize mt-6">
          The Spark is
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <p
            // Ukuran font dan padding responsif
            className="text-xl md:text-2xl z-50 hover:scale-110 transition-transform border text-white rounded-[10px] px-2 py-2 md:py-3 cursor-pointer"
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
            // Ukuran font dan padding responsif
            className="text-xl md:text-2xl z-50 hover:scale-110 transition-transform border text-white rounded-[10px] px-2 py-2 md:py-3 cursor-pointer"
            onClick={isMobile ? () => handleSetImages(uiImages) : undefined}
            onMouseEnter={
              !isMobile ? () => handleSetImages(uiImages) : undefined
            }
          >
            Intuitive UI Design
          </p>
        </div>
      </motion.div>

      {/* Gambar-gambar floating sudah responsif dari sananya, jadi tidak perlu diubah */}
      <Floating sensitivity={-1} className="p-0 overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[5%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[0]?.url}
            alt={activeImages[0]?.alt}
            className="w-16 h-16 md:w-52 md:h-[233px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[19%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[1]?.url}
            alt={activeImages[1]?.alt}
            className="w-20 h-20 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[0%] left-[48%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[2]?.url}
            alt={activeImages[2]?.alt}
            className="w-28 h-40 md:w-[208px] md:h-[233px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[85%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[3]?.url}
            alt={activeImages[3]?.alt}
            className="w-24 h-24 md:w-[208px] md:h-[288px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[4]?.url}
            alt={activeImages[4]?.alt}
            className="w-28 h-28 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[40%] left-[90%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[5]?.url}
            alt={activeImages[5]?.alt}
            className="w-28 h-28 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={4} className="top-[85%] left-[46%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[6]?.url}
            alt={activeImages[6]?.alt}
            className="w-40 md:w-[214px] md:h-[297px] h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[76%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={activeImages[7]?.url}
            alt={activeImages[7]?.alt}
            className="w-24 h-24 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Preview;
