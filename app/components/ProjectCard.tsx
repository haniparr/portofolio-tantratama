// file: components/ProjectCard.tsx

import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/lib/data"; // Impor tipe data

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    // Seluruh kartu adalah link yang bisa diklik
    <Link href={project.slug} className="group block">
      <div className="overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-auto object-cover aspect-[1/1] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm text-gray-400">{project.category}</p>
          <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full transform transition-transform duration-300 group-hover:rotate-45">
          <FiArrowUpRight className="text-white text-xl" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
