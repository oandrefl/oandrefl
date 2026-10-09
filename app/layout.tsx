import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Footer from "./components/FooterSection";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Andre Fernando | Audiovisual e Tecnologia",
    template: "%s | Andre Fernando",
  },
  description:
    "Portfólio de André Fernando, técnico de audiovisual em Curitiba. Experiência com operação de áudio, vídeo, apresentações, painéis de LED e suporte de TI.",
  keywords: [
    "André Fernando",
    "Técnico de Audiovisual",
    "Eventos corporativos",
    "Operação de áudio",
    "Resolume",
    "Painéis de LED",
    "Curitiba",
    "Suporte de TI",
  ],
  authors: [{ name: "Andre Fernando" }],
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oandrefl.vercel.app",
    siteName: "Andre Fernando Portfolio",
    title: "Andre Fernando | Audiovisual e Tecnologia",
    description:
      "Operação técnica de áudio, vídeo e apresentações em eventos, com experiência complementar em TI e desenvolvimento.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-zinc-400 antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navigation />
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
