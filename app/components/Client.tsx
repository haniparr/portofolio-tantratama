"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample client data - ganti dengan data Anda
const clientsData = [
  "/assets/imgs/clients/1.webp",
  "/assets/imgs/clients/2.webp",
  "/assets/imgs/clients/3.webp",
  "/assets/imgs/clients/4.webp",
  "/assets/imgs/clients/5.webp",
  "/assets/imgs/clients/6.webp",
  "/assets/imgs/clients/7.webp",
];

interface ClientsCarouselProps {
  data?: string[];
  title?: string;
  subtitle?: string;
}

export default function ClientsCarousel({
  data = clientsData,
  title = "More than 200+ companies trusted us worldwide",
  subtitle = "More than",
}: ClientsCarouselProps) {
  const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <div className=" flex items-center justify-center">
            <h6 className="text-3xl font-medium text-white">
              Successful Partnerships:
            </h6>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="clients-carousel ">
          <Swiper {...swiperOptions} className="!overflow-hidden">
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4">
                  <div className="w-40 h-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <Image
                      src={item}
                      alt={`Client ${index + 1}`}
                      width={300}
                      height={300}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback jika gambar tidak ditemukan
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNS44MzMzIDM1LjgzMzNINjQuMTY2N1Y2NC4xNjY3SDM1LjgzMzNWMzUuODMzM1oiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=";
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
