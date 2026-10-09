import { Github, ArrowRight, AudioLines, MonitorPlay, Radio, Cable, Code2 } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    icon: AudioLines,
    title: "Áudio",
    description: "Operação de mesas e sistemas de som, microfones e apoio técnico durante eventos.",
  },
  {
    icon: MonitorPlay,
    title: "Vídeo e apresentações",
    description: "Operação de PowerPoint, projeção, conteúdo para painéis de LED e Resolume.",
  },
  {
    icon: Radio,
    title: "Transmissão",
    description: "Apoio a transmissões ao vivo e operação com ferramentas como OBS Studio e vMix.",
  },
  {
    icon: Cable,
    title: "Estrutura e suporte",
    description: "Montagem, cabeamento, redes locais e resolução de problemas técnicos no evento.",
  },
];

const tools = [
  "Mesas de áudio",
  "Resolume",
  "PowerPoint",
  "Painéis de LED",
  "DMX",
  "OBS Studio",
  "vMix",
  "Holyrics",
  "Redes e infraestrutura",
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-250px)] flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-5xl space-y-20">
        <header className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase w-fit">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Audiovisual · Tecnologia · Curitiba/PR
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tighter leading-[0.95]">
              Andre <span className="text-zinc-500">Fernando</span>
            </h1>
            <p className="text-lg font-mono text-blue-500">
              &gt; Técnico de Audiovisual _
            </p>
          </div>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Trabalho com operação técnica em eventos corporativos, principalmente áudio,
            vídeo, apresentações e painéis de LED. Minha experiência com suporte de TI
            também ajuda na montagem, nas redes e na resolução de imprevistos durante os eventos.
          </p>
        </header>

        <nav className="flex flex-col sm:flex-row gap-4 items-start sm:items-center" aria-label="Links principais">
          <Link
            href="/about"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95"
          >
            Sobre mim e experiência
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link
              href="/projetos"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95"
            >
              Projetos
            </Link>
            <a
              href="https://github.com/oandrefl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-zinc-500 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-700 rounded-xl bg-zinc-900/30 active:scale-95"
              title="GitHub"
              aria-label="Acessar meu perfil no GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </nav>

        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold">
              // No que eu trabalho
            </h2>
            <p className="text-sm text-zinc-500 max-w-2xl">
              Um pouco do que faz parte da rotina de preparação e operação técnica de eventos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area) => (
              <article
                key={area.title}
                className="p-6 rounded-2xl border border-zinc-900/70 bg-zinc-900/10 hover:border-zinc-800 transition-colors"
              >
                <area.icon className="w-5 h-5 text-blue-500 mb-5" />
                <h3 className="text-base font-bold text-zinc-200 mb-2">{area.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold">
            // Ferramentas e sistemas
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-2 rounded-lg border border-zinc-800/80 bg-zinc-900/30 text-xs text-zinc-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-900 pt-8 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-lg font-bold text-zinc-200 mb-2">TI e desenvolvimento também fazem parte.</h2>
            <p className="text-sm leading-relaxed text-zinc-500">
              Trago experiência com suporte técnico, redes e automação, além de projetos pessoais
              com desenvolvimento web. Essas áreas complementam meu trabalho no audiovisual.
            </p>
          </div>
          <Link href="/projetos" className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors shrink-0">
            Ver projetos de tecnologia <Code2 className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
