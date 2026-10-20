# oandrefl audiovisual

Site em Next.js (App Router) com home em painéis e blog em MDX.

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Onde mexer

- **Seus dados** (e-mail, LinkedIn, GitHub, WhatsApp): `lib/site.js`. WhatsApp vazio esconde o botão.
- **Textos da home**: `components/Site.js`.
- **Fotos**: `public/img/`. Troque mantendo os nomes ou ajuste as listas `HERO` e `EVENTOS`.
- **Logo**: `public/img/logo.png` (e `app/icon.png` para o favicon).

## Blog

**Dica nova:** crie um arquivo em `content/posts/nome-do-post.mdx`:

    ---
    title: "Título"
    date: "2026-10-20"
    excerpt: "Uma linha de resumo."
    tags: ["Eventos"]
    ---

    Texto aqui, com **markdown** normal.

**Link novo (Achados):** adicione um item em `content/links.json` (title, url, note, tag, date).
Os três links que já estão lá são só de exemplo, troque pelos seus.

Deploy: Vercel, importando o repositório.
