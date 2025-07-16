import { useEffect, useState } from "react";

interface UseUnicornStudioReturn {
  isLoaded: boolean;
  isError: boolean;
}

export const useUnicornStudio = (): UseUnicornStudioReturn => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const checkUnicornStudio = (): void => {
      if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
        setIsLoaded(true);
      }
    };

    // Check immediately
    checkUnicornStudio();

    // Set up interval to check periodically
    const interval = setInterval(checkUnicornStudio, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!isLoaded) {
        setIsError(true);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoaded]);

  return { isLoaded, isError };
};
