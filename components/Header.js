"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site } from "../lib/site";

const items = [
  ["home", "Home", "/#home", "hm"],
  ["servicos", "Serviços", "/#servicos", ""],
  ["resolume", "Resolume", "/#resolume", "hm"],
  ["eventos", "Eventos", "/#eventos", ""],
  ["blog", "Blog", "/blog", ""],
  ["contato", "Contato", "/#contato", ""],
];

export default function Header({ current = "home" }) {
  const isHome = current === "home";
  const navRef = useRef(null);
  const [ind, setInd] = useState({ x: 0, show: false });
  const [anim, setAnim] = useState(false);

  // Barrinha: um único elemento que desliza até o item ativo
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const a = nav.querySelector('[aria-current="page"]');
      if (a && a.offsetWidth > 0) setInd({ x: a.offsetLeft + a.offsetWidth / 2 - 9, show: true });
      else setInd((p) => ({ ...p, show: false }));
    };
    measure();
    const t = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => { cancelAnimationFrame(t); ro.disconnect(); };
  }, [current]);

  return (
    <header className={isHome ? "" : "solid"}>
      <div className="brand">
        <a href="/#home" className="logo" aria-label={`${site.brand}, início`}>
          <Image src="/img/logo.png" alt={site.brand} width={56} height={56} priority />
        </a>
        {isHome && <span className="wordmark">OANDREFL</span>}
      </div>
      <nav ref={navRef}>
        {items.map(([id, label, href, cls]) => (
          <a key={id} href={href} className={cls} aria-current={current === id ? "page" : undefined}>
            {label}
          </a>
        ))}
        <span
          className={`ind ${anim ? "anim" : ""}`}
          style={{ transform: `translateX(${ind.x}px)`, opacity: ind.show ? 1 : 0 }}
          aria-hidden="true"
        />
      </nav>
      <span className="where" key={isHome ? "city" : "user"}>{isHome ? site.city : "oandrefl"}</span>
    </header>
  );
}
