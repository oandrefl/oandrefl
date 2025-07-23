"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Coffee,
  ArrowUp,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/seuusuario",
    icon: Github,
    label: "GitHub",
    color: "hover:text-gray-300 hover:bg-gray-800/50",
  },
  {
    href: "https://linkedin.com/in/seuusuario",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-500/10",
  },
  {
    href: "https://twitter.com/seuusuario",
    icon: Twitter,
    label: "Twitter",
    color: "hover:text-sky-400 hover:bg-sky-500/10",
  },
  {
    href: "mailto:seu@email.com",
    icon: Mail,
    label: "Email",
    color: "hover:text-purple-400 hover:bg-purple-500/10",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2 rounded-full transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Quick Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-400 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} oandrefl.</span>
            <Coffee className="w-4 h-4 text-gray-500" />
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-xs text-zinc-500 group-hover:text-blue-400 transition-colors">
              Topo
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
