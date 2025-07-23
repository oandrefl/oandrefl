import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostData } from "@/app/lib/mdx";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) return notFound();

  return (
    <div className="space-y-8">
      {/* Botão Voltar */}
      <Link
        href="/blog"
        className="inline-flex items-center text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar ao Blog
      </Link>

      {/* Cabeçalho do Post */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min de leitura</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Conteúdo do Post */}
      <article className="prose-custom">{post.content}</article>
    </div>
  );
}
