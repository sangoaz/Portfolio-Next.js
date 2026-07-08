"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/parcours", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Kévin Fruchon
        </Link>

        <nav className="hidden gap-8 text-sm sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-accent"
                  : "text-muted transition-colors hover:text-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive(link.href) ? "text-accent" : "text-muted"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
