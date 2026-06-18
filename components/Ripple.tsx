"use client";

import { useCallback, useRef, type MouseEvent, type ReactNode } from "react";

interface RippleProps {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}

export default function Ripple({
  children,
  className = "",
  color = "rgba(255, 255, 255, 0.35)",
  duration = 600,
}: RippleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const createRipple = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const diameter = Math.max(container.clientWidth, container.clientHeight);
      const radius = diameter / 2;

      const ripple = document.createElement("span");
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - radius}px`;
      ripple.style.top = `${e.clientY - rect.top - radius}px`;
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = `ripple ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`;
      ripple.style.backgroundColor = color;
      ripple.style.pointerEvents = "none";

      const existingRipple = container.querySelector(".ripple-span");
      if (existingRipple) existingRipple.remove();

      container.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, duration);
    },
    [color, duration]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onPointerDown={createRipple}
    >
      {children}
    </div>
  );
}
