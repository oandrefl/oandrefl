"use client";

import { Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/app/src/config/site";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${siteConfig.url}${url}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
        Compartilhar
      </span>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/50 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
        aria-label="Compartilhar no Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/50 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
        aria-label="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className="group p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/50 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
        aria-label="Copiar link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
