import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavbarUI
      className="fixed h-[70px] top-4 z-50 left-1/2 transform -translate-x-1/2 shadow-md 
             rounded-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
             border-2 border-nilton-neon bg-white/30 backdrop-blur-md"
    >
      <NavbarContent className="flex-1">
        <NavbarBrand>
          <a
            className="font-bold text-inherit flex items-center gap-2"
            color="foreground"
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
          >
            <img
              alt="Nilton Logo"
              className="w-auto hidden sm:block h-8 lg:h-10 lg:ml-10"
              src="/info.png"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className="sm:mr-4 lg:mr-10 font-bold text-sm md:text-lg transition-colors hover:text-black/80"
              color="foreground"
            >
              {item.label}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NavbarUI>
  );
};
