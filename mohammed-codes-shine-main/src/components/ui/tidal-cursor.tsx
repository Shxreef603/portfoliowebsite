import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const TidalCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripples = useRef<
    { x: number; y: number; radius: number; alpha: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const addRipple = (x: number, y: number) => {
      // Limit ripples to prevent performance issues
      if (ripples.current.length > 50) ripples.current.shift();
      ripples.current.push({ x, y, radius: 0, alpha: 0.5 });
    };

    const handleMove = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        addRipple(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouchMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // We assume dark mode as per the portfolio theme
      const isDark = true;

      ripples.current.forEach((r) => {
        r.radius += 1.5;
        r.alpha -= 0.008;

        if (r.alpha > 0) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = isDark
            ? `rgba(34, 211, 238, ${r.alpha})` // cyan-400
            : `rgba(0, 128, 255, ${r.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      ripples.current = ripples.current.filter((r) => r.alpha > 0);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};
