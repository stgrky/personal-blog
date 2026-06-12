import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";

const serif = "var(--font-serif)";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/life", label: "Life" },
  { href: "/blog", label: "Blog" },
  { href: "/web-development", label: "Web dev" },
  { href: "/#contact", label: "Contact" },
];

export type SectionLink = { href: string; label: string; id: string };

type Props = {
  sections?: SectionLink[];
};

export default function SiteNav({ sections }: Props) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(
    sections?.[0]?.id ?? null
  );

  useEffect(() => {
    if (!sections || sections.length === 0) return;
    const observers = sections
      .map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(s.id);
          },
          { rootMargin: "-40% 0px -55% 0px" }
        );
        obs.observe(el);
        return obs;
      })
      .filter(Boolean) as IntersectionObserver[];
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const isActivePage = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  return (
    <div className="sticky top-0 z-50">
      <header
        className="backdrop-blur-md"
        style={{
          backgroundColor: "rgba(253, 251, 247, 0.82)",
          borderBottom:
            sections && sections.length > 0
              ? "none"
              : "1px solid var(--warm-rule)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg leading-none whitespace-nowrap"
            style={{ fontFamily: serif, fontWeight: 500 }}
            aria-label="Grant Kyle — product to people"
          >
            <span
              style={{
                color: "var(--warm-muted)",
                fontWeight: 400,
                fontSize: "0.72em",
              }}
            >
              product&lt;
            </span>
            <span style={{ color: "var(--warm-ink)" }}> Grant Kyle </span>
            <span
              style={{
                color: "var(--warm-muted)",
                fontWeight: 400,
                fontSize: "0.72em",
              }}
            >
              &gt;people
            </span>
          </Link>

          <LayoutGroup id="site-nav">
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((item) => {
                const active = isActivePage(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-1.5 rounded-full text-sm transition-colors"
                    style={
                      active
                        ? { color: "var(--warm-accent-dark)" }
                        : { color: "var(--warm-body)" }
                    }
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="site-nav-pill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ backgroundColor: "var(--warm-accent-soft)" }}
                        transition={{
                          type: "spring",
                          bounce: 0.18,
                          duration: 0.45,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/stgrky"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ color: "var(--warm-body)" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12 24 5.65 18.85.5 12 .5z" />
              </svg>
            </a>
            <a
              href="mailto:hello@grantkyle.com"
              className="text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--warm-accent)",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Say hi
            </a>
            <MobileMenu nav={NAV} sections={sections} />
          </div>
        </div>
      </header>

      {sections && sections.length > 0 && (
        <LayoutGroup id="site-subnav">
          <div
            className="backdrop-blur-md"
            style={{
              backgroundColor: "rgba(253, 251, 247, 0.72)",
              borderBottom: "1px solid var(--warm-rule)",
            }}
          >
            <div className="mx-auto max-w-5xl px-6 py-2 flex items-center gap-1 overflow-x-auto justify-center">
              {sections.map((s) => {
                const active = activeSection === s.id;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="relative px-3 py-1 rounded-full text-[13px] whitespace-nowrap transition-colors"
                    style={
                      active
                        ? { color: "var(--warm-accent-dark)" }
                        : { color: "var(--warm-muted)" }
                    }
                  >
                    {s.label}
                    {active && (
                      <motion.span
                        layoutId="site-subnav-pill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ backgroundColor: "var(--warm-card)" }}
                        transition={{
                          type: "spring",
                          bounce: 0.18,
                          duration: 0.45,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </LayoutGroup>
      )}
    </div>
  );
}

function MobileMenu({
  nav,
  sections,
}: {
  nav: { href: string; label: string }[];
  sections?: SectionLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full transition-colors"
        style={{
          border: "1px solid var(--warm-rule)",
          backgroundColor: "var(--warm-card)",
        }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-[5px] items-center justify-center w-4 h-4">
          <span
            className={`block h-[1.5px] w-full rounded-full origin-center transition-all duration-200 ${
              isOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
            style={{ backgroundColor: "var(--warm-body)" }}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full transition-all duration-200 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
            style={{ backgroundColor: "var(--warm-body)" }}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full origin-center transition-all duration-200 ${
              isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
            style={{ backgroundColor: "var(--warm-body)" }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--warm-card)",
              border: "1px solid var(--warm-rule)",
              boxShadow: "0 18px 40px -12px rgba(42, 39, 36, 0.18)",
            }}
          >
            <nav className="flex flex-col p-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm transition-colors"
                  style={{ color: "var(--warm-ink)" }}
                >
                  {item.label}
                </Link>
              ))}
              {sections && sections.length > 0 && (
                <>
                  <div
                    className="my-2 mx-3 border-t"
                    style={{ borderColor: "var(--warm-rule)" }}
                  />
                  {sections.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 rounded-xl text-[13px] transition-colors"
                      style={{ color: "var(--warm-muted)" }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
