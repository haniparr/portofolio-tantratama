import { object, string, z } from "zod";

export const SignInSchema = object({
  email: string().email("Invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 Character"),
  email: string().email("Invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path: ["ConfirmPassword"],
});

export const UploadSchema = object({
  title: string().min(6, "Title must be at least 6 characters"),
  content: string().min(150, "Content must be at least 150 characters"),
  image: z.custom<File>((file) => file instanceof File && file.size > 0, {
    message: "Image is required",
  }),
  category: string().nonempty("Category is required"),
  status: string().nonempty("Status is required"),
});

export const EditSchema = object({
  title: string().min(6, "Title must be at least 6 characters"),
  content: string().min(150, "Content must be at least 150 characters"),
  image: z
    .custom<File>(
      (file) => {
        if (!(file instanceof File)) return true; // Jika tidak ada file baru, validasi berhasil
        const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedMimeTypes.includes(file.type)) {
          return false; // Hanya izinkan file dengan tipe tertentu
        }
        if (file.size > 4 * 1024 * 1024) {
          return false; // Batas ukuran maksimum 4MB
        }
        return true;
      },
      {
        message: "Invalid file. Only JPG, PNG, or GIF under 4MB are allowed.",
      }
    )
    .optional(), // Gambar opsional untuk pengeditan
  category: string().nonempty("Category is required"),
  status: string().nonempty("Status is required"),
});
