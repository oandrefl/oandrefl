"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./Header";
import { site } from "../lib/site";

const HERO = ["palco-led", "regia-plateia", "regia-yamaha"];

const EVENTOS = [
  ["palco-led", "Convenção com LED e luz ambiente"],
  ["regia-plateia", "Regia durante uma palestra"],
  ["regia-yamaha", "Mesa Yamaha, Resolume e switcher"],
  ["sala-a", "Sala de treinamento com projeção"],
  ["sala-b", "Microfones sem fio e rack de RF"],
  ["regia-resolume", "Regia de frente para o telão de LED"],
];

const SERVICOS = [
  ["Áudio", "Mesa digital, microfones sem fio, caixas e retorno. Passagem de som antes de abrir as portas."],
  ["Apresentações", "PowerPoint, troca de apresentador e passagem de slides. Cuido também de cronômetro e vídeos."],
  ["Resolume e LED", "Conteúdo para painel de LED e projeção, com a identidade do cliente rodando ao vivo."],
  ["Projeção", "Instalação, ajuste de imagem e sinal até chegar na tela, seja projetor ou telão."],
  ["Iluminação DMX", "Luz para ambientar o salão e destacar palco e palestrante."],
  ["Transmissão", "OBS e vMix para transmitir ou gravar palestras, com o áudio da mesa."],
];

function Panel({ id, view, title, sub, wide, children }) {
  return (
    <section className={`panel ${view === id ? "on" : ""}`} aria-hidden={view !== id}>
      <div className={`inner ${wide ? "wide" : ""}`}>
        <h2>{title}</h2>
        <span className="sub">{sub}</span>
        <hr className="rule" />
        {children}
      </div>
    </section>
  );
}

export default function Site() {
  const [view, setView] = useState("home");

  useEffect(() => {
    const sync = () => setView(location.hash.replace("#", "") || "home");
    const esc = (e) => e.key === "Escape" && (location.hash = "home");
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <>
      <div className="scene" aria-hidden="true">
        {HERO.map((n, i) => (
          <div className="slide" key={n} style={{ animationDelay: `${i * 7}s` }}>
            <Image src={`/img/${n}.jpg`} alt="" fill sizes="100vw" priority={i === 0} />
          </div>
        ))}
        <div className="shade" />
      </div>

      <Header current={view} />

      <main className="hero">
        <h1>Som e imagem sem susto.</h1>
        <p>
          Sou o André, técnico de audiovisual em Curitiba. Cuido de áudio, telão, painel de LED e apresentações em
          eventos corporativos. Chego antes, testo tudo e fico até o último slide.
        </p>
        <a className="pill" href="#contato">Falar comigo</a>
      </main>

      <Panel id="servicos" view={view} title="Serviços" sub="O que eu faço em um evento.">
        <div className="list">
          {SERVICOS.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <p className="foot">Montagem, cabeamento e a parte de rede e TI do evento eu resolvo junto.</p>
      </Panel>

      <Panel id="resolume" view={view} title="Resolume" sub="Conteúdo ao vivo no painel de LED.">
        <div className="feature">
          <div className="shot">
            <Image src="/img/regia-resolume.jpg" alt="Regia com notebook rodando Resolume, switcher e microfones, de frente para o palco" width={1000} height={1500} sizes="(max-width:800px) 90vw, 420px" />
          </div>
          <div>
            <div className="kicker">Resolume · Painel de LED</div>
            <h3>Quando o evento tem LED</h3>
            <p>
              Monto as composições no Resolume com a identidade do cliente e opero durante o evento: abertura, vídeos,
              contagem de tempo, mudança de pauta. Ajusto o mapeamento no painel antes do público chegar.
            </p>
            <div className="note">Se você já tem os arquivos da marca, melhor. Se não, monto algo simples com logo e cores.</div>
            <div className="specs">
              <div><b>Software</b><span>Resolume</span></div>
              <div><b>Saída</b><span>Painel de LED ou projetor</span></div>
              <div><b>Também uso</b><span>PowerPoint, OBS, vMix</span></div>
              <div><b>Onde</b><span>Curitiba e região</span></div>
            </div>
            <div className="buy">
              <div className="price">Orçamento<small>Depende do local, dos equipamentos e da duração.</small></div>
              <a className="btn" href="#contato">Pedir orçamento</a>
            </div>
          </div>
        </div>
      </Panel>

      <Panel id="eventos" view={view} title="Eventos" sub="Fotos de alguns trabalhos." wide>
        <div className="gallery">
          {EVENTOS.map(([n, c]) => (
            <figure key={n}>
              <Image src={`/img/${n}.jpg`} alt={c} width={1200} height={900} sizes="(max-width:800px) 90vw, 360px" />
              <figcaption>{c}</figcaption>
            </figure>
          ))}
        </div>
      </Panel>

      <Panel id="contato" view={view} title="Contato" sub="Pode chamar.">
        <div className="feature">
          <div>
            <div className="kicker">Orçamento</div>
            <h3>Tem um evento chegando?</h3>
            <p>Me manda a data, o local e mais ou menos quantas pessoas. Com isso já consigo dizer o que precisa levar.</p>
            <div className="actions">
              <a className="btn" href={`mailto:${site.email}`}>Enviar e-mail</a>
              {site.whatsapp && (
                <a className="btn alt" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              )}
            </div>
            <div className="specs">
              <div><b>E-mail</b><span>{site.email}</span></div>
              <div><b>Cidade</b><span>{site.city}</span></div>
              <div><b>LinkedIn</b><span><a href={site.linkedin} target="_blank" rel="noopener noreferrer">andrefernando</a></span></div>
              <div><b>GitHub</b><span><a href={site.github} target="_blank" rel="noopener noreferrer">oandrefl</a></span></div>
            </div>
          </div>
          <div className="shot">
            <Image src="/img/autor.jpg" alt="André na regia, com a mesa de som e o salão ao fundo" width={1000} height={1333} sizes="(max-width:800px) 90vw, 420px" />
          </div>
        </div>
      </Panel>
    </>
  );
}
