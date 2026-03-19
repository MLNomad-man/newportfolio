"use client";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./ui/FadeIn";

const stats = [
  { label: "Hackathons Won", value: 3, suffix: "+", icon: "🏆" },
  { label: "Projects Built", value: 5, suffix: "+", icon: "🚀" },
  { label: "Research Papers", value: 1, suffix: "", icon: "📄" },
  { label: "Certifications", value: 10, suffix: "+", icon: "🎓" },
  { label: "Tech Events Led", value: 5, suffix: "+", icon: "⚡" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">Numbers</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-500 mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 * index}>
              <div className="glass-card p-6 md:p-8 text-center group hover:bg-white/5 transition-colors relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-3xl mb-4">{stat.icon}</div>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="text-slate-400 mt-3 text-sm font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
