import Image from "next/image";

import {
  Code,
  Briefcase,
  User,
  Download,
  MapPin,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      id: 1,
      title: "Técnico de Suporte N1",
      company: "Quality S.A.",
      period: "Jul 2022 - Mai 2025",
      duration: "2 anos e 11 meses",
      description:
        "Atendimento remoto aos usuários, resolução de incidentes técnicos, acesso remoto, suporte ao pacote Office, configuração de impressoras e sistemas internos. Atuação em home office com foco em excelência no atendimento ao cliente.",
      highlights: [
        "Windows",
        "Suporte Técnico",
        "Office 365",
        "Atendimento Remoto",
      ],

      current: false,
    },

    {
      id: 2,

      title: "Técnico de TI Voluntário",

      company: "UMADC Curitiba / IEADC",

      period: "2020 - Presente",

      duration: "4+ anos",

      description:
        "Suporte técnico voluntário em eventos e atividades da igreja, incluindo montagem de equipamentos, operação de som e assistência geral em TI.",

      highlights: ["Redes", "Manutenção", "Áudio Digital", "Eventos"],

      current: true,
    },

    {
      id: 3,

      title: "Jovem Aprendiz Administrativo",

      company: "",

      period: "2018 - 2020",

      duration: "2 anos",

      description:
        "Atuação nas áreas administrativas com foco em organização de documentos, atendimento interno e suporte em rotinas de escritório.",

      highlights: [
        "Rotinas Administrativas",
        "Organização",
        "Suporte Interno",
        "Atendimento",
      ],

      current: false,
    },
  ];

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],

    Backend: ["Node.js", "Prisma", "PostgreSQL"],

    DevOps: ["Docker", "Vercel", "Git/GitHub"],

    Design: ["Figma", "Design Systems", "UX/UI", "Responsive Design"],
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Hero Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image & Stats */}

          <div className="space-y-8">
            <div className="relative">
              <div className="relative w-[550px] h-[450px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <Image
                  src="/AndreFernando.jpg"
                  alt="Andre Fernando sorrindo de perfil com fundo escuro"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Introduction */}

          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <div className="flex items-center gap-2 text-blue-700 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Curitiba, PR
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Olá, sou o
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-zinc-400">
                  Andre Fernando
                </span>
              </h1>

              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                <strong className="text-white">Desenvolvedor Full-Stack</strong>{" "}
                com paixão por experiências digitais que unem{" "}
                <span className="text-blue-600">performance</span>,
                <span className="text-blue-500"> design</span> e{" "}
                <span className="text-blue-400">inovação</span>.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Especialista em React, Next.js e Node.js, transformo ideias
                complexas em soluções modernas, eficientes e escaláveis.
              </p>
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contato"
                  aria-label="Entrar em contato com Andre Fernando"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Entrar em Contato
                  <User className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <a
                  href="/projetos"
                  aria-label="Ver projetos de Andre Fernando"
                  className="flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-300 font-semibold rounded-xl hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
                >
                  Ver Projetos
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tecnologias & Ferramentas
            </h2>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Um arsenal completo de tecnologias modernas para criar soluções de
              ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, tools]) => (
              <div
                key={category}
                className="group p-6 bg-zinc-900/40 backdrop-blur border border-zinc-800 rounded-xl hover:border-blue-800/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />

                  {category}
                </h3>

                <div className="space-y-2">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-800 rounded-full group-hover:bg-blue-600 transition-colors"></div>

                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Jornada Profissional
            </h2>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Uma trajetória de crescimento constante e conquistas
              significativas
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}

            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-900 hidden lg:block"></div>

            <div className="space-y-8">
              {experiences.map((exp) => {
                const {
                  id,
                  title,
                  company,
                  period,
                  duration,
                  description,
                  highlights,
                  current,
                } = exp;
                return (
                  <div key={id} className="relative group">
                    <div className="absolute left-6 w-4 h-4 bg-blue-700 rounded-full border-4 border-black z-10 group-hover:bg-blue-500 transition-colors hidden lg:block"></div>

                    <div className="lg:ml-16 p-8 bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl hover:border-blue-800/40 transition-all duration-300 hover:bg-zinc-900/70">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {title}
                          </h3>
                          <p className="text-blue-600 font-medium">{company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                          <span className="text-sm text-zinc-400 mb-1">
                            {period}
                          </span>
                          <span className="text-xs text-zinc-500">
                            ({duration})
                          </span>
                          {current && (
                            <span className="inline-block px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full mt-2">
                              Atual
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-300 text-xs rounded-full hover:bg-blue-800/40 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
