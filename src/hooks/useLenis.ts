import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

export const useLenis = () => {
  useEffect(() => {
    // Sukuriame naują instanciją
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      prevent: () => false,
    });

    lenisInstance = lenis;

    // Užtikriname, kad Lenis tikrai būtų aktyvus
    lenis.start();

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Automatinis puslapio aukščio sekimas (jei turinys užkraunamas vėliau)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (lenisInstance === lenis) {
        lenisInstance = null;
      }
    };
  }, []);
};