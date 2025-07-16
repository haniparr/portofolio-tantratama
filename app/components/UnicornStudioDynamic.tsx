import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface LoadingProps {
  width?: string | number;
  height?: string | number;
}

const LoadingComponent: React.FC<LoadingProps> = ({
  width = "100%",
  height = "900px",
}) => (
  <div
    className="flex items-center justify-center bg-gray-100 rounded-lg"
    style={{ width, height }}
  >
    <div className="text-gray-500 animate-pulse">Loading animation...</div>
  </div>
);
interface UnicornStudioEmbedProps {
  projectId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const UnicornStudioEmbed = dynamic(() => import("./UnicornStudioEmbed"), {
  ssr: false,
  loading: () => <LoadingComponent />,
}) as ComponentType<UnicornStudioEmbedProps>;

export { UnicornStudioEmbed as UnicornStudioDynamic };

// components/ResponsiveUnicornStudio.tsx
interface ResponsiveUnicornStudioProps {
  projectId: string;
  className?: string;
}

const ResponsiveUnicornStudio: React.FC<ResponsiveUnicornStudioProps> = ({
  projectId,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Mobile */}
      <div className="block md:hidden">
        <UnicornStudioEmbed projectId={projectId} width="100%" height="400px" />
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <UnicornStudioEmbed projectId={projectId} width="100%" height="600px" />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <UnicornStudioEmbed projectId={projectId} width="50%%" height="832px" />
      </div>
    </div>
  );
};

export { ResponsiveUnicornStudio };
