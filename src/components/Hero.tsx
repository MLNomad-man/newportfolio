import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import Image from "next/image";

export default function Hero() {
  const { hero } = portfolioData;
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-[-1]" />
      
      <FadeIn delay={0.2}>
        <div className="relative w-56 h-56 md:w-72 md:h-72 mb-10 mx-auto rounded-full p_[2px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-fuchsia-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] group hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-700">
          <div className="w-full h-full rounded-full overflow-hidden relative bg-[#030014] p-1">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-contain group-hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.4}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
            {hero.title}
          </span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.6}>
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          {hero.subtitle}
        </p>
      </FadeIn>
      
      <FadeIn delay={0.8}>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#projects" className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 font-semibold tracking-wide">
            View My Work
          </a>
          <a href={hero.resumeLink} download className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 font-semibold tracking-wide text-white">
            Download Resume
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 font-semibold tracking-wide text-white">
            Contact Me
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
