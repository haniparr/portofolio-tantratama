// lib/definitions.ts

// Blog type definition
export interface Blog {
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
  user: string; // This is the user's name after formatting
}

// Portfolio type definition
export interface Portofolio {
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
  user: string; // This is the user's name after formatting
}

// Project type definition (for portfolio/work showcase)
export interface Project {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  slug: string;
}

// Blog from Prisma query (before formatting)
export type BlogFromQuery = {
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

// Portfolio from Prisma query (before formatting)
export type PortofolioFromQuery = {
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

// Page props interfaces
export interface BlogPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
    tag?: string;
  }>;
}

export interface PortfolioPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
    tag?: string;
  }>;
}

// Category with count
export interface CategoryWithCount {
  name: string;
  count: number;
}

// Example image type (for demos)
export interface ExampleImage {
  url: string;
  alt?: string;
  id: number;
}

// Form state types
export interface RegisterFormState {
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
    ConfirmPassword?: string[];
  };
}

export interface SignInFormState {
  message?: string;
  error?: {
    email?: string[];
    password?: string[];
  };
}

export interface BlogFormState {
  message?: string;
  error?: {
    title?: string[];
    content?: string[];
    image?: string[];
    category?: string[];
    tag?: string[];
    status?: string[];
  };
}

export interface PortfolioFormState {
  message?: string;
  error?: {
    title?: string[];
    content?: string[];
    image?: string[];
    category?: string[];
    tag?: string[];
    client?: string[];
    startDate?: string[];
    status?: string[];
  };
}

// User type
export interface User {
  id: string;
  name: string | null;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Params type for dynamic routes
export interface BlogParams {
  params: Promise<{ slug: string }>;
}

export interface PortfolioParams {
  params: Promise<{ slug: string }>;
}

// Search params type
export interface SearchParams {
  query?: string;
  page?: string;
  category?: string;
  tag?: string;
}

// Pagination info
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}
