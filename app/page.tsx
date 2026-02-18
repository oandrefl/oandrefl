import { Github, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    // min-h-[calc(100vh-80px)] desconta a altura da sua navbar (h-16)
    // Usamos flex e justify-center para centralização vertical real
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center selection:bg-blue-500/20">
      {/* Container com max-w-4xl para alinhar com o seu Navbar */}
      <div className="max-w-7xl w-full items-center mx-auto px-4 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <div className="space-y-2">
          {/* Badge de Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            Disponível para novos desafios
          </div>

          <div className="space-y-1">
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
              Andre <span className="text-zinc-500">Fernando</span>
            </h1>
            <h2 className="text-lg md:text-xl font-mono text-blue-500/80 tracking-tight">
              Junior Developer & Tech Enthusiast
            </h2>
          </div>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Aprendendo a transformar código em ferramentas úteis,
            preferencialmente direto pelo{" "}
            <span className="text-zinc-200">terminal</span>, <br/>
            Curioso por sistemas, música e o que acontece nos bastidores.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/projetos"
            className="group inline-flex items-center px-6 py-3 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white rounded-xl transition-all font-bold text-sm active:scale-95"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-xl transition-all font-bold text-sm active:scale-95"
          >
            Blog
          </Link>

          <div className="hidden md:flex items-center gap-4 ml-4">
            <div className="h-px w-8 bg-zinc-800"></div>
            <a
              href="https://github.com/oandrefl"
              target="_blank"
              className="p-2 text-zinc-500 hover:text-white transition-colors border border-transparent hover:border-zinc-800 rounded-lg"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
