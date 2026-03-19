import { FadeIn } from "./ui/FadeIn";
import Image from "next/image";

const GITHUB_USERNAME = "MLNomad-man";

export default function GitHubStats() {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=d946ef&text_color=94A3B8&icon_color=06b6d4&bg_color=00000000`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=d946ef&fire=06b6d4&currStreakLabel=d946ef&sideLabels=94A3B8&currStreakNum=F8FAFC&sideNums=F8FAFC&dates=64748b&background=00000000`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=d946ef&text_color=94A3B8&bg_color=00000000`;

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500">Activity</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-500 mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="glass-card p-6 md:p-8 flex items-center justify-center relative overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={statsUrl} alt="GitHub Stats" className="w-full max-w-md relative z-10" loading="lazy" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card p-6 md:p-8 flex items-center justify-center relative overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={streakUrl} alt="GitHub Streak" className="w-full max-w-md relative z-10" loading="lazy" />
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8 flex items-center justify-center relative overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={langsUrl} alt="Top Languages" className="w-full max-w-lg relative z-10" loading="lazy" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
