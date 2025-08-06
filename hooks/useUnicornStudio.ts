import { useEffect, useState } from "react";

const UNICORN_STUDIO_CDN =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

export const useUnicornStudio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Check if UnicornStudio is already loaded
    if (window.UnicornStudio?.isInitialized) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector(
      `script[src="${UNICORN_STUDIO_CDN}"]`
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        setIsLoaded(true);
      });
      return;
    }

    // Initialize UnicornStudio window object
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
    }

    // Create and load script
    const script = document.createElement("script");
    script.src = UNICORN_STUDIO_CDN;
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      try {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to initialize UnicornStudio:", error);
        setIsError(true);
      }
    };

    script.onerror = () => {
      console.error("Failed to load UnicornStudio script");
      setIsError(true);
    };

    (document.head || document.body).appendChild(script);

    // Cleanup function
    return () => {
      // Only remove script if component unmounts and no other instances need it
      // This is commented out to prevent issues with multiple instances
      // script.remove();
    };
  }, []);

  return { isLoaded, isError };
};
