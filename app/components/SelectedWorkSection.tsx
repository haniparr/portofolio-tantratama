// file: components/SelectedWorkSection.tsx

import React from "react";
import { projects } from "@/lib/data"; // Impor data dummy
import ProjectCard from "./ProjectCard";

const SelectedWorkSection: React.FC = () => {
  return (
    <section className=" py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl text-white font-medium">Selected Work</h2>
        </div>

        {/* Grid untuk menampilkan kartu proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
