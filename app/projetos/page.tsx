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
    // min-h-[calc(100vh-64px)] garante que o conteúdo ocupe a tela toda menos a navbar
    // justify-center centraliza verticalmente se houver poucos itens
    <div className="min-h-screen text-zinc-400 font-sans selection:bg-blue-500/20 py-8 md:py-16">
      
      {/* max-w-4xl para manter a margem idêntica à Home e ao About */}
      <main className="max-w-4xl w-full mx-72 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* --- HEADER --- */}
        <header className="space-y-4 mb-16">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-blue-500">
            <Code2 className="w-3.5 h-3.5" /> Portfólio de Trabalho
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Projetos
          </h1>
          <p className="text-base leading-relaxed text-zinc-400 max-w-xl">
            Uma seleção de ferramentas e aplicações que desenvolvi, focando em 
            <span className="text-zinc-200"> utilidade real</span> e interface limpa.
          </p>
        </header>

        {/* --- GRID DE PROJETOS --- */}
        {/* Ajustado para 1 coluna ou 2 dependendo da tela, mas contido no max-w-4xl */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="group flex flex-col bg-zinc-900/10 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300"
            >
              {/* Preview da Imagem */}
              <div className="relative aspect-video bg-zinc-950 overflow-hidden border-b border-zinc-900">
                {projeto.image ? (
                  <Image
                    src={projeto.image}
                    alt={projeto.title}
                    fill
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] font-mono text-zinc-700">
                    NO_PREVIEW_DISPONÍVEL
                  </div>
                )}
                {/* Overlay gradiente suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h2 className="text-base font-bold text-zinc-200 group-hover:text-blue-500 transition-colors">
                    {projeto.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-zinc-500 line-clamp-3">
                    {projeto.longDescription}
                  </p>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {projeto.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800/50 px-2 py-0.5 rounded uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-2 mt-auto">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
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