"use client";

import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const projetos = [
  {
    id: 1,
    title: "Suporte Técnico",
    longDescription: "Hub de links e utilitários que criei pra centralizar os recursos do time de suporte. Cansou de ficar procurando o mesmo link toda hora — então botei tudo num lugar só.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/andreflara/SuporteUnimed",
    demo: "https://suporteunimed.vercel.app/",
    image: "/SuporteTecnico.png",
  },
  {
    id: 2,
    title: "dev.finance$",
    longDescription: "Controle financeiro pessoal — registre entradas e saídas e visualize o saldo em tempo real.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/andreflara/dev.finance",
    demo: "https://dev-finance-eta.vercel.app/",
    image: "/devfinance.png",
  },
  {
    id: 3,
    title: "Search Hub",
    longDescription: "Acesso rápido a links e sites úteis, organizados num único lugar.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/andreflara/SearchHub",
    demo: "https://searchhubs.vercel.app/",
    image: "/SuporteTecnico.png",
  },
  {
    id: 4,
    title: "Escola Bíblica de Obreiros",
    longDescription: "Landing page para a Escola Bíblica de Obreiros da Assembleia de Deus em Curitiba.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/andreflara/LP-EBO",
    demo: "https://lp-ebo.vercel.app/",
    image: "/SuporteTecnico.png",
  },
];

export default function Projetos() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 space-y-16">

      {/* HEADER */}
      <header className="space-y-4 max-w-xl">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-blue-500">
          <Code2 className="w-3.5 h-3.5" /> Projetos Selecionados
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
          Trabalhos<span className="text-zinc-600">.</span>
        </h1>
        <p className="text-base leading-relaxed text-zinc-400">
          Coisas que construí pra resolver problemas reais — do trabalho ou por curiosidade.
        </p>
      </header>

      {/*
        GRID:
        - grid-cols-[repeat(auto-fill,minmax(340px,1fr))]: os cards crescem
          para preencher a linha inteira — nunca sobra um card pela metade.
        - Cada card tem altura igual via flex flex-col.
        - Dentro do card: imagem, depois conteúdo dividido em 3 zonas fixas
          (título+desc / tags / links) com mt-auto nos links para empurrar
          sempre para o fundo — independente do tamanho do texto.
      */}
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="group flex flex-col bg-zinc-900/10 border border-zinc-900/50 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
          >
            {/* Imagem — sempre 16/9, nunca varia */}
            <div className="relative aspect-[16/9] bg-zinc-950 shrink-0 overflow-hidden">
              {projeto.image ? (
                <Image
                  src={projeto.image}
                  alt={projeto.title}
                  fill
                  className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] font-mono text-zinc-800">
                  // PREVIEW
                </div>
              )}
            </div>

            {/* Conteúdo — flex-col, ocupa o restante do card */}
            <div className="p-5 flex flex-col flex-1 gap-4">

              {/* Zona 1: título + descrição — cresce para empurrar o resto */}
              <div className="flex-1 space-y-1.5">
                <h2 className="text-base font-bold text-zinc-200 group-hover:text-blue-500 transition-colors tracking-tight">
                  {projeto.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {projeto.longDescription}
                </p>
              </div>

              {/* Zona 2: tech tags — sempre na mesma posição vertical */}
              <div className="flex flex-wrap gap-1.5 min-h-[20px]">
                {(projeto.tech ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono text-zinc-500 border border-zinc-800/80 px-2 py-0.5 rounded uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Zona 3: links — sempre colados no fundo */}
              <div className="flex items-center gap-5 pt-3 border-t border-zinc-900/40">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Source
                </a>
                {projeto.demo && (
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}