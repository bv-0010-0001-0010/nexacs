"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, employerNav, workerNav, contactNav } from "@/lib/content/nav";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-black transition-colors duration-300 ${
        scrolled || open ? "border-white/10" : "border-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-3 px-6 py-2.5 md:px-10 2xl:px-14">
        <Link href="/" className="focus-ring shrink-0" aria-label="Nexa Construction Solutions — Home">
          <Logo gapClassName="gap-2.5 sm:gap-3 lg:gap-3" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 xl:flex xl:gap-5 2xl:gap-8">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring text-sm font-medium tracking-wide text-concrete-200 uppercase transition-colors hover:text-amber-500 2xl:text-base ${
                pathname === link.href ? "text-amber-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex xl:gap-3 2xl:gap-4">
          <Link
            href={contactNav.href}
            className="focus-ring text-sm font-medium tracking-wide text-concrete-200 uppercase hover:text-amber-500 2xl:text-base"
          >
            {contactNav.label}
          </Link>
          <Link
            href={workerNav.href}
            className="focus-ring border border-white/30 px-3 py-2 text-sm font-semibold tracking-wide text-offwhite uppercase hover:border-white 2xl:px-4 2xl:py-2.5 2xl:text-base"
          >
            {workerNav.label}
          </Link>
          <Link
            href="/request-workers"
            className="focus-ring border border-amber-500 bg-amber-500 px-3 py-2 text-sm font-semibold tracking-wide text-charcoal-950 uppercase hover:bg-amber-400 2xl:px-4 2xl:py-2.5 2xl:text-base"
          >
            Request Workers
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 p-2 xl:hidden"
        >
          <span className={`h-0.5 w-6 bg-offwhite transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-offwhite transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-offwhite transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-4">
              {[...primaryNav, employerNav, workerNav, contactNav].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring border-b border-white/10 py-3 text-base font-medium tracking-wide text-concrete-200 uppercase hover:text-amber-500"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/request-workers"
                className="focus-ring mt-4 border border-amber-500 bg-amber-500 px-4 py-3 text-center text-sm font-semibold tracking-wide text-charcoal-950 uppercase"
              >
                Request Workers
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
