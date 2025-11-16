// app/components/blog/Header.tsx
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header
      className="relative bg-center bg-cover"
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
      }}
      data-background="/assets/imgs/header/bg1.jpg"
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blacked/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h1
            className="font-medium mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Blogs.
          </h1>
          <div className="mt-4 text-lg">
            <Link href="/" className="hover:text-[#14cf93] transition-colors">
              Home
            </Link>
            <span className="mx-5">|</span>
            <span className="text-[#14cf93]">Blogs</span>
          </div>
        </div>
      </div>
    </header>
  );
}
