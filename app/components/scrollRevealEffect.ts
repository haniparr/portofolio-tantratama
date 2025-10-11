import { RefObject } from "react";

interface ScrollRevealInstance {
  initScrollReveal: () => void;
  cleanupScrollReveal: () => void;
}

export default function setupScrollReveal(
  wrapperRef: RefObject<HTMLDivElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>
): ScrollRevealInstance {
  function setVideoHeight(): void {
    if (!videoRef.current) return;

    // Mendapatkan tinggi viewport
    const viewportHeight: number = window.innerHeight;
    // Mengatur tinggi video sesuai viewport, dapat diatur persentasenya
    const heightPercentage: number = 90; // 90% dari tinggi viewport

    videoRef.current.style.height = `${
      viewportHeight * (heightPercentage / 100)
    }px`;

    // if (wrapperRef.current) {
    //   wrapperRef.current.style.height = `${
    //     viewportHeight * (heightPercentage / 100)
    //   }px`;
    // }
  }

  function handleVideoPlayback(): void {
    if (!wrapperRef.current || !videoRef.current) return;

    const wrapperRect: DOMRect = wrapperRef.current.getBoundingClientRect();
    const windowHeight: number = window.innerHeight;

    // Cek apakah video berada di viewport
    const isInViewport =
      wrapperRect.top < windowHeight && wrapperRect.bottom > 0;

    // Cek apakah video sudah mulai terlihat (masuk ke viewport)
    const isStartingToShow = wrapperRect.top < windowHeight;

    if (isInViewport && isStartingToShow) {
      // Play video jika belum diputar
      if (videoRef.current.paused) {
        videoRef.current.play().catch(console.error);
      }
    } else {
      // Pause video jika keluar dari viewport
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }

  function handleScroll(): void {
    if (!wrapperRef.current || !videoRef.current) return;

    const wrapperRect: DOMRect = wrapperRef.current.getBoundingClientRect();
    const windowHeight: number = window.innerHeight;

    // Jarak scroll yang dibutuhkan untuk efek penuh
    const scrollDistance: number = windowHeight; // Bisa disesuaikan

    // Mulai efek ketika bagian atas video masih di bawah viewport
    const startPosition: number = windowHeight;

    // Posisi elemen saat ini
    const currentPosition: number = wrapperRect.top;

    // Kalkulasi progress (0 to 1)
    let progress: number = (startPosition - currentPosition) / scrollDistance;
    progress = Math.max(0, Math.min(1, progress)); // Batasi 0-1

    // Terapkan width sesuai progress
    videoRef.current.style.width = `${progress * 100}%`;

    // Handle video playback berdasarkan posisi scroll
    handleVideoPlayback();
  }

  function initScrollReveal(): void {
    // Set initial width to 0
    if (videoRef.current) {
      videoRef.current.style.width = "0%";
    }

    // Set video height
    setVideoHeight();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setVideoHeight);

    // Trigger once to set initial state
    handleScroll();
  }

  function cleanupScrollReveal(): void {
    // Pause video when cleaning up
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }

    // Clean up event listeners
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", setVideoHeight);
  }

  return {
    initScrollReveal,
    cleanupScrollReveal,
  };
}
