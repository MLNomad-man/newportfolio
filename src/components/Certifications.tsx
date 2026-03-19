import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const isBlue = cert.color?.includes('blue');
            
            return (
              <FadeIn key={cert.id} delay={0.1 * index}>
                <TiltCard className="glass-card p-10 h-full flex flex-col items-center text-center cursor-default group relative overflow-hidden transition-colors hover:bg-white/5 border border-white/5 hover:border-white/20">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${isBlue ? 'bg-cyan-500/10' : 'bg-fuchsia-500/10'} rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-opacity-20`}></div>
                  
                  <div className={`p-4 rounded-2xl mb-6 ${isBlue ? 'bg-cyan-500/10 text-cyan-400' : 'bg-fuchsia-500/10 text-fuchsia-400'} border border-white/5 shadow-lg relative z-10`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-white mb-3 relative z-10 group-hover:${isBlue ? 'text-cyan-400' : 'text-fuchsia-400'} transition-colors`}>{cert.title}</h3>
                  <p className="text-slate-400 relative z-10 font-medium tracking-wide text-sm uppercase">{cert.issuer}</p>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
