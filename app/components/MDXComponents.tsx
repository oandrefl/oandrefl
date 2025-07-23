import type { MDXComponents } from "mdx/types";
import type { HTMLAttributes } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        {...props}
        className={`text-3xl font-bold text-zinc-100 mb-6 mt-8 ${
          props.className ?? ""
        }`}
      />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        {...props}
        className={`text-2xl font-semibold text-zinc-200 mb-4 mt-8 ${
          props.className ?? ""
        }`}
      />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        {...props}
        className={`text-xl font-medium text-zinc-300 mb-3 mt-6 ${
          props.className ?? ""
        }`}
      />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <p
        {...props}
        className={`text-zinc-300 leading-relaxed mb-4 ${
          props.className ?? ""
        }`}
      />
    ),
    code: (props: HTMLAttributes<HTMLElement>) => (
      <code
        {...props}
        className={`bg-zinc-800 text-zinc-100 px-2 py-1 rounded text-sm font-mono ${
          props.className ?? ""
        }`}
      />
    ),
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
      <pre
        {...props}
        className={`bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-6 ${
          props.className ?? ""
        }`}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        {...props}
        className={`text-blue-400 hover:text-blue-300 transition-colors underline ${
          props.className ?? ""
        }`}
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    ul: (props: HTMLAttributes<HTMLUListElement>) => (
      <ul
        {...props}
        className={`list-disc list-inside text-zinc-300 mb-4 space-y-2 ${
          props.className ?? ""
        }`}
      />
    ),
    ol: (props: HTMLAttributes<HTMLOListElement>) => (
      <ol
        {...props}
        className={`list-decimal list-inside text-zinc-300 mb-4 space-y-2 ${
          props.className ?? ""
        }`}
      />
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <blockquote
        {...props}
        className={`border-l-4 border-blue-400 pl-4 italic text-zinc-400 mb-4 ${
          props.className ?? ""
        }`}
      />
    ),
    ...components,
  };
}
