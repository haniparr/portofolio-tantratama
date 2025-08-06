export interface UnicornStudioWindow extends Window {
  UnicornStudio?: {
    isInitialized: boolean;
    init: () => void;
  };
}

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}
