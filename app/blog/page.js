import Link from "next/link";
import { getPosts, getLinks, formatDate } from "../../lib/content";

export default function Blog() {
  const posts = getPosts();
  const links = getLinks();
  const host = (u) => new URL(u).hostname.replace(/^www\./, "");

  return (
    <main className="doc">
      <h1>Blog</h1>
      <p className="lede">Anotações do dia a dia de evento e links de audiovisual que achei úteis.</p>

      <h2 className="sec">Dicas</h2>
      {posts.length === 0 && <p className="lede">Ainda não tem nada aqui.</p>}
      <div className="posts">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post">
            <time dateTime={p.date}>{formatDate(p.date)}</time>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </Link>
        ))}
      </div>

      <h2 className="sec">Achados</h2>
      <div className="links">
        {links.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="lnk">
            <span className="tag">{l.tag}</span>
            <strong>{l.title}</strong>
            <p>{l.note}</p>
            <small>{host(l.url)} ↗</small>
          </a>
        ))}
      </div>
    </main>
  );
}
