import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Footer from "./components/FooterSection";

export const metadata: Metadata = {
  title: "oandrefl",
  description: "Site pessoal de testes de codigo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-zinc-950">
          <Navigation />
          <main className="container mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
