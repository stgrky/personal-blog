import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const serif = "var(--font-serif)";
const kicker =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--warm-muted)]";

const LifePage = () => {
  return (
    <>
      <Head>
        <title>The life — Grant Kyle</title>
        <meta
          name="description"
          content="The version of me that doesn't show up on LinkedIn. Slowly being filled in."
        />
      </Head>

      <main
        className="min-h-screen w-full antialiased"
        style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
      >
        <SiteNav />

        {/* ── HERO ── */}
        <section>
          <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <p
                className="mb-7 text-base"
                style={{
                  fontFamily: serif,
                  color: "var(--warm-accent)",
                  fontStyle: "italic",
                }}
              >
                The life —
              </p>
              <h1
                className="text-4xl md:text-[3.4rem] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: "var(--warm-ink)",
                }}
              >
                The version of me that doesn&apos;t show up on LinkedIn.
              </h1>
              <p
                className="mt-7 max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--warm-body)" }}
              >
                A slowly-growing page about the parts of life that happen
                outside the work. I&apos;ll add to it as I think of things
                worth saying.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTIONS ── */}
        <Placeholder
          kicker="01"
          title="Where I&rsquo;m from."
          hint="A few sentences about your hometown, how you ended up in Austin, family roots."
        />

        <Placeholder
          kicker="02"
          title="What I&rsquo;m into."
          hint="Hobbies, weekend rhythms, the stuff you make time for outside of work. Honest, not curated."
        />

        <Placeholder
          kicker="03"
          title="What I&rsquo;ve been reading."
          hint="A short list of books or articles that have stuck with you recently. Updated when it stops being true."
        />

        <Placeholder
          kicker="04"
          title="What I&rsquo;ve been listening to."
          hint="Music, podcasts, anything that&rsquo;s been on rotation. Optional embed of a playlist or two."
        />

        <Placeholder
          kicker="05"
          title="The little things."
          hint="Small details that feel like you — favorite coffee order, opinions about commas, anything that wouldn&rsquo;t fit on a resume."
        />

        {/* ── CLOSE ── */}
        <section
          className="border-t"
          style={{
            borderColor: "var(--warm-rule)",
            backgroundColor: "var(--warm-bg-soft)",
          }}
        >
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
            >
              <p
                className="text-xl md:text-2xl leading-snug max-w-xl mx-auto"
                style={{
                  fontFamily: serif,
                  fontStyle: "italic",
                  color: "var(--warm-ink)",
                  fontWeight: 500,
                }}
              >
                More to come — this is the page that grows the slowest, and
                I&apos;m okay with that.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/work"
                  className="text-sm transition-colors hover:underline"
                  style={{ color: "var(--warm-accent-dark)" }}
                >
                  See the work →
                </Link>
                <Link
                  href="/blog"
                  className="text-sm transition-colors hover:underline"
                  style={{ color: "var(--warm-accent-dark)" }}
                >
                  Read the blog →
                </Link>
              </div>
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
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/work" className="hover:underline">
                Work
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
    </>
  );
};

function Placeholder({
  kicker: kickerText,
  title,
  hint,
}: {
  kicker: string;
  title: string;
  hint: string;
}) {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
        >
          <p
            className="text-[11px] mb-4 tracking-[0.22em] uppercase"
            style={{ color: "var(--warm-accent)" }}
          >
            {kickerText}
          </p>
          <h2
            className="text-2xl md:text-[2rem] leading-snug mb-6"
            style={{
              fontFamily: serif,
              fontWeight: 500,
              color: "var(--warm-ink)",
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              backgroundColor: "var(--warm-bg-soft)",
              border: "1px dashed var(--warm-rule)",
              color: "var(--warm-muted)",
            }}
          >
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-2"
              style={{ color: "var(--warm-muted)" }}
            >
              Draft —
            </p>
            <p className="text-base leading-relaxed italic">{hint}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LifePage;
