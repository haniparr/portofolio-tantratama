// app/page.tsx
import Header from "./components/Header";
import { Carousel, Card } from "@/app/components/apple-cards-carousel";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";
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
        // Hapus properti `content` karena Card tidak lagi menampilkannya
        // content: <DummyContent />,
      }}
      index={index}
    />
  ));

  return (
    <div className="bg-blacked">
      <Header />
      <ScrollEffect />
      <ClientsCarousel />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 max-w-7xl mx-auto mb-40 mt-5">
        <div className="">
          <p className="text-white font-medium text-4xl ">
            Ready to cultivate a new brand from the ground up, or tend to the
            one you’ve already grown? Let’s make something beautiful flourish.
          </p>
          <div className="">
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
      <div className="max-w-7xl mx-auto h-full py-20  overflow-hidden">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white text-center">
          Selected Work
        </h2>
        {/* Sekarang, kirim variabel `cards` yang isinya data portofolio */}
        <Carousel items={cards} />
      </div>
      <Testimonials />
      <BlogListWrapper />
      <Footer />

      <main className=""></main>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
// Hapus `const data = [...]` di sini karena kita sudah ambil dari database
