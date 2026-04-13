import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PostMatter } from "@/app/lib/mdx";

interface PostNavigationProps {
  prevPost: PostMatter | null;
  nextPost: PostMatter | null;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="mt-24 pt-8 border-t border-zinc-900">
      <div className={`grid ${prevPost && nextPost ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex flex-col gap-2 p-5 rounded-xl border border-zinc-900/50 bg-zinc-900/20 hover:border-zinc-800 transition-all"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Post Anterior
            </span>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-blue-500 transition-colors line-clamp-2">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col gap-2 p-5 rounded-xl border border-zinc-900/50 bg-zinc-900/20 hover:border-zinc-800 transition-all text-right"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 flex items-center justify-end gap-2">
              Próximo Post <ArrowRight className="w-3 h-3" />
            </span>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-blue-500 transition-colors line-clamp-2">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
