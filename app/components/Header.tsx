"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* Logo cliquable */}
        <a
          href="/"
          className="
            text-2xl font-extrabold tracking-[0.25em]
            bg-gradient-to-r from-[#4fa3ff] to-[#7fc4ff]
            text-transparent bg-clip-text
            transition-opacity hover:opacity-80
          "
        >
          MOONSHELL Studio
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-lg font-medium text-white">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <a href={link.href} className="transition">
                {link.label}
              </a>

              {/* Trait bleu animé */}
              <span
                className={`
                  absolute -bottom-1 h-[2px] bg-[#4fa3ff]
                  transition-all duration-300
                  ${pathname === link.href
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"}
                `}
              ></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
