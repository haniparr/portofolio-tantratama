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
import ViewportDebugger from "./components/ViewportDebugger";
import { getPorto } from "@/lib/data";

export default async function Home() {
  const allPortos = await getPorto("", 1);
  const cards = allPortos.map((card, index) => (
    <Card
      key={card.id}
      card={{
        src: card.image,
        category: card.category,
        title: card.title,
        slug: card.slug,
      }}
      index={index}
    />
  ));

  return (
    <div className="bg-blacked overflow-x-hidden">
      {/* Debug Tool - Hapus atau comment jika sudah selesai testing */}
      {/* <ViewportDebugger /> */}

      <Header />
      <ScrollEffect />

      <ScrollReveal direction="up" delay={0.1}>
        <ClientsCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        {/* Container dengan aggressive scaling */}
        <div
          className="max-w-container-2xl mx-auto"
          style={{
            padding: "clamp(5rem, 10vw, 12rem) clamp(1rem, 4vw, 6rem)",
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: "clamp(2rem, 5vw, 6rem)" }}
          >
            <div>
              <p
                className="text-white font-medium"
                style={{
                  fontSize: "clamp(1.875rem, 3vw, 4rem)",
                  marginBottom: "clamp(2.5rem, 4vw, 3rem)",
                }}
              >
                Ready to cultivate a new brand from the ground up, or tend to
                the one you've already grown? Let's make something beautiful
                flourish.
              </p>
              <RiveButton />
            </div>
            <div>
              <p
                className="text-white font-light"
                style={{ fontSize: "clamp(1.25rem, 2vw, 2.5rem)" }}
              >
                From startups launching their first app to enterprises
                reimagining their brand, and for agencies seeking a creative
                partner—I believe every design challenge is an opportunity to
                create something beautiful.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="relative">
        <Preview />
      </div>

      <ScrollReveal direction="up" delay={0.1}>
        {/* Selected Work Section */}
        <div
          className="max-w-container-2xl mx-auto h-full overflow-hidden"
          style={{
            padding: "clamp(2.5rem, 6vw, 6rem) clamp(1rem, 4vw, 6rem)",
          }}
        >
          <h2
            className="max-w-7xl pl-4 mx-auto font-bold text-white text-center"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 4.5rem)",
              marginBottom: "clamp(2rem, 4vw, 3rem)",
            }}
          >
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
    </div>
  );
}
