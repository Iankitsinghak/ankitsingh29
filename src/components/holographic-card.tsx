"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

export function HolographicCard({ children, className }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [sheenStyle, setSheenStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const rotateX = (mouseY / height - 0.5) * -15; // Invert for natural feel
    const rotateY = (mouseX / width - 0.5) * 15;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });

    setSheenStyle({
        transform: `translateX(${mouseX - width/2}px) translateY(${mouseY - height/2}px)`,
        opacity: 1
    })
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-in-out",
    });
    setSheenStyle({
        opacity: 0,
        transition: "opacity 0.5s ease-in-out",
    })
  };

  return (
    <div className="holographic-card-wrapper h-full">
      <div
        ref={cardRef}
        className={cn("holographic-card relative h-full", className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <div className="holographic-card-glow"></div>
        <div className="holographic-sheen" style={sheenStyle}></div>
        {children}
      </div>
    </div>
  );
}
