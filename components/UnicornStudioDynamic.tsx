// components/UnicornStudioEmbed.tsx
"use client"; // Jika menggunakan Next.js 13+ dengan App Router

import { useEffect, useRef } from "react";

interface UnicornStudioEmbedProps {
  projectId: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const UnicornStudioEmbed: React.FC<UnicornStudioEmbedProps> = ({
  projectId,
  width = 1440,
  height = 900,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Fungsi untuk load script Unicorn Studio
    const loadUnicornStudio = () => {
      if (scriptLoadedRef.current || window.UnicornStudio) {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
      script.type = "text/javascript";

      script.onload = () => {
        scriptLoadedRef.current = true;
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      script.onerror = () => {
        console.error("Failed to load Unicorn Studio script");
      };

      // Append ke head atau body
      const target = document.head || document.body;
      target.appendChild(script);
    };

    loadUnicornStudio();

    // Cleanup function
    return () => {
      // Optional: cleanup jika diperlukan
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={className}
    />
  );
};

export default UnicornStudioEmbed;
