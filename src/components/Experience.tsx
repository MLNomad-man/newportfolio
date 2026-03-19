import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";

export default function Experience() {
  const { experience } = portfolioData;

  const getIcon = (type: string, colorClass: string) => {
    switch (type) {
      case 'ieee':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={colorClass}>
            <path d="M12 2.69l.346.666L13.38 5.31l2.12.308 1.53 1.53.308 2.12.666.346L19.31 12l-.666.346L16.69 13.38l-.308 2.12-1.53 1.53-2.12.308-.346.666L12 19.31l-.346-.666L10.62 16.69l-2.12-.308-1.53-1.53-.308-2.12-.666-.346L4.69 12l.666-.346L7.31 10.62l.308-2.12 1.53-1.53 2.12-.308.346-.666z" />
            <path d="M12 7v2l2 1" />
          </svg>
        );
      case 'algo':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={colorClass}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      case 'event':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={colorClass}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        );
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Leadership</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12 pb-8">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-fuchsia-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></div>
              </div>
              
              <FadeIn delay={0.2 * index}>
                <TiltCard className="cursor-default group">
                  <div className="p-8 rounded-2xl glass-card h-full transition-all duration-500 group-hover:bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-fuchsia-500 opacity-50 shadow-[0_0_15px_#a855f7]"></div>
                    <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0 shadow-lg">
                        {getIcon(item.type, "text-fuchsia-400")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">{item.role}</h3>
                        <p className="text-purple-300 font-medium mb-6 text-lg">{item.organization}</p>
                        <ul className="space-y-3">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-slate-300 leading-relaxed text-[15px]">
                              <span className="text-fuchsia-500 mr-3 mt-1">✦</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
