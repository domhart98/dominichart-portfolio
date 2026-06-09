"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if(!glow) return;

    const handleMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[120px] hidden lg:block
                pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0
      "
    />
  );
}