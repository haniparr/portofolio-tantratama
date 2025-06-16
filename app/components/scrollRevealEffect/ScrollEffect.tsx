"use client";
import React, { useRef, useEffect, useState } from "react";
import setupScrollReveal from "../scrollRevealEffect";

interface ScrollRevealInstance {
  initScrollReveal: () => void;
  cleanupScrollReveal: () => void;
}

const ScrollEffect = () => {
  const scrollRevealWrapperRef = useRef<HTMLDivElement>(null);
  const scrollRevealVideoRef = useRef<HTMLVideoElement>(null);
  const scrollRevealRef = useRef<ScrollRevealInstance | null>(null);
  const [isScrollRevealInitialized, setIsScrollRevealInitialized] =
    useState(false);

  useEffect(() => {
    const initializeScrollReveal = async () => {
      // Setup scroll reveal untuk video
      scrollRevealRef.current = setupScrollReveal(
        scrollRevealWrapperRef as React.RefObject<HTMLDivElement>,
        scrollRevealVideoRef as React.RefObject<HTMLVideoElement>
      );

      // Tunggu sedikit untuk memastikan setup selesai
      setTimeout(() => {
        if (scrollRevealRef.current) {
          scrollRevealRef.current.initScrollReveal();
          setIsScrollRevealInitialized(true);
        }
      }, 100);
    };

    initializeScrollReveal();

    // Cleanup function
    return () => {
      if (scrollRevealRef.current) {
        scrollRevealRef.current.cleanupScrollReveal();
      }
    };
  }, []);

  return (
    <>
      <div className="w-[1294px] h-[728px]  mx-auto">
        <div className="w-full">
          <div className="">
            <div
              className="video scroll-reveal-wrapper relative z-20"
              ref={scrollRevealWrapperRef}
            >
              <video
                ref={scrollRevealVideoRef}
                className="scroll-reveal-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/assets/videos/your-video.mp4" type="video/mp4" />
                <source
                  src="/assets/videos/your-video.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-reveal-wrapper {
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-reveal-video {
          display: block;
          height: 100%;
          object-fit: cover;
          transition: width 0.1s linear;
        }
      `}</style>
    </>
  );
};

export default ScrollEffect;
