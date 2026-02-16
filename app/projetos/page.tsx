import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "Suporte Técnico",
      description: "Hub de links rápidos e utilitários para otimização de atendimento remoto.",
      longDescription:
        "Desenvolvido para centralizar recursos da equipe de suporte, reduzindo o tempo de resposta em atendimentos críticos através de uma interface intuitiva e acesso rápido a ferramentas.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/andreflara/SuporteUnimed",
      demo: "https://suporteunimed.vercel.app/",
      image: "/SuporteTecnico.png",
    },
  ];

  return (
    <div className="min-h-screen text-zinc-400 font-sans selection:bg-blue-500/20">
      <main className="max-w-4xl px-6 py-16 md:py-24">
        
        {/* --- HEADER --- */}
        <header className="space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500">
            <Code2 className="w-3 h-3" /> Portfólio de Trabalho
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Projetos
          </h1>
          <p className="text-base leading-relaxed max-w-2xl">
            Uma seleção de ferramentas e aplicações que desenvolvi, focando em 
            <span className="text-zinc-200"> utilidade real</span> e interface limpa.
          </p>
        </header>

        {/* --- GRID DE PROJETOS --- */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="group flex flex-col bg-zinc-900/20 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Preview da Imagem */}
              <div className="relative aspect-video bg-zinc-900 overflow-hidden border-b border-zinc-800/50">
                {projeto.image ? (
                  <Image
                    src={projeto.image}
                    alt={projeto.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-mono text-zinc-600">
                    NO_PREVIEW_AVAILABLE
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-zinc-100 group-hover:text-blue-500 transition-colors">
                    {projeto.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {projeto.longDescription}
                  </p>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {projeto.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-zinc-400 bg-zinc-800/30 border border-zinc-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Estilo Minimalista */}
                <div className="flex items-center gap-6 pt-2 mt-auto">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}