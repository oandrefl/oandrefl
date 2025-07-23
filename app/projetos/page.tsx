import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "Suporte Técnico",
      description:
        "Site com links rápidos para suporte externo da equipe do suporte técnico.",
      longDescription:
        "Um site simples criado utilizando HTML, CSS e JavaScript, com o objetivo de auxiliar a equipe de suporte técnico na realização de atendimentos remotos, reunindo arquivos e links em um só lugar.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/andreflara/SuporteUnimed",
      demo: "https://suporteunimed.vercel.app/",
      image: "/SuporteTecnico.png",
    },
  ];

  return (
    <div className="min-h-screen space-y-12 pt-12 pb-60 px-4 sm:px-6 lg:px-8">
      {/* Título e introdução */}
      <div className="space-y-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100">
          Projetos
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
          Aqui você encontra uma seleção dos meus projetos mais recentes — desenvolvidos com foco em experiência do usuário e boas práticas de desenvolvimento.
        </p>
      </div>

      {/* Grade de projetos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors flex flex-col"
          >
            <div className="h-full w-full rounded-xl bg-black border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              {/* Imagem do projeto */}
              <div className="relative h-48 sm:h-56 bg-zinc-800">
                {projeto.image ? (
                  <Image
                    src={projeto.image}
                    alt={`Imagem do projeto ${projeto.title}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
                    Sem imagem disponível
                  </div>
                )}
              </div>

              {/* Conteúdo do projeto */}
              <div className="p-4 sm:p-6 flex flex-col justify-between">
                {/* Título */}
                <div className="flex items-start justify-between mb-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {projeto.title}
                  </h2>
                </div>

                {/* Descrição */}
                <p className="text-zinc-400 mb-2 line-clamp-3 text-sm sm:text-base">
                  {projeto.longDescription}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-auto pt-2">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código-fonte
                  </a>
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
