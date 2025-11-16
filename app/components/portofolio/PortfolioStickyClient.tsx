"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { Portofolio } from "@/lib/data";

interface PortfolioStickyClientProps {
  portfolios: Portofolio[];
}

export default function PortfolioStickyClient({
  portfolios,
}: PortfolioStickyClientProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Load background images
    const elements =
      document.querySelectorAll<HTMLElement>("[data-background]");
    elements.forEach((el) => {
      if (el.dataset.background) {
        el.style.backgroundImage = `url(${el.dataset.background})`;
      }
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Alternate layout pattern
  const getItemLayout = (index: number) => {
    const patterns = [
      { imageCol: 8, contentCol: 4, imageFirst: true },
      { imageCol: 8, contentCol: 4, imageFirst: false },
      { imageCol: 8, contentCol: 4, imageFirst: true },
      { imageCol: 8, contentCol: 4, imageFirst: false },
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="bg-blacked min-h-screen">
      {/* Header with Background Image */}
      <header
        className="relative bg-center bg-cover"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
        }}
        data-background="/assets/imgs/header/bg1.jpg"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-blacked/70 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1
              className="font-medium mb-4"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Portfolio.
            </h1>
            <div className="mt-4 text-lg">
              <Link href="/" className="hover:text-[#14cf93] transition-colors">
                Home
              </Link>
              <span className="mx-5">|</span>
              <span className="text-[#14cf93]">Portfolio</span>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Grid Section */}
      <section
        className="bg-[#1d1d1d]"
        style={{
          paddingTop: "60px",
          paddingBottom: "140px",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="portfolio-grid">
            {portfolios.map((portfolio, index) => {
              const layout = getItemLayout(index);

              return layout.imageFirst ? (
                <div key={portfolio.id} className="portfolio-row">
                  {/* Image */}
                  <div className={`portfolio-col-${layout.imageCol}`}>
                    <div className="portfolio-img">
                      <Link href={`/portofolio/${portfolio.slug}`}>
                        <Image
                          src={portfolio.image || "/placeholder.jpg"}
                          alt={portfolio.title}
                          width={1200}
                          height={100}
                          className="w-full h-[600px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`portfolio-col-${layout.contentCol}`}>
                    <div className="portfolio-content">
                      <div className="sticky-item">
                        <h6 className="text-sm uppercase tracking-widest opacity-70 mb-3 text-white">
                          {portfolio.category}
                        </h6>
                        <h5 className="text-3xl font-medium mb-4 text-white">
                          {portfolio.title}
                        </h5>
                        <p className="text-gray-300 leading-relaxed text-base">
                          {portfolio.content
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 150)}
                          ...
                        </p>
                        <Link
                          href={`/portofolio/${portfolio.slug}`}
                          className="inline-flex items-center mt-8 text-white hover:text-[#14cf93] transition-colors group"
                        >
                          <span className="text-sm uppercase tracking-widest">
                            View Project
                          </span>
                          <svg
                            className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={portfolio.id} className="portfolio-row">
                  {/* Content */}
                  <div className={`portfolio-col-${layout.contentCol}`}>
                    <div className="portfolio-content">
                      <div className="sticky-item">
                        <h6 className="text-sm uppercase tracking-widest opacity-70 mb-3 text-white">
                          {portfolio.category}
                        </h6>
                        <h5 className="text-3xl font-medium mb-4 text-white">
                          {portfolio.title}
                        </h5>
                        <p className="text-gray-300 leading-relaxed text-base">
                          {portfolio.content
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 150)}
                          ...
                        </p>
                        <Link
                          href={`/portofolio/${portfolio.slug}`}
                          className="inline-flex items-center mt-8 text-white hover:text-[#14cf93] transition-colors group"
                        >
                          <span className="text-sm uppercase tracking-widest">
                            View Project
                          </span>
                          <svg
                            className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`portfolio-col-${layout.imageCol}`}>
                    <div className="portfolio-img">
                      <Link href={`/portofolio/${portfolio.slug}`}>
                        <Image
                          src={portfolio.image || "/placeholder.jpg"}
                          alt={portfolio.title}
                          width={1200}
                          height={800}
                          className="w-full h-[600px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .portfolio-grid {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .portfolio-row {
          display: flex;
          flex-wrap: wrap;
          margin-left: -15px;
          margin-right: -15px;
          gap: 20px 0;
        }

        .portfolio-col-8,
        .portfolio-col-4 {
          padding-left: 15px;
          padding-right: 15px;
          width: 100%;
        }

        .portfolio-content {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          height: 100%;
          padding: 40px;
          display: flex;
          align-items: center;
        }

        .portfolio-img {
          overflow: hidden;
          border-radius: 10px;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .portfolio-col-8 {
            width: 66.666667%;
          }
          .portfolio-col-4 {
            width: 33.333333%;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .portfolio-col-8 {
            width: 66.666667%;
          }
          .portfolio-col-4 {
            width: 33.333333%;
          }
        }

        /* Mobile - Stack vertically */
        @media (max-width: 767px) {
          .portfolio-row {
            flex-direction: column;
          }

          .portfolio-col-8,
          .portfolio-col-4 {
            width: 100%;
          }

          .portfolio-content {
            padding: 30px 20px;
          }

          .portfolio-grid {
            gap: 50px;
          }
        }
      `}</style>
    </div>
  );
}
