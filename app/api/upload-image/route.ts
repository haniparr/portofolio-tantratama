// app/api/upload-image/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

interface UploadResponse {
  success: boolean;
  url?: string;
  fileName?: string;
  error?: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<UploadResponse>> {
  try {
    const data = await request.formData();
    const file = data.get("image") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: "No file uploaded",
        },
        { status: 400 }
      );
    }

    // Validasi tipe file
    const allowedTypes: string[] = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid file type. Only images are allowed.",
        },
        { status: 400 }
      );
    }

    // Validasi ukuran file (maksimal 5MB)
    const maxSize: number = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          error: "File too large. Maximum size is 5MB.",
        },
        { status: 400 }
      );
    }

    // Konversi file ke buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Buat nama file unik
    const timestamp: number = Date.now();
    const randomString: string = Math.random().toString(36).substring(2, 15);
    const fileExtension: string = path.extname(file.name);
    const fileName: string = `${timestamp}_${randomString}${fileExtension}`;

    // Tentukan path untuk menyimpan file
    const uploadDir: string = path.join(
      process.cwd(),
      "public",
      "uploads",
      "images"
    );
    const filePath: string = path.join(uploadDir, fileName);

    // Pastikan direktori upload ada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Simpan file
    await writeFile(filePath, buffer);

    // Return URL yang bisa diakses
    const imageUrl: string = `/uploads/images/${fileName}`;

    return NextResponse.json({
      success: true,
      url: imageUrl,
      fileName: fileName,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to upload image",
      },
      { status: 500 }
    );
  }
}
