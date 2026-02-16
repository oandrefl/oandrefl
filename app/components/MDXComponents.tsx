import type { MDXComponents } from "mdx/types";
import type { HTMLAttributes, AnchorHTMLAttributes } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        {...props}
        className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 mt-10 tracking-tight"
      />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        {...props}
        className="text-xl font-bold text-zinc-200 mb-4 mt-8 tracking-tight"
      />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        {...props}
        className="text-lg font-semibold text-zinc-200 mb-3 mt-6 tracking-tight"
      />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <p
        {...props}
        className="text-base text-zinc-400 leading-relaxed mb-6"
      />
    ),
    code: (props: HTMLAttributes<HTMLElement>) => (
      <code
        {...props}
        className="bg-zinc-900 text-blue-400 px-1.5 py-0.5 rounded font-mono text-[0.9em] border border-zinc-800/50"
      />
    ),
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
      <pre
        {...props}
        className="bg-[#09090b] border border-zinc-800 rounded-2xl p-5 overflow-x-auto mb-8 text-sm leading-relaxed"
      />
    ),
    a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        {...props}
        className="text-blue-500 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-blue-400/50"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    ul: (props: HTMLAttributes<HTMLUListElement>) => (
      <ul
        {...props}
        className="list-none mb-6 space-y-3"
      />
    ),
    li: (props: HTMLAttributes<HTMLLIElement>) => (
      <li className="flex items-start gap-3 text-zinc-400">
        <span className="text-blue-500 mt-1.5 text-xs">●</span>
        <span {...props} />
      </li>
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <blockquote
        {...props}
        className="border-l border-blue-500/50 pl-6 italic text-zinc-500 mb-8 py-1"
      />
    ),
    hr: () => <hr className="border-zinc-900 my-12" />,
    ...components,
  };
}