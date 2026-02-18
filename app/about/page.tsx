import Image from "next/image";
import {
  Code2,
  Briefcase,
  MapPin,
  ChevronRight,
} from "lucide-react";
import data from "@/app/src/data/xp.json";

export default function About() {
  return (
    // Adicionamos flex e justify-center no container pai
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center text-zinc-400 font-sans selection:bg-blue-500/20">
      
      {/* Container principal sem margin-top fixo, permitindo a centralização flex */}
      <main className="max-w-3xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* --- HEADER / HERO --- */}
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-24 text-center md:text-left">
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800 ring-4 ring-zinc-900/50">
              <Image
                src="/AndreFernando.jpg"
                alt="Andre Fernando"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 w-6 h-6 rounded-full border-4 border-[#050505] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-blue-500">
              <MapPin className="w-3 h-3" /> Curitiba, PR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight">
              Andre Fernando
            </h1>
            <p className="text-base leading-relaxed text-zinc-400 max-w-xl">
              Desenvolvedor Full-Stack focado em criar produtos digitais
              <span className="text-zinc-200"> limpos, rápidos e eficientes</span>. 
              Atualmente explorando novas formas de otimizar o fluxo de trabalho no ecossistema React.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <button className="group text-[11px] font-mono uppercase tracking-widest text-zinc-100 flex items-center gap-2 hover:text-blue-500 transition-colors">
                Baixar Currículo 
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* --- GRID DE CONTEÚDO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* EXPERIÊNCIAS */}
          <section className="space-y-10">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-500" /> Experiência
            </h2>
            
            <div className="space-y-10 border-l border-zinc-900 pl-6">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="group relative">
                  {/* Dot indicador na linha do tempo */}
                  <div className="absolute -left-[30px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                  
                  <div className="text-[10px] font-mono text-zinc-600 mb-2 uppercase tracking-tighter">
                    {exp.period}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-[11px] text-blue-500/70 font-mono mb-3">{exp.company}</div>
                  <p className="text-xs leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS / STACK */}
          <section className="space-y-10">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              <Code2 className="w-3.5 h-3.5 text-blue-500" /> Stack
            </h2>
            <div className="grid gap-4">
              {data.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-4 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-zinc-800 transition-all group"
                >
                  <span className="text-xs font-bold text-zinc-300 block mb-1.5 group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </span>
                  <p className="text-[10px] font-mono text-zinc-600 leading-loose uppercase tracking-tighter">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}