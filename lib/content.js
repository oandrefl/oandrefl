import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDir = path.join(process.cwd(), "content/posts");

export function getPosts() {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, f), "utf8"));
      return { slug: f.replace(/\.mdx$/, ""), title: data.title, date: data.date, excerpt: data.excerpt || "", tags: data.tags || [] };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const file = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    minutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
  };
}

export function getLinks() {
  const file = path.join(process.cwd(), "content/links.json");
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf8")).sort((a, b) => ((a.date || "") < (b.date || "") ? 1 : -1));
}

export function formatDate(d) {
  return new Date(`${d}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" });
}
