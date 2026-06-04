import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "../components/SiteNav";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const serif = "var(--font-serif)";
const kicker =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--warm-muted)]";

export default function GrantLanding() {
  return (
    <main
      className="min-h-screen w-full antialiased"
      style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
    >
      <SiteNav />

      {/* ── HERO ── TODO: new homepage intro copy goes here */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p
              className="text-sm uppercase tracking-[0.22em]"
              style={{ color: "var(--warm-muted)" }}
            >
              [ new homepage intro — coming ]
            </p>
            <h1
              className="mt-6 text-3xl md:text-[2.4rem] leading-[1.25] tracking-tight"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                color: "var(--warm-ink)",
              }}
            >
              Placeholder headline.
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--warm-body)" }}
            >
              Drop the new intro paragraph(s) here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TWO DOORS ── */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--warm-rule)",
          backgroundColor: "var(--warm-bg-soft)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mb-12"
          >
            <p className={kicker}>Two sides</p>
            <h2
              className="text-2xl md:text-3xl mt-3 leading-snug max-w-xl"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                color: "var(--warm-ink)",
              }}
            >
              Pick a door — they&apos;re both me.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <DoorCard
              href="/work"
              label="The work"
              title="Customer success, technical depth, and operations."
              body="The professional side. Skills, experience, case studies, how I work. Built up over a decade of working with customers, products, and engineering teams."
              cta="See the work →"
            />
            <DoorCard
              href="/life"
              label="The life"
              title="The version of me that doesn&rsquo;t show up on LinkedIn."
              body="The personal side. Where I&rsquo;m from, what I&rsquo;m into, what I&rsquo;ve been reading. A page that grows slower — and that&rsquo;s the point."
              cta="See the life →"
            />
          </div>
        </div>
      </section>

      {/* ── NOW / RECENT BUILD ── */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Now</p>
            <h2
              className="text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight mt-3"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                color: "var(--warm-ink)",
              }}
            >
              Currently building.
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--warm-body)" }}
            >
              Modern, client-managed websites for therapists in private
              practice. Built on Next.js and Sanity so the practice owner can
              edit any page and publish blog posts themselves — without a
              developer in the loop.
            </p>
            <Link
              href="/web-development"
              className="mt-8 inline-flex items-center gap-2 text-base transition-colors hover:underline"
              style={{
                color: "var(--warm-accent-dark)",
                fontFamily: serif,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              See what&apos;s included →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="border-t"
        style={{
          borderColor: "var(--warm-rule)",
          backgroundColor: "var(--warm-bg-soft)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Get in touch</p>
            <h2
              className="text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight mt-3"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                color: "var(--warm-ink)",
              }}
            >
              Happy to talk shop.
            </h2>
            <p
              className="mt-6 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ color: "var(--warm-body)" }}
            >
              Customer success, technical work, or building things in the
              mental health space — happy to hear from you. Email or LinkedIn,
              whichever&apos;s easier.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@grantkyle.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-95"
                style={{
                  backgroundColor: "var(--warm-accent)",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                hello@grantkyle.com
              </a>
              <a
                href="https://www.linkedin.com/in/sgrantkyle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm transition-colors"
                style={{
                  backgroundColor: "#fff",
                  color: "var(--warm-accent-dark)",
                  border: "1px solid var(--warm-rule)",
                  fontWeight: 500,
                }}
              >
                LinkedIn ↗
              </a>
            </div>

            <p
              className="mt-6 text-xs"
              style={{ color: "var(--warm-muted)" }}
            >
              I reply within a couple of days. Prefer a call? Send a few times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="border-t"
        style={{
          borderColor: "var(--warm-rule)",
          backgroundColor: "var(--warm-bg)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs">
          <div style={{ color: "var(--warm-muted)" }}>
            <span
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                color: "var(--warm-ink)",
              }}
            >
              Grant Kyle
            </span>{" "}
            · © {new Date().getFullYear()} · Made with care in Austin
          </div>
          <div
            className="flex items-center gap-5"
            style={{ color: "var(--warm-muted)" }}
          >
            <Link href="/work" className="hover:underline">
              Work
            </Link>
            <Link href="/life" className="hover:underline">
              Life
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <a
              href="https://github.com/stgrky"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function DoorCard({
  href,
  label,
  title,
  body,
  cta,
}: {
  href: string;
  label: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="block group rounded-2xl p-8 md:p-10 transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--warm-card)",
        border: "1px solid var(--warm-rule)",
      }}
    >
      <p
        className="text-[11px] mb-5 tracking-[0.22em] uppercase"
        style={{ color: "var(--warm-accent)" }}
      >
        {label}
      </p>
      <h3
        className="text-2xl md:text-[1.8rem] leading-snug"
        style={{
          fontFamily: serif,
          fontWeight: 500,
          color: "var(--warm-ink)",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="mt-4 text-base leading-relaxed"
        style={{ color: "var(--warm-body)" }}
      >
        {body}
      </p>
      <p
        className="mt-6 text-sm transition-colors"
        style={{
          color: "var(--warm-accent-dark)",
          fontFamily: serif,
          fontStyle: "italic",
          fontWeight: 500,
        }}
      >
        {cta}
      </p>
    </Link>
  );
}

