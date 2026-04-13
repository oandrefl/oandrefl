export const siteConfig = {
  name: "Andre Fernando",
  shortName: "andre.fl",
  url: "https://oandrefl.vercel.app",
  description:
    "Desenvolvedor Full-Stack focado em criar experiências digitais eficientes e minimalistas.",
  location: "Curitiba, Brasil",
  coordinates: "25.4411° S, 49.2768° W",
  author: {
    name: "Andre Fernando",
    email: "andrefernandolara@hotmail.com",
  },
  social: {
    github: "https://github.com/oandrefl",
    linkedin: "https://www.linkedin.com/in/andrefernando/",
    email: "mailto:andrefernandolara@hotmail.com",
  },
  resumeUrl: "/Curriculo_Andre_Fernando.pdf",
  navigation: [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ],
  formspreeEndpoint: "https://formspree.io/f/xgvzakje",
  seo: {
    keywords: [
      "Desenvolvedor",
      "Full-Stack",
      "Software Engineer",
      "Andre Fernando",
      "Portfolio",
    ],
    twitterHandle: "@oandrefl",
  },
} as const;

export type SiteConfig = typeof siteConfig;
