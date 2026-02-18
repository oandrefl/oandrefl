"use client";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/seuusuario",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/seuusuario",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:seu@email.com",
    icon: Mail,
    label: "Email",
  },
];

const quickLinks = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-900/50 bg-[#050505] py-12 selection:bg-blue-500/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Branding sutil */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-100 font-bold">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span>andre.fl</span>
            </div>
            <p className="text-xs font-mono tracking-tight text-zinc-500 max-w-[200px]">
              Desenvolvendo experiências digitais de Curitiba para o mundo.
            </p>
          </div>

          {/* Navegação e Social */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">Navegação</h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-blue-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            © {currentYear} Andre Fernando — All rights reserved
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-all duration-300"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Back to top</span>
            <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
              <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}