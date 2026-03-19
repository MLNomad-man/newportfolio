"use client";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";
import { motion } from "framer-motion";

export default function Skills() {
  const { skills } = portfolioData;

  const renderSkillGroup = (title: string, items: { name: string; progress: number; color: string }[], icon: React.ReactNode) => (
    <TiltCard className="glass-card p-8 h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {items.map((skill, index) => (
          <div key={index} className="space-y-2 group">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              <span className="text-cyan-400">{skill.progress}%</span>
            </div>
            <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                className={`h-full rounded-full ${skill.color} shadow-[0_0_15px_currentColor] opacity-90`}
              />
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  );

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.2} className="h-full">
            {renderSkillGroup("Languages", skills.languages, <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>)}
          </FadeIn>
          <FadeIn delay={0.3} className="h-full">
            {renderSkillGroup("Libraries", skills.libraries, <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)}
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            {renderSkillGroup("Tools", skills.tools, <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>)}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
