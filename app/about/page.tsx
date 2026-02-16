import Image from "next/image";
import {
  Code2,
  Briefcase,
  MapPin,
  ChevronRight,
  Layout,
  Layers,
  Zap,
} from "lucide-react";
import data from "@/app/src/data/xp.json";

export default function About() {
  return (
    <div className="min-h-screen text-zinc-400 font-sans selection:bg-blue-500/20">
      <main className="max-w-4xl px-6 py-16 md:py-24">
        {/* --- HEADER / HERO --- */}
        <section className="flex flex-col md:flex-row gap-10 items-start mb-20">
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800">
              <Image
                src="/AndreFernando.jpg"
                alt="Andre Fernando"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 w-6 h-6 rounded-full border-4 border-[#09090b] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500">
              <MapPin className="w-3 h-3" /> Curitiba, PR
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
              Andre Fernando
            </h1>
            <p className="text-base leading-relaxed max-w-xl">
              Desenvolvedor Full-Stack focado em criar produtos digitais
              <span className="text-zinc-200">
                {" "}
                limpos, rápidos e eficientes
              </span>
              . Atualmente explorando novas formas de otimizar o fluxo de
              trabalho no ecossistema React.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="text-xs font-bold text-zinc-100 flex items-center gap-1 hover:text-blue-500 transition-colors">
                Currículo <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* EXPERIÊNCIAS */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <Briefcase className="w-3 h-3" /> Experiência
            </h2>
            
            <div className="space-y-8 border-l border-zinc-800/50 pl-4">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="group relative">
                  <div className="text-xs font-mono text-zinc-600 mb-1">{exp.period}</div>
                  <h3 className="text-sm font-bold text-zinc-200 group-hover:text-blue-500 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-xs text-zinc-500 mb-2">{exp.company}</div>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <Code2 className="w-3 h-3" /> Stack
            </h2>
            <div className="grid gap-3">
              {data.skills.map((skill) => (
                <div key={skill.name} className="p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20">
                  <span className="text-sm font-semibold text-zinc-200 block mb-1">{skill.name}</span>
                  <p className="text-[11px] font-mono text-zinc-500 italic">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}