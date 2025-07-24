import Header from "./components/Header";
// import Floating from "@/fancy/components/image/parallax-floating";
// import { FloatingElement } from "@/fancy/components/image/parallax-floating";
import { Carousel, Card } from "@/app/components/apple-cards-carousel";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";
import ClientsCarousel from "./components/Client";
import RiveButton from "@/app/components/RiveComponent";
import Testimonials from "./components/Testimonial";
import BlogListWrapper from "./components/blog/BlogListWrapper";
import Footer from "./components/Footer";
import SelectedWorkSection from "./components/SelectedWorkSection";

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
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
      <div className="max-w-7xl mx-auto h-full py-20  overflow-hidden">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white text-center">
          Selected Work
        </h2>
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

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
