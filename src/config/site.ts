export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Valetono: Cada vez más cerca...",
  description:
    "Página web dedicada a la divulgación del Valetono este 25 de marzo",
  navItems: [
    {
      id: "entradasLink",
      label: "Entradas",
      href: "#entradas",
    },
    {
      id: "invitadosLink",
      label: "Invitados",
      href: "#invitados",
    },
    {
      id: "ubicacionLink",
      label: "Ubicación",
      href: "#ubicacion",
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
