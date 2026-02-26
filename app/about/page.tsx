"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Code2,
  Briefcase,
  MapPin,
  ChevronRight,
  ChevronDown,
  Github,
  Linkedin,
  Music,
  Terminal,
  Coffee,
  Gamepad2,
} from "lucide-react";
import data from "@/app/src/data/experiences.json";

const hobbies = [
  { icon: Music,    label: "Música",   desc: "Ouvir e explorar novos álbuns é parte do ritual de codar." },
  { icon: Terminal, label: "Terminal", desc: "Scripts, dotfiles e automatizar tudo que parece repetitivo." },
  { icon: Coffee,   label: "Café",     desc: "Sem café não tem commit. É uma relação séria." },
  { icon: Gamepad2, label: "Jogos",    desc: "Mais pelos sistemas de jogo do que pela diversão em si." },
];

const socialLinks = [
  { href: "https://github.com/oandrefl",                icon: Github,   label: "GitHub",   handle: "@oandrefl" },
  { href: "https://www.linkedin.com/in/andrefernando/", icon: Linkedin, label: "LinkedIn", handle: "andrefernando" },
];

export default function About() {
  const [expandedIds, setExpandedIds] = useState<number[]>([1]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center selection:bg-blue-500/20 py-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <main className="w-full max-w-5xl mx-auto space-y-24">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/*
          Grid 1fr / 2fr: foto menor, texto com mais espaço.
          Os dois elementos têm a mesma altura de referência — sem desproporção.
        */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">

          {/* Coluna esquerda: foto + links sociais */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="relative w-80 h-64 md:h-64 rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl">
              <Image
                src="/AndreFernando.png"
                alt="Andre Fernando"
                fill
                className="object-cover scale-100 hover:scale-100"
              />
              {/* Status badge sobre a foto */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-[#050505]/70 backdrop-blur-sm px-2 py-1 rounded-full border border-zinc-800">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Disponível</span>
              </div>
            </div>

            {/* Social links — alinhados com a foto */}
            <div className="flex flex-col gap-2.5 w-full">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-800/50 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all"
                >
                  <s.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-500 transition-colors shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{s.label}</p>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors truncate">{s.handle}</p>
                  </div>
                  <ChevronRight className="w-3 h-3 text-zinc-700 group-hover:text-blue-500 shrink-0 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna direita: texto proporcional */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> Curitiba, PR
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tighter leading-[0.9]">
                Andre Fernando
              </h1>
              <p className="text-base font-mono text-blue-500">
                &gt; Junior Developer <span className="animate-pulse">_</span>
              </p>
            </div>

            <p className="text-base leading-relaxed text-zinc-400 max-w-lg">
              Comecei na TI pelo suporte técnico — resolvendo problemas no dia a dia,
              entendendo como as coisas quebram e por quê. Em algum momento, comecei
              a escrever scripts pra automatizar o que fazia repetido. Daí veio o interesse
              por desenvolvimento. Hoje curso Gestão de TI e construo projetos nas horas vagas.
            </p>

            <div className="pt-1">
              <a
                href="/curriculo.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all active:scale-95"
              >
                Download Currículo
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-blue-500" />
              </a>
            </div>
          </div>
        </section>

        {/* ── EXPERIÊNCIA + STACK ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Experiências */}
          <section className="space-y-8">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-blue-500" /> Experiência
            </h2>

            <div className="space-y-8 border-l border-zinc-800/50 ml-2 pl-6">
              {data.experiences.map((exp) => {
                const isExpanded = expandedIds.includes(exp.id);
                return (
                  <div key={exp.id} className="relative">
                    <div className={`absolute -left-[25px] top-2 w-2 h-2 rounded-full border-2 border-[#050505] transition-all duration-500 ${
                      isExpanded ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" : "bg-zinc-700"
                    }`} />

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{exp.period}</span>

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="flex items-start gap-2 text-left w-full group"
                      >
                        <h3 className={`text-base font-bold tracking-tight transition-colors leading-snug ${
                          isExpanded ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}>
                          {exp.title}
                        </h3>
                        <ChevronDown className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-blue-500" : "text-zinc-700"
                        }`} />
                      </button>

                      <p className="text-[11px] font-mono text-blue-500/70 uppercase tracking-widest">{exp.company}</p>

                      <div className={`grid transition-all duration-400 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                      }`}>
                        <div className="overflow-hidden text-sm leading-relaxed text-zinc-500">
                          {exp.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Stack */}
          <section className="space-y-8">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold flex items-center gap-3">
              <Code2 className="w-4 h-4 text-blue-500" /> Stack
            </h2>
            <div className="grid gap-3">
              {data.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-zinc-900/10 border border-zinc-900/50 hover:border-zinc-800 transition-all group"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-blue-400 transition-colors block mb-1.5 font-bold">
                    {skill.name}
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── ALÉM DO CÓDIGO ────────────────────────────────────────────────── */}
        <section className="space-y-8 pb-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold">
            // Além do código
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.label}
                className="group p-5 rounded-2xl border border-zinc-900/50 bg-zinc-900/10 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all"
              >
                <hobby.icon className="w-5 h-5 text-zinc-600 group-hover:text-blue-500 transition-colors mb-4" />
                <p className="text-sm font-semibold text-zinc-300 mb-1.5">{hobby.label}</p>
                <p className="text-xs leading-relaxed text-zinc-600 group-hover:text-zinc-500 transition-colors">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}