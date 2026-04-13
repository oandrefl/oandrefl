import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getPostData, getSortedPostsData } from "@/app/lib/mdx";
import type { Metadata } from "next";
import { PostNavigation } from "@/app/components/PostNavigation";
import { ShareButtons } from "@/app/components/ShareButtons";
import { ScrollProgress } from "@/app/components/ScrollProgress";

const BASE_URL = "https://oandrefl.vercel.app";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: "Post não encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: "Andre Fernando" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: `${BASE_URL}/blog/${slug}`,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) return notFound();

  const allPosts = await getSortedPostsData();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen text-zinc-400 font-sans selection:bg-blue-500/20">
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Voltar para a lista
          </Link>

          <header className="space-y-6 mb-12 border-b border-zinc-900 pb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>{post.readTime} min de leitura</span>
              </div>

              {post.tags && (
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-blue-500" />
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="hover:text-zinc-300 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          <article className="prose prose-zinc prose-invert max-w-none
            prose-headings:text-zinc-100 prose-headings:tracking-tight
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-zinc-200 prose-code:text-blue-400
            prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
            {post.content}
          </article>

          <footer className="space-y-8 mt-24 pt-8 border-t border-zinc-900">
            <ShareButtons title={post.title} url={`/blog/${slug}`} />
            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
            <p className="text-xs font-mono text-zinc-600 text-center uppercase tracking-[0.2em]">
              Obrigado por ler até aqui.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
