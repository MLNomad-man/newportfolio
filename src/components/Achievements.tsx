import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import Image from "next/image";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Achievements</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16 pb-8">
          {achievements.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
              </div>

              <FadeIn delay={0.1}>
                <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:bg-white/5">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50 shadow-[0_0_15px_#06b6d4]"></div>
                  
                  <h3 className="text-3xl font-bold mb-8 text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6 relative z-10">
                      {item.subtitle && <p className="text-fuchsia-400 text-lg font-medium">{item.subtitle}</p>}
                      <p className="text-slate-300 leading-relaxed text-[16px]">{item.description}</p>
                      
                      {item.points.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-slate-300 leading-relaxed text-[15px]">
                              <span className="text-cyan-500 mr-3 mt-1">✦</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.subFeature && (
                        <div className="p-6 mt-8 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                          <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                          <h4 className={`font-bold text-xl ${item.subFeature.color} mb-3 relative z-10`}>
                            {item.subFeature.title}
                          </h4>
                          <p className="text-slate-300 text-[15px] leading-relaxed relative z-10">
                            {item.subFeature.desc}
                          </p>
                          {item.subFeature.images && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 relative z-10">
                              {item.subFeature.images.map((img, imgIdx) => (
                                <div key={imgIdx} className="rounded-xl overflow-hidden relative h-40 bg-[#060606] border border-white/5 hover:border-cyan-500/30 transition-colors">
                                  <Image src={img} alt={`${item.subFeature?.title} ${imgIdx}`} fill className="object-contain" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4 relative z-10">
                      <div className={`grid gap-4 ${item.images.length > 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                        {item.images.map((img, imgIdx) => (
                          <div key={imgIdx} className={`rounded-xl overflow-hidden relative shadow-lg ${item.images.length > 2 && imgIdx === 4 ? 'col-span-1 md:col-span-2 h-96' : 'h-72'} bg-[#060606] border border-white/5 group-hover:border-cyan-500/30 transition-colors duration-500`}>
                            <Image
                              src={img}
                              alt={`${item.title} image ${imgIdx}`}
                              fill
                              className={`object-contain`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
