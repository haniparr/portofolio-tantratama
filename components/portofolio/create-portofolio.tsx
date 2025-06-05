"use client";
import React, { useState, useEffect } from "react";
import { savePorto } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "../button";
import type { BlogFormState, CKEditorConfig } from "@/types/blog";

// Type definitions
interface UploadAdapter {
  upload(): Promise<{ default: string }>;
  abort(): void;
}

interface FileLoader {
  file: Promise<File>;
}

interface Editor {
  plugins: {
    get(name: string): {
      createUploadAdapter: (loader: FileLoader) => UploadAdapter;
    };
  };
}

// Dynamically import CKEditor to ensure it's only loaded on the client-side
let CKEditor: any;
let ClassicEditor: any;

if (typeof window !== "undefined") {
  CKEditor = require("@ckeditor/ckeditor5-react").CKEditor;
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
}

// Custom upload adapter for CKEditor
class MyUploadAdapter implements UploadAdapter {
  private loader: FileLoader;

  constructor(loader: FileLoader) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file: File) => {
      return new Promise<{ default: string }>((resolve, reject) => {
        const formData = new FormData();
        formData.append("image", file);

        // Upload ke server Anda
        fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data: { success: boolean; url?: string; error?: string }) => {
            if (data.success && data.url) {
              resolve({
                default: data.url, // URL gambar yang dikembalikan server
              });
            } else {
              reject(new Error(data.error || "Upload failed"));
            }
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    });
  }

  abort(): void {
    // Handle abort jika diperlukan
  }
}

// Plugin function untuk upload adapter
function MyCustomUploadAdapterPlugin(editor: Editor): void {
  editor.plugins.get("FileRepository").createUploadAdapter = (
    loader: FileLoader
  ) => {
    return new MyUploadAdapter(loader);
  };
}

const CreatePorto: React.FC = () => {
  const [state, formAction] = useFormState<BlogFormState | null, FormData>(
    savePorto,
    null
  );
  const [editorContent, setEditorContent] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function untuk menangani error
  const getErrorMessage = (error: string | string[] | undefined): string => {
    if (!error) return "";
    return Array.isArray(error) ? error.join(", ") : error;
  };

  // Konfigurasi CKEditor
  const editorConfiguration: CKEditorConfig = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload", // Tambahkan button upload gambar
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };

  return (
    <div className="container mt-10">
      <h1 className="text-center font-bold text-3xl uppercase">
        Add Portofolio
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Add a new portofolio by filling out the form below.
      </p>
      <form action={formAction}>
        <div className="">
          <label className="mb-5">Judul</label>
          <input
            type="text"
            name="title"
            placeholder="Judul Postingan"
            className="border w-full px-5 py-3 focus:outline-bg_vidi rounded-md"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {getErrorMessage(state?.error?.title)}
            </p>
          </div>
        </div>

        {/* Input Client */}
        <div className="mt-5">
          <label className="mb-5">Client</label>
          <input
            type="text"
            name="client"
            placeholder="Nama Client"
            className="border w-full px-5 py-3 focus:outline-bg_vidi rounded-md"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {getErrorMessage(state?.error?.client)}
            </p>
          </div>
        </div>

        {/* Input Start Date */}
        <div className="mt-5">
          <label className="mb-5">Start Date</label>
          <input
            type="date"
            name="startDate"
            className="border w-full px-5 py-3 focus:outline-bg_vidi rounded-md"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {getErrorMessage(state?.error?.startDate)}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p>
            <label className="mb-2">Konten</label>
          </p>

          {isClient && CKEditor && ClassicEditor ? (
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              data={editorContent}
              onChange={(event: any, editor: any) => {
                const data: string = editor.getData();
                setEditorContent(data);
              }}
              onReady={(editor: any) => {
                console.log("Editor is ready to use!", editor);
              }}
              onError={(
                error: any,
                { willEditorRestart }: { willEditorRestart: boolean }
              ) => {
                console.error("Editor error:", error);
              }}
            />
          ) : (
            <p>Loading editor...</p>
          )}

          <input type="hidden" name="content" value={editorContent} />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {getErrorMessage(state?.error?.content)}
            </p>
          </div>
        </div>

        <div className="my-5">
          <label className="mr-5">Kategori</label>
          <select
            id="category"
            name="category"
            className="border focus:outline-bg_vidi px-5 py-2 rounded-md"
          >
            <option value="News">News</option>
            <option value="Tips">Tips</option>
            <option value="Resep">Resep</option>
          </select>
          <label htmlFor="status" className="mx-5">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="border focus:outline-bg_vidi px-5 py-2 rounded-md"
          >
            <option value="Draft">Draft</option>
            <option value="Active">Aktif</option>
          </select>
          <label className="mx-5">Tag</label>
          <select
            id="tag"
            name="tag"
            className="border focus:outline-bg_vidi px-5 py-2 rounded-md"
          >
            <option value="News">News</option>
            <option value="Tips">Tips</option>
            <option value="Resep">Resep</option>
          </select>
        </div>

        <div className="mb-4 pt-2 flex flex-col max-w-md">
          <label className="mb-2">Upload Image (Featured Image)</label>
          <input
            type="file"
            name="image"
            className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {getErrorMessage(state?.error?.image)}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <SubmitButton label="upload" />
        </div>
      </form>
    </div>
  );
};

export default CreatePorto;
