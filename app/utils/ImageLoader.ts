export default function forceLoadHiddenImages(): Promise<void> {
  return new Promise((resolve) => {
    const images: HTMLImageElement[] = Array.from(
      document.querySelectorAll("img")
    );

    const imagePromises = images.map((img) => {
      return new Promise<void>((res) => {
        if (img.complete) {
          // Image is already loaded
          res();
        } else {
          // Force load for hidden images
          if (
            getComputedStyle(img).display === "none" ||
            getComputedStyle(img).visibility === "hidden"
          ) {
            const originalSrc = img.src;
            img.src = originalSrc; // Trigger loading for hidden images
          }

          // Listen for load or error events
          img.addEventListener("load", () => res(), { once: true });
          img.addEventListener("error", () => res(), { once: true });
        }
      });
    });

    Promise.all(imagePromises).then(() => resolve());
  });
}
