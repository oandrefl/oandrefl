import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen justify-between selection:bg-blue-500/20">
      {/* --- HERO SECTION --- */}
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        <div className="space-y-4">
          {/* Badge de Status Sutil */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos desafios
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight">
            Andre <span className="text-zinc-500">Fernando</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Desenvolvedor Full-Stack em Curitiba. 
            Construindo o futuro da web através de <span className="text-zinc-200">interfaces minimalistas</span> e <span className="text-zinc-200">código eficiente</span>.
          </p>
        </div>
        
        {/* CTAs Dinâmicos */}
        <div className="flex flex-wrap gap-5 items-center">
          <Link
            href="/projetos"
            className="group inline-flex items-center px-8 py-4 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white rounded-2xl transition-all font-bold text-sm shadow-lg shadow-white/5 active:scale-95"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-2xl transition-all font-bold text-sm active:scale-95"
          >
            Ler Blog
          </Link>

          <div className="h-px w-12 bg-zinc-800 hidden md:block"></div>

          <div className="flex gap-5">
            <a 
              href="https://github.com/seuusuario" 
              target="_blank" 
              className="text-zinc-500 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            {/* Você pode adicionar LinkedIn aqui também */}
          </div>
        </div>
      </div>
    </div>
  )
}