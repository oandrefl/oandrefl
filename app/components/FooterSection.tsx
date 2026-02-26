"use client";
import { Github, Linkedin, Mail, ArrowUp, Terminal } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/oandrefl", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/andrefernando/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:andrefernandolara@hotmail.com", icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 selection:bg-blue-500/20">
      {/* px-6 md:px-16 lg:px-28 — mesmo sistema do layout e da nav */}
      <div className="w-full px-6 md:px-16 lg:px-28">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Branding */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-500/80" />
              <span className="text-zinc-100 font-bold text-xl tracking-tighter">andre.fl</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
              Desenvolvedor focado em interfaces minimalistas e sistemas eficientes.
              Baseado em <span className="text-zinc-300">Curitiba, Brasil</span>.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">Navegação</h4>
            <nav>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="pt-12 border-t border-zinc-900/50 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
              © {currentYear} Andre Fernando — All Rights Reserved
            </p>
            <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
              Curitiba // PR // 25.4411° S, 49.2768° W
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800/50 hover:border-zinc-600 transition-all duration-300"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-200">Topo</span>
            <ArrowUp className="w-3 h-3 text-zinc-500 group-hover:text-blue-500 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
}