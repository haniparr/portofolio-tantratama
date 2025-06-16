import Image from "next/image";
import Header from "./components/Header";
import UnicornStudioDynamic from "@/app/components/UnicornStudioDynamic";
import Floating from "@/fancy/components/image/parallax-floating";
import { FloatingElement } from "@/fancy/components/image/parallax-floating";
import Preview from "./components/parallax-floating-demo";
import ScrollEffect from "./components/scrollRevealEffect/ScrollEffect";

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
      <div className=" relative">
        <Preview />
      </div>

      <main className=""></main>
    </div>
  );
}
