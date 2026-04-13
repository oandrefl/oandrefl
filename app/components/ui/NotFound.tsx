import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";
import { siteConfig } from "@/app/src/config/site";

export function NotFound({
  title = "404",
  description = "A página que você está procurando não existe ou foi movida.",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 text-blue-500">
          <Terminal className="w-6 h-6" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Error</span>
        </div>
        <h1 className="text-8xl md:text-9xl font-bold text-zinc-800 tracking-tighter">
          {title}
        </h1>
        <p className="text-zinc-400 max-w-md mx-auto">{description}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95"
        >
          <Home className="w-4 h-4" />
          Início
        </Link>

        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-xl transition-all font-mono text-[11px] uppercase tracking-widest font-bold active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
      </div>

      <div className="pt-8 border-t border-zinc-900 w-full max-w-sm">
        <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider">
          Talvez você esteja procurando por:
        </p>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {siteConfig.navigation.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
