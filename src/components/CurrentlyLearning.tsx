"use client";
import { FadeIn } from "./ui/FadeIn";

const learningItems = [
  {
    name: "LangChain & RAG",
    description: "Building retrieval-augmented generation pipelines for intelligent document Q&A systems.",
    progress: 60,
    icon: "🦜",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Next.js & React",
    description: "Mastering server-side rendering, API routes, and modern full-stack web development.",
    progress: 70,
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Docker & DevOps",
    description: "Containerizing applications and building CI/CD pipelines for production deployment.",
    progress: 35,
    icon: "🐳",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Deep Learning & CNNs",
    description: "Exploring convolutional neural networks for advanced computer vision tasks.",
    progress: 55,
    icon: "🧠",
    color: "from-fuchsia-400 to-purple-500",
  },
];

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Learning</span></h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Always evolving. Here&apos;s what I&apos;m exploring right now.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full mt-4"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningItems.map((item, index) => (
            <FadeIn key={item.name} delay={0.1 * index}>
              <div className="glass-card p-8 relative overflow-hidden group hover:bg-white/5 transition-colors">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                    {/* Pulsing "Learning" indicator */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${item.color} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${item.color}`}></span>
                      </span>
                      <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">In Progress</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-xs text-slate-500 mt-1">{item.progress}%</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
