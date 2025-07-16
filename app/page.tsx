import Header from "./components/Header";
// import Floating from "@/fancy/components/image/parallax-floating";
// import { FloatingElement } from "@/fancy/components/image/parallax-floating";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";
import ClientsCarousel from "./components/Client";
import RiveButton from "@/app/components/RiveComponent";
import Testimonials from "./components/Testimonial";
import BlogListWrapper from "./components/blog/BlogListWrapper";
import Footer from "./components/Footer";
import SelectedWorkSection from "./components/SelectedWorkSection";

export default function Home() {
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
          <p className="text-white font-medium text-4xl ">
            Ready to cultivate a new brand from the ground up, or tend to the
            one you’ve already grown? Let’s make something beautiful flourish.
          </p>
          <div className="bg-amber-50">
            <RiveButton />
          </div>
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

      <SelectedWorkSection />
      <Testimonials />
      <BlogListWrapper />
      <Footer />

      <main className=""></main>
    </div>
  );
}
