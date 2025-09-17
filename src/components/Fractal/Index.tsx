import React, { useRef, useEffect } from "react";
import { Delaunay } from "d3-delaunay";

const VoronoiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2, // slower
      vy: (Math.random() - 0.5) * 0.2,
    }));

    let time = 0;
    let dragging = false;
    let lastX = 0;

    const draw = () => {
      ctx?.clearRect(0, 0, width, height);

      const delaunay = Delaunay.from(points.map((p) => [p.x, p.y]));
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      const gradient = ctx!.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(0, 200, 255, 0.10)"); 
      gradient.addColorStop(1, "rgba(255, 0, 200, 0.10)");

      ctx!.strokeStyle = gradient;
      ctx!.lineWidth = 0.6;

      for (let i = 0; i < points.length; i++) {
        ctx!.beginPath();
        voronoi.renderCell(i, ctx!);
        ctx!.stroke();
      }
    };

    const animate = () => {
      if (!dragging) {
        time += 0.01; // slower
        for (const p of points) {
          p.x += Math.sin(time) * 0.1 + p.vx;
          p.y += Math.cos(time) * 0.1 + p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      draw();
      requestAnimationFrame(animate);
    };

    animate();

    // Drag & touch logic
    const handleMouseDown = (e: MouseEvent) => {
      dragging = true;
      lastX = e.clientX;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      points.forEach(p => p.x += dx);
      lastX = e.clientX;
      draw();
    };
    const handleMouseUp = () => (dragging = false);

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);

    canvas.addEventListener("touchstart", (e) => {
      dragging = true;
      lastX = e.touches[0].clientX;
    });
    canvas.addEventListener("touchmove", (e) => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - lastX;
      points.forEach(p => p.x += dx);
      lastX = e.touches[0].clientX;
      draw();
    });
    canvas.addEventListener("touchend", () => (dragging = false));

    // Resize
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] select-none bg-background"
    />
  );
};

export default VoronoiBackground;
