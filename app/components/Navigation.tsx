"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/app/src/config/site";

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "h-16 bg-[#050505]/40 backdrop-blur-md"
          : "h-24 bg-transparent"
      }`}
      aria-label="Navegação Principal"
    >
      <div className="w-full px-6 md:px-16 lg:px-28 h-full flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className={`w-5 h-5 transition-colors duration-300 ${scrolled ? "text-blue-500" : "text-zinc-500"}`} />
          <span className="text-zinc-100 font-medium tracking-tighter text-lg">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-zinc-900/40 p-1 rounded-full border border-zinc-800/50 backdrop-blur-sm">
          {siteConfig.navigation.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-[11px] font-mono uppercase tracking-widest transition-all rounded-full relative ${
                  isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-zinc-100 rounded-full -z-10 animate-in fade-in zoom-in-95 duration-300" />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-6 space-y-8">
          {siteConfig.navigation.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl font-bold tracking-tighter transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${pathname === link.href ? "text-blue-500" : "text-zinc-500 hover:text-zinc-100"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}