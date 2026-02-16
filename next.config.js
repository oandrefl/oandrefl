const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    // mdxRs: true, // Mantemos desativado por enquanto para evitar erros de React antigo
    turbopack: {}, // <--- ADICIONE ESTA LINHA PARA RESOLVER O ERRO DE BUILD
  },
}

module.exports = withMDX(nextConfig)