import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";

/*
  SISTEMA DE TIPOGRAFIA (use em todo o site):
  
  Eyebrow / label:  text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500
  H1 (hero):        text-5xl md:text-7xl font-bold text-zinc-100 tracking-tighter leading-[0.9]
  H1 (páginas):     text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight
  Subtitle:         text-lg font-mono text-blue-500
  Body:             text-base leading-relaxed text-zinc-400 max-w-2xl
  Small/meta:       text-sm text-zinc-500
*/

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-250px)] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-4xl space-y-12">

        <header className="space-y-8">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponível para projetos
          </div>

          <div className="space-y-4">
            {/* H1 hero — text-5xl md:text-7xl em todas as páginas principais */}
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tighter leading-[0.9]">
              Andre <span className="text-zinc-500">Fernando</span>
            </h1>
            {/* Subtitle — sempre font-mono text-blue-500 */}
            <p className="text-lg font-mono text-blue-500">
              &gt; Junior Developer _
            </p>
          </div>

          {/* Texto mais humano e direto — sem jargão técnico forçado */}
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Estou aprendendo a construir coisas com código — sites, ferramentas, scripts
            que resolvem problemas reais. Gosto de entender como as coisas funcionam por dentro,
            e de vez em quando aparecem projetos que valem a pena compartilhar.
          </p>
        </header>

        {/* CTAs */}
        <nav className="flex flex-col sm:flex-row gap-4 items-start sm:items-center" aria-label="Links principais">
          <Link
            href="/projetos"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95 shadow-lg shadow-blue-500/10"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link
              href="/blog"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95"
            >
              Blog
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

      </div>
    </div>
  );
}