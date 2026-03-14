import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Footer from "./components/FooterSection";


export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Andre Fernando",
    template: "%s | Andre Fernando"
  },
  description: "Desenvolvedor Full-Stack focado em criar experiências digitais eficientes e minimalistas.",
  keywords: ["Desenvolvedor", "Full-Stack", "Software Engineer", "Andre Fernando", "Portfolio"],
  authors: [{ name: "Andre Fernando" }],
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oandrefl.vercel.app",
    siteName: "Andre Fernando Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#050505] text-zinc-400 antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navigation />

        {/*
          SISTEMA DE MARGEM UNIFICADO:
          - px-6 md:px-16 lg:px-28 em TODOS os componentes (nav, footer, main)
          - Nunca use mx-auto ou max-w em páginas que devem alinhar à esquerda
          - Para páginas centradas (About), use mx-auto dentro do componente
        */}
        <main
          id="main-content"
          className="flex-1 pt-24 md:pt-32 pb-16 w-full px-6 md:px-16 lg:px-28"
        >
          {children}
        </main>

        <Footer />

        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1000px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full opacity-50 -translate-x-1/4" />
        </div>
      </body>
    </html>
  );
}