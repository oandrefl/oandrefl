import { Playfair_Display, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--serif" });
const sans = Poppins({ subsets: ["latin"], weight: ["400", "500"], variable: "--sans" });
const mono = Space_Mono({ subsets: ["latin"], weight: "400", variable: "--mono" });

export const metadata = {
  title: { default: "André Fernando · Audiovisual para eventos em Curitiba", template: "%s · André Fernando" },
  description: "Técnico de audiovisual em Curitiba. Áudio, Resolume, painel de LED, projeção e apresentações em eventos corporativos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
