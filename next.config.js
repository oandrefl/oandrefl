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
  
  // 1. O 'turbopack' deve ficar aqui, fora do experimental
  turbopack: {}, 

  experimental: {
    // mdxRs: true, // Deixe desativado para evitar conflitos com React 19
  },
}

module.exports = withMDX(nextConfig)