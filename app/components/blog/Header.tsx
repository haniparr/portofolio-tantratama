import React from "react";

// Ini menjadi Server Component sederhana
const BlogHeader = () => {
  return (
    <header className="page-header bg-img bg-center py-24 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-white">
            Blog <span className="font-extralight">Grid 3</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
