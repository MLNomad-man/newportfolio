import { FadeIn } from "./ui/FadeIn";

const milestones = [
  {
    year: "2024",
    title: "Started B.Tech at SIT Hyderabad",
    description: "Began my journey at Symbiosis Institute of Technology, diving into programming and tech culture.",
    icon: "🎓",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2024",
    title: "First Induction & Futsal Victory",
    description: "Won the futsal championship during the college induction program. First taste of competitive victories.",
    icon: "⚽",
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2025",
    title: "Co-Led Algorand Blockchain Club",
    description: "Organized AlgoScape — a Squid Game-inspired blockchain event combining gaming with Web3 tech.",
    icon: "⛓️",
    color: "from-purple-500 to-violet-500",
  },
  {
    year: "2025",
    title: "IEEE IAS Student Branch Chair",
    description: "Elected as Chair of the IEEE Industry Applications Society chapter. Led technical events and workshops.",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "2025",
    title: "ECE Hackathon Winner — ₹15,000 Prize",
    description: "Won 1st place at the KL University Hackathon-2025, a 24-hour hardware + software innovation sprint.",
    icon: "🏆",
    color: "from-yellow-400 to-amber-500",
  },
  {
    year: "2025",
    title: "IEEE Paper Published — Sign Language Recognition",
    description: "Presented 'Sign Language Recognition Using AI & ML' at the IEEE 3rd Global Conference (GCWCN).",
    icon: "📄",
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2025",
    title: "IEEE Hackathon — Leadership Summit Victory",
    description: "Secured 3rd major hackathon win at the IEEE Leadership Summit 2025 with the core team.",
    icon: "🥇",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    year: "2026",
    title: "GUVI IIT Bombay — AI Impact Summit",
    description: "Attended the AI Impact Summit at IIT Bombay during Techfest, exploring AI-driven industry trends.",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
  },
  {
    year: "2026",
    title: "TechSynapse Hackathon Winner",
    description: "Built ArthNiti — an AI-powered financial advisor — during an intense 24-hour sprint with Team Neo.",
    icon: "💡",
    color: "from-fuchsia-400 to-cyan-400",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-500 mx-auto rounded-full"></div>
        </FadeIn>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-purple-500 opacity-30"></div>

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <FadeIn key={index} delay={0.08 * index}>
                <div className={`relative flex items-start mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-black z-10 shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 relative overflow-hidden group hover:bg-white/5 transition-colors">
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${milestone.color} opacity-60`}></div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{milestone.icon}</span>
                        <span className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${milestone.color} text-transparent bg-clip-text`}>{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{milestone.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
