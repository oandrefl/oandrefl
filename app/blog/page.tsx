import Link from 'next/link'
import { getSortedPostsData } from '@/app/lib/mdx'

export default async function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen space-y-12 pt-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-zinc-100">Blog</h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Algumas anotacoes sobre tecnologia e experiências pessoais.
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-400 mb-4">Nenhum post encontrado.</p>
            <p className="text-sm text-zinc-500">
              Adicione arquivos .mdx na pasta <code className="bg-zinc-800 px-2 py-1 rounded">content/blog</code>
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  )
}