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
      scrollRevealRef.current = setupScrollReveal(
        scrollRevealWrapperRef as React.RefObject<HTMLDivElement>,
        scrollRevealVideoRef as React.RefObject<HTMLVideoElement>
      );

      setTimeout(() => {
        if (scrollRevealRef.current) {
          scrollRevealRef.current.initScrollReveal();
          setIsScrollRevealInitialized(true);
        }
      }, 100);
    };

    initializeScrollReveal();

    return () => {
      if (scrollRevealRef.current) {
        scrollRevealRef.current.cleanupScrollReveal();
      }
    };
  }, []);

  return (
    <>
      <div
        className="max-w-container-xl mx-auto"
        style={{
          padding: "clamp(2.5rem, 5vw, 5rem) clamp(1rem, 4vw, 4rem)",
        }}
      >
        <div className="w-full">
          <div className="">
            <div
              className="video scroll-reveal-wrapper relative z-20 w-full"
              ref={scrollRevealWrapperRef}
              style={{ height: "clamp(400px, 45vw, 728px)" }}
            >
              <video
                ref={scrollRevealVideoRef}
                className="scroll-reveal-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/assets/videos/vid.mp4" type="video/mp4" />
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
