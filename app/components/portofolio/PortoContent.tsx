import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { Portofolio } from "@/lib/data"; // Tipe Blog lengkap setelah diformat

const PortoContent = ({ porto }: { porto: Portofolio }) => {
  return (
    <div className="main-post">
      <article>
        {/* Konten dari CKEditor dirender di sini */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-h4:text-white"
          dangerouslySetInnerHTML={{ __html: porto.content }}
        />
      </article>

      {/* Info Tags & Share */}
      <div className="flex flex-wrap items-center justify-between pt-8 mt-12 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Tags:</span>
          {porto.tag.split(",").map((tag) => (
            <a
              key={tag}
              href="#"
              className="px-3 py-1 text-sm bg-gray-800 rounded-full hover:bg-gray-700"
            >
              {tag.trim()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortoContent;
