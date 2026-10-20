import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPost, getPosts, formatDate } from "../../../lib/content";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post não encontrado" };
  return { title: post.title, description: post.excerpt };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { content } = await compileMDX({ source: post.content });

  return (
    <main className="doc narrow">
      <Link href="/blog" className="back">← Voltar</Link>
      <h1>{post.title}</h1>
      <p className="meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min de leitura
      </p>
      <article className="prose">{content}</article>
    </main>
  );
}
