import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper"; // ✅ Import tipe Swiper

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      desc: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done",
      name: "Adam Beckley",
      subName: "FOUNDER & CEO",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      desc: "Working with this team has been an absolute game-changer for our business. Their attention to detail and creative solutions exceeded all our expectations.",
      name: "Sarah Johnson",
      subName: "MARKETING DIRECTOR",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      desc: "Professional, reliable, and innovative. They exceeded our expectations in every way possible and delivered results that transformed our business operations.",
      name: "Michael Chen",
      subName: "PRODUCT MANAGER",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      desc: "Outstanding work and great communication throughout the entire process. The team's expertise and dedication made all the difference in our project success.",
      name: "Emily Davis",
      subName: "CREATIVE DIRECTOR",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <section className="bg-gray-700/5 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-0 w-32 h-32 border border-gray-700 rounded-full opacity-30 transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-gray-700 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-gray-700 rounded-full opacity-15"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Section - Header */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h6 className="text-green-400 text-sm font-medium uppercase tracking-wider mb-4">
                TESTIMONIALS
              </h6>
              <h3 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
                What People{" "}
                <span className="font-light text-gray-300">Say?</span>
              </h3>
            </div>
          </div>

          {/* Right Section - Testimonials Swiper */}
          <div className="lg:col-span-8 relative">
            <div className="testimonial-swiper">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                speed={1000}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                className="h-full"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="px-6">
                      <div className="space-y-8">
                        {/* Quote Content */}
                        <div className="relative">
                          {/* Quote SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="48"
                            viewBox="0 0 256.721 208.227"
                            className="mb-6 opacity-20 text-gray-400"
                          >
                            <path
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                            />
                          </svg>

                          <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 font-light">
                            {item.desc}
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center pt-8 mt-8 border-t border-gray-600">
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-6">
                            <h5 className="text-xl font-medium text-white mb-1">
                              {item.name}
                            </h5>
                            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
                              {item.subName}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-6 flex space-x-3 z-20">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                disabled={!swiperInstance}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 hover:border-gray-400 transition-colors duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                disabled={!swiperInstance}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 hover:border-gray-400 transition-colors duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-end mt-6 space-x-2"></div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Line */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="opacity-10">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-32 text-gray-600"
            preserveAspectRatio="none"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: rgb(75 85 99);
          border-radius: 50%;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: rgb(34 197 94);
          transform: scale(1.3);
        }

        .testimonial-swiper .swiper-slide {
          height: auto;
          min-height: 400px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
