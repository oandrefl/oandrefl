import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
  <div className="flex min-h-[90vh]  items-center ">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Andre Fernando
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Entusiasta em tecnologia, em aprendizado no mundo da programacao
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projetos"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-zinc-100 rounded-lg transition-colors font-medium"
          >
            Ler Blog
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">Tecnologias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
            <div
              key={tech}
              className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-center text-zinc-300 hover:border-zinc-700 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured Projects */}
      {/* <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-zinc-100">Projetos em Destaque</h2>
          <Link
            href="/projetos"
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            Ver todos →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Projeto Incrível',
              description: 'Uma aplicação web moderna construída com Next.js e TypeScript.',
              tech: ['Next.js', 'TypeScript', 'Tailwind'],
              github: 'https://github.com/seuusuario/projeto',
              demo: 'https://projeto.vercel.app'
            },
            {
              title: 'API Robusta',
              description: 'API RESTful construída com Node.js e PostgreSQL.',
              tech: ['Node.js', 'PostgreSQL', 'Docker'],
              github: 'https://github.com/seuusuario/api',
              demo: null
            }
          ].map((project) => (
            <div
              key={project.title}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}