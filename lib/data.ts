import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

const ITEMS_PER_PAGE = 6;

export interface Project {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  slug: string; // Untuk URL halaman detail
}

export const projects: Project[] = [
  {
    id: 1,
    category: "WEB DESIGN",
    title: "Figma Digital Agency",
    imageUrl: "/assets/imgs/blog/b/1.jpg", // Ganti dengan path gambar Anda
    slug: "/work/figma-digital-agency",
  },
  {
    id: 2,
    category: "WEB DESIGN",
    title: "Space and Dinos",
    imageUrl: "/assets/imgs/blog/b/2.jpg", // Ganti dengan path gambar Anda
    slug: "/work/space-and-dinos",
  },
  {
    id: 3,
    category: "APP DESIGN",
    title: "Revenue Tri Year",
    imageUrl: "/assets/imgs/blog/b/3.jpg", // Ganti dengan path gambar Anda
    slug: "/work/revenue-tri-year",
  },
  {
    id: 4,
    category: "BRANDING",
    title: "NotReal Collab",
    imageUrl: "/assets/imgs/blog/b/4.jpg", // Menggunakan gambar yang sama untuk contoh
    slug: "/work/notreal-collab",
  },
  {
    id: 5,
    category: "DEVELOPMENT",
    title: "Laptop Mockup",
    imageUrl: "/assets/imgs/blog/b/5.jpg", // Menggunakan gambar yang sama untuk contoh
    slug: "/work/laptop-mockup",
  },
  {
    id: 6,
    category: "UI/UX",
    title: "Mobile Finance",
    imageUrl: "/assets/imgs/blog/b/6.jpg", // Menggunakan gambar yang sama untuk contoh
    slug: "/work/mobile-finance",
  },
];

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  tag: string;
  status: string;
  image: string;
  userId: string;
  user: string;
};

export type Portofolio = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  startDate: Date;
  category: string;
  client: string;
  tag: string;
  status: string;
  image: string;
  userId: string;
  user: string;
};

type BlogFromQuery = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  tag: string;
  status: string;
  image: string;
  userId: string;
  user: {
    name: string | null;
  };
};

// Tipe yang MEREPRESENTASIKAN HASIL DARI PRISMA SELECT UNTUK PORTOFOLIO
type PortofolioFromQuery = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  startDate: Date;
  category: string;
  client: string;
  tag: string;
  status: string;
  image: string;
  userId: string;
  user: {
    name: string | null;
  };
};

export const getBlogs = async (
  query: string,
  currentPage: number
): Promise<Blog[]> => {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        OR: [{ title: { contains: query, mode: "insensitive" } }],
        status: {
          equals: "Active",
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        tag: true,
        status: true,
        image: true,
        userId: true,
        user: { select: { name: true } },
      },
    });

    // SOLUSI FINAL: Gunakan tipe manual `BlogFromQuery`
    const formattedBlogs = blogs.map((blog: BlogFromQuery) => ({
      ...blog, // Sekarang `...blog` tahu semua properti yang harus disalin
      user: blog.user.name || "Unknown",
    }));

    return formattedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};

export const getPorto = async (
  query: string,
  currentPage: number
): Promise<Portofolio[]> => {
  try {
    const portos = await prisma.portofolio.findMany({
      where: {
        OR: [{ title: { contains: query, mode: "insensitive" } }],
        status: {
          equals: "Active",
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true,
        startDate: true,
        category: true,
        client: true,
        tag: true,
        status: true,
        image: true,
        userId: true,
        user: { select: { name: true } },
      },
    });

    // SOLUSI FINAL: Gunakan tipe manual `PortofolioFromQuery`
    const formattedPortos = portos.map((portofolio: PortofolioFromQuery) => ({
      ...portofolio, // Sekarang `...portofolio` tahu semua properti yang harus disalin
      user: portofolio.user.name || "Unknown",
    }));

    return formattedPortos;
  } catch (error) {
    console.error("Error fetching portofolios:", error);
    throw new Error("Failed to fetch portofolio data");
  }
};

export const getBlogsForDashboard = async (
  query: string,
  currentPage: number
): Promise<Blog[]> => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const blogs = await prisma.blog.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc", // Mengurutkan berdasarkan tanggal terbaru
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        tag: true, // Added missing field
        status: true,
        image: true,
        userId: true, // Added missing field
        user: {
          select: {
            name: true, // Ambil hanya nama dari relasi user
          },
        },
      },
    });
    const formattedBlogs = blogs.map((blog: BlogFromQuery) => ({
      ...blog,
      user: blog.user.name || "Unknown", // Jika user.name null, beri default 'Unknown'
    }));

    return formattedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};
export const getPortosForDashboard = async (
  query: string,
  currentPage: number
): Promise<Portofolio[]> => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const portos = await prisma.portofolio.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc", // Mengurutkan berdasarkan tanggal terbaru
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true,
        startDate: true,
        category: true,
        client: true,
        tag: true,
        status: true,
        image: true,
        userId: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    const formattedPortos = portos.map((portofolio: PortofolioFromQuery) => ({
      ...portofolio,
      user: portofolio.user.name || "Unknown", // Jika user.name null, beri default 'Unknown'
    }));

    return formattedPortos;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};

export const getBlogPages = async (query: string) => {
  try {
    const blogs = await prisma.blog.count({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(blogs) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};

export const getPortoPages = async (query: string) => {
  try {
    const portos = await prisma.portofolio.count({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(portos) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch portofolio data");
  }
};

export const getBlogsById = async (id: string) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            email: true, // You might want user info for editing
          },
        },
      },
    });
    return blog;
  } catch (error) {
    throw new Error("Failed to fetch blog data");
  }
};

export const getPortoById = async (id: string) => {
  try {
    const porto = await prisma.portofolio.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            email: true, //
          },
        },
      },
    });
    return porto;
  } catch (error) {
    throw new Error("Failed to fetch portofolio data");
  }
};

export const getImages = async () => {
  try {
    const result = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        image: true,
        createdAt: true,
      },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getImagesPorto = async () => {
  try {
    const result = await prisma.portofolio.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        image: true,
        createdAt: true,
      },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getLatestBlogs = async (limit: number): Promise<Blog[]> => {
  try {
    const blogs = await prisma.blog.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        status: "Active",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        tag: true,
        status: true,
        image: true,
        userId: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedBlogs = blogs.map((blog: BlogFromQuery) => ({
      ...blog,
      user: blog.user.name || "Unknown",
    }));

    return formattedBlogs;
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    throw new Error("Failed to fetch latest blog data");
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) {
      notFound();
    }

    return {
      ...blog,
      user: blog.user.name || "Unknown",
    };
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog data.");
  }
};
export const getPortoBySlug = async (slug: string) => {
  try {
    const porto = await prisma.portofolio.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!porto) {
      notFound();
    }

    return {
      ...porto,
      user: porto.user.name || "Unknown",
    };
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog data.");
  }
};

export const getCategoriesWithCount = async () => {
  try {
    const categories = await prisma.blog.groupBy({
      by: ["category"],
      _count: {
        category: true,
      },
      where: {
        status: {
          equals: "Active",
          mode: "insensitive",
        },
      },
    });
    return categories.map((cat) => ({
      name: cat.category,
      count: cat._count.category,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories.");
  }
};

// Fungsi untuk mengambil semua tag unik
export const getUniqueTags = async () => {
  try {
    const tags = await prisma.blog.findMany({
      where: {
        status: {
          equals: "Active",
          mode: "insensitive",
        },
      },
      select: {
        tag: true,
      },
      distinct: ["tag"],
    });
    return tags.map((t) => t.tag);
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw new Error("Failed to fetch tags.");
  }
};
