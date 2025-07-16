import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { Blog } from "@/lib/data"; // Tipe Blog lengkap setelah diformat

const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="main-post">
      <article>
        {/* Konten dari CKEditor dirender di sini */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-h4:text-white"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Info Tags & Share */}
      <div className="flex flex-wrap items-center justify-between pt-8 mt-12 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Tags:</span>
          {blog.tag.split(",").map((tag) => (
            <a
              key={tag}
              href="#"
              className="px-3 py-1 text-sm bg-gray-800 rounded-full hover:bg-gray-700"
            >
              {tag.trim()}
            </a>
          ))}
        </div>
        {/* Anda bisa menambahkan ikon share di sini jika mau */}
      </div>

      {/* Info Author */}
      <div className="mt-12 p-6 bg-gray-900/50 rounded-lg flex items-center gap-6">
        <Image
          src="/assets/imgs/blog/author.png" // Ganti dengan gambar author dinamis jika ada
          alt={blog.user}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h6 className="font-bold text-xl mb-1">{blog.user}</h6>
          <p className="text-sm text-gray-400">
            Penulis post ini. Memiliki keahlian di bidang terkait untuk
            memberikan informasi yang akurat dan bermanfaat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
