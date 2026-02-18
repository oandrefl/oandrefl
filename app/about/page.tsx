"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Code2,
  Briefcase,
  MapPin,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import data from "@/app/src/data/experiences.json";

export default function About() {
  // Estado para controlar quais experiências estão abertas
  // Começamos com a 1 e 2 abertas (as mais relevantes)
  const [expandedIds, setExpandedIds] = useState<number[]>([1, 2]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center text-zinc-400 font-sans selection:bg-blue-500/20 py-20">
      
      <main className="max-w-3xl mx-auto w-full px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* --- HEADER / HERO (Visual do Snippet 2) --- */}
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-24 text-center md:text-left">
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800 ring-4 ring-zinc-900/50">
              <Image
                src="/AndreFernando.png"
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
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight">
              Andre Fernando
            </h1>
            <p className="text-lg leading-relaxed text-zinc-400 max-w-xl">
              Estudante de Gestão de TI focado em construir soluções reais. 
              Atualmente migrando do suporte técnico para o <span className="text-zinc-200">desenvolvimento full-stack</span>.
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
          
          {/* EXPERIÊNCIAS (Visual Timeline + Funcionalidade Click) */}
          <section className="space-y-10">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-500" /> Experiência
            </h2>
            
            <div className="space-y-10 border-l border-zinc-900 pl-6">
              {data.experiences.map((exp) => {
                const isExpanded = expandedIds.includes(exp.id);

                return (
                  <div key={exp.id} className="group relative">
                    {/* Dot na linha do tempo */}
                    <div className={`absolute -left-[30px] top-1.5 w-1.5 h-1.5 rounded-full transition-colors ${isExpanded ? 'bg-blue-500' : 'bg-zinc-800 group-hover:bg-zinc-600'}`} />
                    
                    <div className="text-[10px] font-mono text-zinc-600 mb-2 uppercase tracking-tighter">
                      {exp.period}
                    </div>

                    {/* Título clicável */}
                    <button 
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-2 text-left w-full group/title"
                    >
                      <h3 className="text-base font-bold text-zinc-200 group-hover/title:text-blue-500 transition-colors">
                        {exp.title}
                      </h3>
                      <ChevronDown className={`w-4 h-4 text-zinc-700 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-500' : ''}`} />
                    </button>

                    <div className="text-[11px] text-blue-500/70 font-mono mb-3 uppercase">
                      {exp.company}
                    </div>

                    {/* Descrição que expande/contrai com animação suave */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors pt-2 border-t border-zinc-900/50 mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SKILLS / STACK (Visual fixo do Snippet 2) */}
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
                  <span className="text-sm font-bold text-zinc-300 block mb-1 group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </span>
                  <p className="text-[11px] font-mono text-zinc-600 leading-relaxed uppercase tracking-tighter">
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