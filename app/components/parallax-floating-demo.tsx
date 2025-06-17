"use client";

import { useEffect } from "react";
import { exampleImages } from "@/lib/demo-images";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";

const Preview = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <div
      className="flex w-screen h-[991px] justify-center items-center bg-blacked overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-5xl  z-50 text-white font-medium capitalize">
          Brand Design is the foundation, <br /> But personality makes it a
          home.
        </p>
        <p className="text-[32px] z-50 text-white font-medium capitalize mt-6">
          The Spark is
        </p>
        <div className="flex gap-5">
          <p className="text-2xl z-50 hover:scale-110 transition-transform border  text-white rounded-[10px] px-2 py-3  cursor-pointer">
            Dancing Motion Graphics
          </p>
          <p className="text-2xl z-50 hover:scale-110 transition-transform border  text-white rounded-[10px] px-2 py-3  cursor-pointer">
            Charming Illustration
          </p>
          <p className="text-2xl z-50 hover:scale-110 transition-transform border  text-white rounded-[10px] px-2 py-3  cursor-pointer">
            Intuitive UI Design
          </p>
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="p-0 overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[5%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-16 h-16 md:w-52 md:h-[233px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[19%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-20 h-20 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[0%] left-[48%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-28 h-40 md:w-[208px] md:h-[233px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[85%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-24 h-24 md:w-[208px] md:h-[288px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-28 h-28 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[40%] left-[90%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-28 h-28 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={4} className="top-[85%] left-[46%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-40 md:w-[214px] md:h-[297px] h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[76%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-24 h-24 md:w-[158px] md:h-[219px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Preview;
