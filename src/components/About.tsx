import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";

export default function About() {
  const { about } = portfolioData;
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-6 md:h-[450px]">
          {/* Main Description */}
          <FadeIn delay={0.2} className="md:col-span-2 md:row-span-2 h-full">
            <TiltCard className="glass-card p-10 h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-purple-500/20 group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Who I Am</h3>
              <p className="text-xl text-slate-300 leading-relaxed relative z-10 font-light">
                {about.description}
              </p>
            </TiltCard>
          </FadeIn>
          
          {/* Location / Status */}
          <FadeIn delay={0.3} className="h-full">
            <TiltCard className="glass-card p-8 h-full flex flex-col justify-center bg-gradient-to-br from-cyan-500/5 to-purple-500/5 hover:border-cyan-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/5 group-hover:to-cyan-400/20 transition-all duration-500"></div>
              <div className="text-cyan-400 mb-4 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 relative z-10">Location</h4>
              <p className="text-slate-400 relative z-10">Hyderabad, India</p>
            </TiltCard>
          </FadeIn>
          
          {/* Objective */}
          <FadeIn delay={0.4} className="h-full">
            <TiltCard className="glass-card p-8 h-full flex flex-col justify-center bg-gradient-to-br from-fuchsia-500/5 to-purple-500/5 hover:border-fuchsia-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/0 to-fuchsia-400/5 group-hover:to-fuchsia-400/20 transition-all duration-500"></div>
              <div className="text-fuchsia-400 mb-4 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 relative z-10">Focus</h4>
              <p className="text-slate-400 relative z-10">AI/ML & Innovation</p>
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
