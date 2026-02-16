import Link from "next/link";
import { getSortedPostsData } from "@/app/lib/mdx";
import { BookOpen, Calendar, ChevronRight } from "lucide-react";

export default async function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen text-zinc-400 font-sans selection:bg-blue-500/20">
      <main className="max-w-4xl px-6 py-16 md:py-24">
        
        {/* --- HEADER --- */}
        <header className="space-y-4 mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-500">
            <BookOpen className="w-3 h-3" /> Escritos & Ideias
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Blog
          </h1>
          <p className="text-base leading-relaxed max-w-xl">
            Anotações sobre desenvolvimento full-stack, carreira em TI e 
            as tecnologias que venho explorando no dia a dia.
          </p>
        </header>

        {/* --- POSTS LIST --- */}
        <div className="space-y-12 border-l border-zinc-800/50 ml-1 pl-6 md:pl-8">
          {posts.length === 0 ? (
            <div className="py-8">
              <p className="text-sm text-zinc-500 italic">O blog ainda está sendo preparado. Volte em breve.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group relative">
                {/* Indicador na linha do tempo */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-[#09090b] bg-zinc-800 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all" />

                <Link href={`/blog/${post.slug}`} className="block space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-600">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-zinc-200 group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-zinc-500 bg-zinc-900/50 border border-zinc-800 px-2 py-0.5 rounded group-hover:border-zinc-700 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                    <span className="text-[10px] font-bold text-blue-500 flex items-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      Ler mais <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}