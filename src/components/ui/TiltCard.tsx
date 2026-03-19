"use client";
import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.02}
      transitionSpeed={1500}
      className={className}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      {children}
    </Tilt>
  );
}
