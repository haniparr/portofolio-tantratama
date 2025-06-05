"use server";
import { z } from "zod";
import { put, del } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { access } from "fs";
import { getBlogsById, getPortoById } from "./data";
import { RegisterSchema, SignInSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { signIn } from "../auth";
import { AuthError } from "next-auth";
import { auth } from "../auth";
import { generateSlug } from "../lib/utils";

const slug = generateSlug("Judul Blog Baru");

const fileSchema = z.custom<File>(
  (file) => {
    // Check if it's a File-like object with the required properties
    if (!file || typeof file !== "object") return false;

    // Check for required File properties
    return (
      "name" in file &&
      "size" in file &&
      "type" in file &&
      typeof file.name === "string" &&
      typeof file.size === "number" &&
      typeof file.type === "string"
    );
  },
  { message: "Invalid file object" }
);

const UploadBlogSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: fileSchema
    .refine((file) => file.size > 0, { message: "Image is Required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
  category: z.string().nonempty({ message: "Category is required" }),
  tag: z.string().nonempty({ message: "Tag is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

const EditBlogSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: fileSchema
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    })
    .optional(),
  category: z.string().nonempty({ message: "Category is required" }),
  tag: z.string().nonempty({ message: "Tag is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

const UploadPortoSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: fileSchema
    .refine((file) => file.size > 0, { message: "Image is Required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
  category: z.string().nonempty({ message: "Category is required" }),
  tag: z.string().nonempty({ message: "Tag is required" }),
  client: z.string().nonempty({ message: "Client is required" }),
  startDate: z.string().nonempty({ message: "Start Date is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

const EditPortoSchema = z.object({
  title: z.string().min(6),
  content: z.string().min(150),
  image: fileSchema
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only Images Are Allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    })
    .optional(),
  category: z.string().nonempty({ message: "Category is required" }),
  tag: z.string().nonempty({ message: "Tag is required" }),
  client: z.string().nonempty({ message: "Client is required" }),
  startDate: z.string().nonempty({ message: "Start Date is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});

export const saveBlog = async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  if (!session || !session.user) {
    return { message: "You must be logged in to create a post." };
  }

  console.log(formData);

  // Extract and validate form data
  const formEntries = Object.fromEntries(formData.entries());

  // Handle file separately to ensure proper type
  const imageFile = formData.get("image") as File;
  const validationData = {
    ...formEntries,
    image: imageFile,
  };

  const validatedFields = UploadBlogSchema.safeParse(validationData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content, category, tag, status, image } = validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    console.log("Trying to create blog post...");
    await prisma.blog.create({
      data: {
        title,
        slug: generateSlug(title),
        content,
        category,
        tag,
        status,
        image: url,
        userId: session.user.id as string,
      },
    });
    console.log("Blog post created");
  } catch (error) {
    console.error("Prisma Error:", error);
    return { message: "Failed to create data" };
  }
  revalidatePath("/dashboard/blog/blog-list");
  redirect("/dashboard/blog/blog-list");
};

export const savePorto = async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  const startDated = formData.get("startDate");
  const startDateFormatted = startDated
    ? new Date(startDated as string).toISOString()
    : null;

  if (!session || !session.user) {
    return { message: "You must be logged in to create a post." };
  }

  console.log(formData);

  // Extract and validate form data
  const formEntries = Object.fromEntries(formData.entries());

  // Handle file separately to ensure proper type
  const imageFile = formData.get("image") as File;
  const validationData = {
    ...formEntries,
    image: imageFile,
  };

  const validatedFields = UploadPortoSchema.safeParse(validationData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content, category, tag, client, startDate, status, image } =
    validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    console.log("Trying to create porto post...");
    await prisma.portofolio.create({
      data: {
        title,
        slug: generateSlug(title),
        startDate: startDateFormatted,
        content,
        category,
        client,
        tag,
        status,
        image: url,
        userId: session.user.id as string,
      },
    });
    console.log("Portofolio post created");
  } catch (error) {
    console.error("Prisma Error:", error);
    return { message: "Failed to create data" };
  }
  revalidatePath("/dashboard/portofolio/portofolio-list");
  redirect("/dashboard/portofolio/portofolio-list");
};

export const updateBlog = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  console.log(formData);

  // Extract and validate form data
  const formEntries = Object.fromEntries(formData.entries());

  // Handle file separately to ensure proper type
  const imageFile = formData.get("image") as File;
  const validationData = {
    ...formEntries,
    image: imageFile,
  };

  const validatedFields = EditBlogSchema.safeParse(validationData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getBlogsById(id);
  if (!data) return { message: "No Data Found" };

  const { title, content, category, tag, status, image } = validatedFields.data; // Added tag destructuring
  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  try {
    console.log("Trying to update blog post...");
    await prisma.blog.update({
      data: {
        title,
        slug: generateSlug(title), // Update slug berdasarkan judul baru
        content,
        category,
        tag, // Added tag field
        status,
        image: imagePath,
        updatedAt: new Date(), // Explicitly update the updatedAt field
      },
      where: { id },
    });

    console.log("Blog post updated");
  } catch (error) {
    console.error("Prisma Error:", error);
    return { message: "Failed to update data" };
  }
  revalidatePath("/dashboard/blog/blog-list");
  redirect("/dashboard/blog/blog-list");
};

export const updatePorto = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  console.log(formData);

  // Extract and validate form data
  const formEntries = Object.fromEntries(formData.entries());

  // Handle file separately to ensure proper type
  const imageFile = formData.get("image") as File;
  const validationData = {
    ...formEntries,
    image: imageFile,
  };

  const validatedFields = EditPortoSchema.safeParse(validationData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getPortoById(id);
  if (!data) return { message: "No Data Found" };

  const { title, content, category, tag, client, startDate, status, image } =
    validatedFields.data;

  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  let formattedStartDate: Date;

  if (typeof startDate === "string") {
    // If startDate is a string, convert to Date
    formattedStartDate = new Date(startDate);

    // Validate the date
    if (isNaN(formattedStartDate.getTime())) {
      return {
        error: { startDate: ["Invalid date format"] },
      };
    }
  } else {
    // If it's already a Date object
    formattedStartDate = startDate;
  }

  try {
    console.log("Trying to update blog post...");
    await prisma.portofolio.update({
      data: {
        title,
        slug: generateSlug(title),
        content,
        category,
        tag,
        status,
        image: imagePath,
        client,
        startDate: formattedStartDate,
      },
      where: { id },
    });

    console.log("Portofolio post updated");
  } catch (error) {
    console.error("Prisma Error:", error);
    return { message: "Failed to update data" };
  }
  revalidatePath("/dashboard/portofolio/portofolio-list");
  redirect("/dashboard/portofolio/portofolio-list");
};

export const deleteBlog = async (id: string) => {
  const data = await getBlogsById(id);
  if (!data) {
    console.error("Blog post not found");
    throw new Error("Blog post not found");
  }

  // Delete the image first
  await del(data.image);

  try {
    await prisma.blog.delete({
      where: { id },
    });
    console.log("Blog post deleted");
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to delete blog post");
  }

  revalidatePath("/dashboard/blog/blog-list");
};

export const deletePorto = async (id: string) => {
  const data = await getPortoById(id);
  if (!data) {
    console.error("Portofolio post not found");
    throw new Error("Portofolio post not found");
  }

  // Delete the image first
  await del(data.image);

  try {
    await prisma.portofolio.delete({
      where: { id },
    });
    console.log("Portofolio post deleted");
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to delete Portofolio post");
  }

  revalidatePath("/dashboard/blog/blog-list");
};

interface RegisterFormState {
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
    ConfirmPassword?: string[];
  };
}

interface SignInFormState {
  message?: string;
  error?: {
    email?: string[];
    password?: string[];
  };
}

export const signUpCredentials = async (
  prevState: RegisterFormState | null,
  formData: FormData
): Promise<RegisterFormState> => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to register user" };
  }
  redirect("/login");
};

export const signInCredentials = async (
  prevState: SignInFormState | null,
  formData: FormData
): Promise<SignInFormState> => {
  const validatedFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials." };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw error;
  }
};
