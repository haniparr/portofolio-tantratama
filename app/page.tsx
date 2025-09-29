// app/page.tsx
import Header from "./components/Header";
import { Carousel, Card } from "@/app/components/apple-cards-carousel";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";
import ScrollReveal from "./components/ScrollReveal";
import ClientsCarousel from "./components/Client";
import RiveButton from "@/app/components/RiveComponent";
import Testimonials from "./components/Testimonial";
import BlogListWrapper from "./components/blog/BlogListWrapper";
import Footer from "./components/Footer";
import SelectedWorkSection from "./components/SelectedWorkSection";
import { getPorto } from "@/lib/data"; // Import fungsi getPorto

export default async function Home() {
  const allPortos = await getPorto("", 1);
  const cards = allPortos.map((card, index) => (
    <Card
      key={card.id}
      card={{
        src: card.image,
        category: card.category,
        title: card.title,
        slug: card.slug, // Kirim properti slug di sini
      }}
      index={index}
    />
  ));

  return (
    <div className="bg-blacked overflow-x-hidden">
      {" "}
      {/* Tambahkan overflow-x-hidden di sini */}
      <Header />
      <div className="bg-amber-50">
        <RiveButton />
      </div>
      <ScrollEffect />
      <ScrollReveal direction="up" delay={0.1}>
        <ClientsCarousel />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        {/* Penyesuaian padding dan margin untuk mobile */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 max-w-7xl mx-auto my-20 px-4 md:px-8 lg:my-40">
          <div className="">
            {/* Ukuran font responsif */}
            <p className="text-white font-medium text-3xl md:text-4xl mb-10 ">
              Ready to cultivate a new brand from the ground up, or tend to the
              one you’ve already grown? Let’s make something beautiful flourish.
            </p>
            <RiveButton />
            <div className=" bg-amber-100"></div>
          </div>
          <div className="">
            {/* Ukuran font responsif */}
            <p className="text-white font-light text-xl md:text-2xl">
              From startups launching their first app to enterprises reimagining
              their brand, and for agencies seeking a creative partner—I believe
              every design challenge is an opportunity to create something
              beautiful.
            </p>
          </div>
        </div>
      </ScrollReveal>
      <div className=" relative">
        <Preview />
      </div>
      <ScrollReveal direction="up" delay={0.1}>
        {/* Penyesuaian padding untuk mobile */}
        <div className="max-w-7xl mx-auto h-full py-10 md:py-20 px-4 overflow-hidden">
          <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-white text-center">
            Selected Work
          </h2>
          <Carousel items={cards} />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      <BlogListWrapper />
      <Footer />
      <main className=""></main>
    </div>
  );
}
