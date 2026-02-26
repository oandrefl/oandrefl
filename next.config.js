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
  turbopack: {},
  experimental: {},
  async redirects() {
    return [
      {
        source: '/it',
        destination: 'https://drive.google.com/drive/folders/1YWT1jO9_EMEbc-zFoebid3cL6VTrgOiC?usp=sharing',
        permanent: false,
      },
    ];
  },
}

module.exports = withMDX(nextConfig)