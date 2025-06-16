import Image from "next/image";
import Header from "./components/Header";
import UnicornStudioDynamic from "@/app/components/UnicornStudioDynamic";

export default function Home() {
  return (
    <div className="bg-blacked">
      {/* <Header /> */}
      <UnicornStudioDynamic
        projectId="B1zPyaKyL5aj5vv0Hagn"
        width="100%"
        height="100vh"
      />
      <main className=""></main>
    </div>
  );
}
