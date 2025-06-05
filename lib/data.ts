import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 6;

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

export const getBlogs = async (
  query: string,
  currentPage: number
): Promise<Blog[]> => {
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const blogs = await prisma.blog.findMany({
      // skip: offset,
      // take: ITEMS_PER_PAGE,
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
    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      user: blog.user.name || "Unknown", // Jika user.name null, beri default 'Unknown'
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
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const portos = await prisma.portofolio.findMany({
      // skip: offset,
      // take: ITEMS_PER_PAGE,
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
    const formattedPortos = portos.map((portofolio) => ({
      ...portofolio,
      user: portofolio.user.name || "Unknown", // Jika user.name null, beri default 'Unknown'
    }));

    return formattedPortos;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
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
    const formattedBlogs = blogs.map((blog) => ({
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
    const formattedPortos = portos.map((portofolio) => ({
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
