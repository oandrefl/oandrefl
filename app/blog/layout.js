import Image from "next/image";
import Header from "../../components/Header";

export const metadata = { title: "Blog", description: "Dicas de audiovisual para eventos e links que achei pelo caminho." };

export default function BlogLayout({ children }) {
  return (
    <>
      <div className="scene dim" aria-hidden="true">
        <Image src="/img/palco-led.jpg" alt="" fill sizes="100vw" />
        <div className="shade deep" />
      </div>
      <Header current="blog" />
      {children}
    </>
  );
}
