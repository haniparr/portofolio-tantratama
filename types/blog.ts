// types/blog.ts

export interface BlogFormState {
  error?: {
    title?: string[] | string;
    content?: string[] | string;
    image?: string[] | string;
    category?: string[] | string;
    status?: string[] | string;
  };
  success?: boolean;
  message?: string;
}

export interface BlogData {
  title: string;
  content: string;
  category: "News" | "Tips" | "Resep";
  status: "Draft" | "Active";
  image?: string;
}

export interface CKEditorConfig {
  extraPlugins?: Array<(editor: any) => void>;
  toolbar?: {
    items: string[];
  };
  language?: string;
  image?: {
    toolbar: string[];
  };
  table?: {
    contentToolbar: string[];
  };
}
