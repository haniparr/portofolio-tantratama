import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface LoadingProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const LoadingComponent: React.FC<LoadingProps> = ({
  width = "100%",
  height = "100%",
  className = "",
}) => (
  <div
    className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
    style={{ width, height }}
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"></div>
      <p className="text-gray-500 text-sm animate-pulse">
        Loading animation...
      </p>
    </div>
  </div>
);

interface UnicornStudioEmbedProps {
  projectId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const UnicornStudioDynamic = dynamic(() => import("./UnicornStudioEmbed"), {
  ssr: false,
  loading: () => <LoadingComponent />,
}) as ComponentType<UnicornStudioEmbedProps>;

export { UnicornStudioDynamic };
