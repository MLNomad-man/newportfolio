import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";

export default function Demos() {
  const { demos } = portfolioData;

  const getThemePrefix = (colorTheme: string) => {
    return colorTheme === 'blue' ? 'cyan' : 'fuchsia';
  }

  const getIcon = (colorTheme: string) => {
    if (colorTheme === 'blue') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-fuchsia-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  };

  return (
    <section id="demos" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Demos</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {demos.map((demo, index) => {
            const themeName = getThemePrefix(demo.colorTheme);
            const isBlue = themeName === 'cyan';
            
            return (
              <FadeIn key={demo.id} delay={0.1 * index} className="h-full">
                <TiltCard className="glass-card p-8 h-full flex flex-col group relative overflow-hidden">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${isBlue ? 'from-cyan-500 to-purple-500' : 'from-fuchsia-500 to-purple-500'} rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`p-4 ${isBlue ? 'bg-cyan-500/10' : 'bg-fuchsia-500/10'} rounded-2xl border border-white/5 shadow-lg`}>
                        {getIcon(demo.colorTheme)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{demo.title}</h3>
                        <p className={`text-[15px] font-medium mt-1 ${isBlue ? 'text-cyan-400' : 'text-fuchsia-400'}`}>{demo.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden mb-8 border border-white/10 group-hover:border-white/20 transition-colors shadow-2xl bg-black">
                      <video controls className="w-full aspect-video object-cover">
                        <source src={demo.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                    <p className="text-[15px] text-slate-300 leading-relaxed mb-6 flex-grow">
                      {demo.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm mt-auto pt-4 border-t border-white/10">
                      {demo.features.map((feature, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-slate-400 font-medium">
                          <div className={`w-1.5 h-1.5 rounded-full ${isBlue ? 'bg-cyan-500' : 'bg-fuchsia-500'} shadow-[0_0_8px_currentColor]`}></div>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
