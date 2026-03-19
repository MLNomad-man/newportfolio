import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { TiltCard } from "./ui/TiltCard";
import Link from "next/link";

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-500 mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index} className="h-full">
              <TiltCard className="glass-card p-8 flex flex-col h-full cursor-pointer group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative flex flex-col h-full z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 text-[15px] leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 text-xs font-medium font-mono mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-fuchsia-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link href={project.demoUrl} className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                      Live Demo 
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
