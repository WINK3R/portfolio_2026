"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/public/icons/logo.svg"

const navItems = [
  { name: "A propos", href: "/about" },
  { name: "Compétences", href: "/#skills" },
  { name: "Projets", href: "/projects" },
  { name: "Expériences", href: "/" },
];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-6 sm:px-5 flex items-center justify-center w-full">
      <div
        className={` rounded-full bg-[#F2F2F2] transition-all duration-300 ${
          isScrolled ? "max-w-5xl shadow-[0_18px_45px_rgba(0,0,0,0.12)]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 p-1.5 h-14">
          <div className="flex items-center gap-2">
            <Link
                href="/"
                aria-label="Portfolio"
                className="flex items-center justify-center mx-2"
            >
            <Logo className="size-full aspect-square" />
            </Link>
            <ul className="flex items-center gap-1 text-md">
              {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                        href={item.href}
                        className="rounded-full p-3 font-medium transition py-3 px-5 h-full text-sm hover:to-black/8 hover:bg-linear-to-b hover:from-black/5"
                    >
                      {item.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-2 h-full">
            <Link
              href="/"
              className="rounded-full flex items-center h-full px-4 py-2 text-sm font-medium text-black/60 transition bg-white/10 hover:text-black"
            >
              Voir mon CV
            </Link>
            <Link
              href="/projects"
              className="rounded-full  flex items-center bg-black text-white text-sm font-semibold transition py-3 px-6"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-3 lg:hidden">
          <Link
            href="/"
            aria-label="Portfolio"
            className="flex items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold tracking-[0.2em] text-white">
              LD
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-black"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-black/8 px-3 pb-3 pt-2 lg:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-black/72 transition hover:bg-black/[0.04] hover:text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-black/10 px-4 py-3 text-center text-sm font-medium text-black transition hover:bg-black/[0.03]"
              >
                Let&apos;s talk
              </Link>
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-black px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-black/85"
              >
                View work
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
