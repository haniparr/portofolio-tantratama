export default function loadBackgroundImages(): void {
  const backgroundImages: NodeListOf<Element> =
    document.querySelectorAll("[data-background]");

  if (backgroundImages.length > 0) {
    backgroundImages.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      const image: string | undefined = htmlElement.dataset.background;

      if (image) {
        htmlElement.style.backgroundImage = `url('${image}')`;
      }
    });
  }
}

// Alternative version with better type safety
export function loadBackgroundImagesTyped(): void {
  const backgroundImages: NodeListOf<HTMLElement> =
    document.querySelectorAll<HTMLElement>("[data-background]");

  if (backgroundImages.length > 0) {
    backgroundImages.forEach((element: HTMLElement) => {
      const image: string | undefined = element.dataset.background;

      if (image) {
        element.style.backgroundImage = `url('${image}')`;
      }
    });
  }
}
