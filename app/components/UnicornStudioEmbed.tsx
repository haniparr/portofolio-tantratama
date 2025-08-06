import React, { useEffect, useRef } from "react";
import { useUnicornStudio } from "@/hooks/useUnicornStudio";

interface UnicornStudioEmbedProps {
  projectId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const UnicornStudioEmbed: React.FC<UnicornStudioEmbedProps> = ({
  projectId,
  width = "100%",
  height = "600px",
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded, isError } = useUnicornStudio();

  useEffect(() => {
    if (isLoaded && containerRef.current && projectId) {
      // Clear any existing content
      containerRef.current.innerHTML = "";

      // Create the Unicorn Studio div
      const unicornDiv = document.createElement("div");
      unicornDiv.setAttribute("data-us-project", projectId);
      unicornDiv.style.width = typeof width === "number" ? `${width}px` : width;
      unicornDiv.style.height =
        typeof height === "number" ? `${height}px` : height;

      containerRef.current.appendChild(unicornDiv);

      // Re-initialize if needed
      if (window.UnicornStudio?.init) {
        try {
          window.UnicornStudio.init();
        } catch (error) {
          console.error("Failed to re-initialize UnicornStudio:", error);
        }
      }
    }
  }, [isLoaded, projectId, width, height]);

  if (isError) {
    return (
      <div
        className={`flex items-center justify-center bg-red-50 border border-red-200 rounded-lg ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-red-600 text-center">
          <p className="font-medium">Failed to load animation</p>
          <p className="text-sm text-red-500">
            Please check your connection and try again
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm animate-pulse">
            Loading animation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`unicorn-studio-container ${className}`}
      style={{ width, height, ...style }}
    />
  );
};

export default UnicornStudioEmbed;
