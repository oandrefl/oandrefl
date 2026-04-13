'use client'
import { useState,useMemo } from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, ChevronRight, Search, X } from 'lucide-react'
import type { PostMatter } from '@/app/lib/mdx'

interface BlogClientProps {
  posts: PostMatter[]
  allTags: string[]
}

export function BlogClient({ posts, allTags }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag = selectedTag === null || post.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [posts, searchQuery, selectedTag])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTag(null)
  }

  const hasActiveFilters = searchQuery !== '' || selectedTag !== null

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <main className="max-w-4xl space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-blue-500">
            <BookOpen className="w-3.5 h-3.5" /> Escritos & Ideias
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
            Blog<span className="text-zinc-600">.</span>
          </h1>
          <p className="text-base leading-relaxed text-zinc-400 max-w-xl">
            Coisas que aprendi, erros que cometi e descobertas do dia a dia. Sem pretensão — só
            anotações de alguém que está aprendendo em público.
          </p>
        </header>

        {/* Search & Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="Buscar posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-200 placeholder-zinc-700 focus:border-blue-500/50 focus:ring-0 outline-none transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-500 border-blue-500 text-zinc-950'
                    : 'bg-zinc-900/30 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                }`}>
                #{tag}
              </button>
            ))}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 transition-all">
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Posts count */}
        <div className="text-[11px] font-mono text-zinc-600">
          {filteredPosts.length === 0
            ? 'Nenhum post encontrado'
            : `${filteredPosts.length} post${filteredPosts.length > 1 ? 's' : ''}`}
        </div>

        {/* Posts List */}
        <div className="space-y-12 border-l border-zinc-800/50 ml-1 pl-6 md:pl-8">
          {filteredPosts.length === 0 ? (
            <div className="py-8">
              <p className="text-sm text-zinc-500 italic">
                Nenhum post encontrado com os filtros atuais.
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className="group relative">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-[#050505] bg-zinc-800 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all" />

                <Link href={`/blog/${post.slug}`} className="block space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-600">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-zinc-200 group-hover:text-blue-500 transition-colors tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1 items-center">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono bg-zinc-900/50 border px-2 py-0.5 rounded transition-colors ${
                          selectedTag === tag
                            ? 'border-blue-500/50 text-blue-400'
                            : 'border-zinc-800 text-zinc-500 group-hover:border-zinc-700'
                        }`}>
                        #{tag}
                      </span>
                    ))}
                    <span className="text-[10px] font-bold text-blue-500 flex items-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
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
  )
}
