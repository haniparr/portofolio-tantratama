"use client";

import Image from "next/image";
import Header from "./components/Header";
import UnicornStudioDynamic from "@/app/components/UnicornStudioDynamic";
import Floating from "@/fancy/components/image/parallax-floating";
import { FloatingElement } from "@/fancy/components/image/parallax-floating";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";
import ClientsCarousel from "./components/Client";
import RiveButton from "@/app/components/RiveComponent";
import Testimonials from "./components/Testimonial";
import BlogListHalf from "./components/blog/blog-list";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Tambahkan logika onClick Anda di sini
  };
  return (
    <div className="bg-blacked">
      <Header />
      <ScrollEffect />
      {/* <UnicornStudioDynamic
        projectId="B1zPyaKyL5aj5vv0Hagn"
        width="100%"
        height="100vh"
      /> */}
      <ClientsCarousel />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 max-w-7xl mx-auto mb-40">
        <div className="">
          <p className="text-white font-medium text-4xl">
            Ready to cultivate a new brand from the ground up, or tend to the
            one you’ve already grown? Let’s make something beautiful flourish.
          </p>
        </div>
        <div className="">
          <p className="text-white font-light text-2xl">
            From startups launching their first app to enterprises reimagining
            their brand, and for agencies seeking a creative partner—I believe
            every design challenge is an opportunity to create something
            beautiful.
          </p>
        </div>
      </div>
      <div className=" relative">
        <Preview />
      </div>

      <Testimonials />
      <BlogListHalf />

      {/* <div className="min-h-screen bg-white">
        <div className="min-h-screen bg-gray-50">
          
          <section className="py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Welcome to Our Site</h1>

              

              <RiveButton
                src="/animations/button.riv" // Path ke file .riv Anda
                stateMachineName="Button State Machine" // Nama state machine di Rive
                onClick={handleButtonClick}
                className="my-4"
              />
              <p className="text-xl text-gray-600">
                Experience the future with our interactive animations
              </p>
            </div>
          </section>
        </div>
      </div> */}

      <main className=""></main>
    </div>
  );
}
