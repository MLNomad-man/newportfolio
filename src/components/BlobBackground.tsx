"use client";
import { useEffect, useRef, useState } from "react";

export default function BlobBackground() {
  const [vantaReady, setVantaReady] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  // Load Three.js r119 (Birds requires legacy THREE.Geometry) then Vanta Birds
  useEffect(() => {
    // @ts-ignore
    if (window.VANTA) { setVantaReady(true); return; }

    const threeScript = document.createElement("script");
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js";
    document.body.appendChild(threeScript);

    threeScript.onload = () => {
      const vantaScript = document.createElement("script");
      vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
      document.body.appendChild(vantaScript);
      vantaScript.onload = () => setVantaReady(true);
    };
  }, []);

  useEffect(() => {
    if (!vantaReady || vantaEffect.current || !myRef.current) return;
    // @ts-ignore
    if (!window.VANTA) return;

    // @ts-ignore
    vantaEffect.current = window.VANTA.BIRDS({
      el: myRef.current,
      mouseControls: true,   // Cursor reactive ✅
      touchControls: true,   // Touch reactive ✅
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,

      // Obsidian & Neon Theme
      backgroundColor: 0x030014,
      color1: 0xd946ef,       // Neon Fuchsia
      color2: 0x06b6d4,       // Neon Cyan
      colorMode: "variance",
      birdSize: 1.2,
      wingSpan: 25.00,
      speedLimit: 4.00,
      separation: 60.00,
      alignment: 30.00,
      cohesion: 30.00,
      quantity: 3.00,         // Lower bird count = smoother performance
    });

    return () => { if (vantaEffect.current) vantaEffect.current.destroy(); };
  }, [vantaReady]);

  return (
    <>
      <div ref={myRef} className="fixed inset-0 w-full h-full -z-20" />
      <div className="noise-overlay opacity-30 pointer-events-none" />
    </>
  );
}
