import { useEffect, useRef } from "react";

interface UnicornStudioEmbedProps {
  projectId?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const UnicornStudioEmbed: React.FC<UnicornStudioEmbedProps> = ({
  projectId = "e6OPxyCEfYV1DvzepQKI",
  width = "1440px",
  height = "900px",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Function to load UnicornStudio script
    const loadUnicornStudio = (): void => {
      if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
        return; // Already loaded
      }

      if (!window.UnicornStudio) {
        window.UnicornStudio = {
          isInitialized: false,
          init: () => {}, // Placeholder, akan di-override oleh script
        };
      }

      // Check if script is already being loaded
      if (scriptLoadedRef.current) return;

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      script.onerror = function () {
        console.error("Failed to load UnicornStudio script");
      };

      (document.head || document.body).appendChild(script);
      scriptLoadedRef.current = true;
    };

    loadUnicornStudio();

    // Cleanup function
    return () => {
      // Optional: cleanup if needed
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{ width, height }}
      className={className}
    />
  );
};

export default UnicornStudioEmbed;
