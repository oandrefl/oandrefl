"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900/50 bg-[#050505]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Estilizada */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-zinc-100 hover:text-blue-500 transition-colors group"
          >
            <Terminal className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="tracking-tight text-sm">andre.fl</span>
          </Link>

          {/* Links Desktop - Usando Font Mono para consistência */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                  pathname === link.href
                    ? "text-blue-500"
                    : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-[#050505] border-b border-zinc-900 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-mono uppercase tracking-[0.2em] ${
                  pathname === link.href
                    ? "text-blue-500"
                    : "text-zinc-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}