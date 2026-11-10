"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
  size?: number;
}

export function Globe({ className, size = 480 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted guard so the globe only renders client-side after theme resolution
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    let phi = 0;
    const isDark = resolvedTheme === "dark";
    const baseColor = isDark ? [0.45, 0.62, 0.95] : [0.82, 0.86, 0.95];
    const glowColor = isDark ? [0.12, 0.16, 0.3] : [0.88, 0.92, 1];
    const markerColor = isDark ? [0.95, 0.55, 0.2] : [0.9, 0.55, 0.25];

    const globe = createGlobe(
      canvasRef.current,
      {
        devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
        width: size * 2,
        height: size * 2,
        phi: 0,
        theta: 0.25,
        dark: isDark ? 1 : 0,
        diffuse: 1.4,
        mapSamples: 20000,
        mapBrightness: isDark ? 7 : 3.5,
        baseColor: baseColor as [number, number, number],
        markerColor: markerColor as [number, number, number],
        glowColor: glowColor as [number, number, number],
        markers: [
          { location: [-6.2, 106.816666], size: 0.09 }, // Jakarta
          { location: [-7.2575, 112.7521], size: 0.06 }, // Surabaya
        ],
        onRender: (state: Record<string, number>) => {
          state.phi = phi + 0.003;
          phi += 0.003;
        },
      } as unknown as Parameters<typeof createGlobe>[1]
    );

    return () => {
      globe.destroy();
    };
  }, [mounted, resolvedTheme, size]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: size,
          height: size,
          maxWidth: "100%",
          aspectRatio: "1",
          contain: "layout paint size",
          opacity: 1,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}
