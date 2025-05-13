export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hill Climbing",
  description:
    "Página web dedicada a la divulgación de la ciencia y la tecnología, con un enfoque en la inteligencia artificial y los algoritmos genéticos.",
  navItems: [
    {
      id: "entradasLink",
      label: "Entradas",
      href: "#entradas",
    },
    {
      id: "algoritmosLink",
      label: "Algoritmos Genéticos",
      href: "#algoritmo-geneticos",
    },
    {
      id: "nostrosLink",
      label: "Nosotros",
      href: "#nosotros",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
