import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Footer from "./components/FooterSection";

export const metadata: Metadata = {
  title: {
    default: "Andre Fernando",
    template: "%s | Andre Fernando"
  },
  description: "Desenvolvedor Full-Stack.",
  icons: {
    icon: "/favicon.ico", // Lembre-se de adicionar um favicon
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#050505] text-zinc-400 antialiased selection:bg-blue-500/30">
        <div className="flex flex-col min-h-screen">
          {/* Navegação Fixa ou Absoluta */}
          <Navigation />
          
          {/* O 'flex-grow' garante que o Footer sempre fique 
              no final da página, mesmo em páginas com pouco conteúdo.
          */}
          <main className="flex-grow pt-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}