import React from "react";
import { UnicornStudioDynamic } from "./UnicornStudioDynamic";

interface ResponsiveUnicornStudioProps {
  projectId: string;
  className?: string;
  mobileHeight?: string | number;
  tabletHeight?: string | number;
  desktopHeight?: string | number;
  desktopWidth?: string | number;
}

const ResponsiveUnicornStudio: React.FC<ResponsiveUnicornStudioProps> = ({
  projectId,
  className = "",
  mobileHeight = "400px",
  tabletHeight = "600px",
  desktopHeight = "800px",
  desktopWidth = "100%",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Mobile */}
      <div className="block sm:hidden">
        <UnicornStudioDynamic
          projectId={projectId}
          width="100%"
          height={mobileHeight}
          className="rounded-lg"
        />
      </div>

      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        <UnicornStudioDynamic
          projectId={projectId}
          width="100%"
          height={tabletHeight}
          className="rounded-lg"
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <UnicornStudioDynamic
          projectId={projectId}
          width={desktopWidth}
          height={desktopHeight}
          className="rounded-lg mx-auto"
        />
      </div>
    </div>
  );
};

export { ResponsiveUnicornStudio };
