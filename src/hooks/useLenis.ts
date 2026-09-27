import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css"; // BŪTINA produkcinei versijai internete

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

export const useLenis = () => {
  useEffect(() => {
    // Jei instancija jau egzistuoja, saugiai ją išvalome
    if (lenisInstance) {
      lenisInstance.destroy();
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (lenisInstance === lenis) {
        lenisInstance = null;
      }
    };
  }, []);
};