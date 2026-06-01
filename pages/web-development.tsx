import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

/* ─── Unsplash CDN images (royalty-free, sourced for therapy aesthetic) ─── */
const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&h=1300&fit=crop&q=85&fm=jpg",
  tree: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400&h=1100&fit=crop&q=85&fm=jpg",
  leaves:
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&h=1500&fit=crop&q=85&fm=jpg",
  mist: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=2000&h=1200&fit=crop&q=85&fm=jpg",
};

/* ─── soft animation only ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── shared style tokens (sage palette) ─── */
const sage = {
  bg: "#fbfaf7", // warm cream
  ink: "#2b2a28", // warm near-black
  body: "#5b5752", // warm grey
  muted: "#8a847d",
  rule: "#e9e4dc", // hairline divider
  card: "#ffffff",
  accent: "#6b8e7f", // dusty sage
  accentDark: "#4a6a5d",
  accentSoft: "#e8efe9",
};

const serif = "var(--font-serif), Georgia, serif";

const HOME_NAV = [
  { href: "/#what", label: "Skills" },
  { href: "/#work", label: "Experience" },
  { href: "/#cases", label: "Case studies" },
  { href: "/web-development", label: "Web dev", current: true as const },
  { href: "/#contact", label: "Contact" },
];

export default function WebDevelopmentLanding() {
  return (
    <>
      <Head>
        <title>Therapy Practice Websites — Grant Kyle</title>
        <meta
          name="description"
          content="Calming, modern websites for therapists in private practice. Built on Next.js and Sanity so you can edit your own content — no developer required."
        />
      </Head>

      <main
        className={`${cormorant.variable} min-h-screen w-full antialiased`}
        style={{
          backgroundColor: sage.bg,
          color: sage.ink,
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        {/* ── HEADER (sticky, soft) ── */}
        <header
          className="sticky top-0 z-50 backdrop-blur-md"
          style={{
            backgroundColor: "rgba(251, 250, 247, 0.85)",
            borderBottom: `1px solid ${sage.rule}`,
          }}
        >
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="h-9 w-9 rounded-full grid place-items-center transition-colors"
                style={{ backgroundColor: sage.accent }}
              >
                <span className="text-[11px] font-semibold text-white tracking-tight">
                  GK
                </span>
              </div>
              <div className="leading-tight hidden sm:block">
                <div
                  className="text-base"
                  style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    color: sage.ink,
                  }}
                >
                  Grant Kyle
                </div>
                <div
                  className="text-[11px] tracking-wide"
                  style={{ color: sage.muted }}
                >
                  Websites for therapists
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {HOME_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-full text-sm transition-colors"
                  style={
                    item.current
                      ? {
                          backgroundColor: sage.accentSoft,
                          color: sage.accentDark,
                        }
                      : { color: sage.body }
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website"
              className="text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{
                backgroundColor: sage.accent,
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Say hello
            </a>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
                style={{
                  backgroundColor: sage.accentSoft,
                  color: sage.accentDark,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: sage.accent }}
                />
                <span className="text-[11px] tracking-[0.18em] uppercase">
                  Websites for therapists in private practice
                </span>
              </div>

              <h1
                className="text-4xl md:text-[3.6rem] leading-[1.1]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                  letterSpacing: "-0.01em",
                }}
              >
                A website that feels like the practice you&apos;ve built.
              </h1>

              <p
                className="mt-7 max-w-xl text-lg leading-relaxed"
                style={{ color: sage.body }}
              >
                Calming, modern sites built for therapists in private practice.
                You edit your own content — pages, blog posts, photos — without
                a developer in the loop.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-95"
                  style={{
                    backgroundColor: sage.accent,
                    color: "#fff",
                    fontWeight: 500,
                    boxShadow: "0 6px 20px -8px rgba(74, 106, 93, 0.4)",
                  }}
                >
                  Let&apos;s talk
                  <span>→</span>
                </a>
                <a
                  href="https://therapy-template-v2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:underline"
                  style={{ color: sage.accentDark }}
                >
                  See a live example
                  <span>↗</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="overflow-hidden rounded-[2rem]"
                style={{
                  boxShadow: "0 30px 60px -20px rgba(74, 106, 93, 0.25)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.hero}
                  alt="Sunlight through a forest path"
                  className="block w-full h-full object-cover"
                  style={{ aspectRatio: "4 / 5" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section
          className="border-y"
          style={{
            borderColor: sage.rule,
            backgroundColor: "#f5f1ea",
          }}
        >
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Why I make these
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Most therapists I meet are stuck between two extremes.
              </h2>

              <div
                className="mt-10 space-y-6 text-lg leading-relaxed"
                style={{ color: sage.body }}
              >
                <p>
                  On one end, the DIY platforms — Squarespace, Wix,
                  Wordpress.com. Easy to start, but every site looks like every
                  other site, performance is mediocre, and you&apos;ll wrestle
                  the editor for an hour every time you want to publish a post.
                </p>
                <p>
                  On the other end, the agencies. Beautiful sites — and
                  you&apos;re locked in. Every small change is a ticket. Every
                  blog post requires their developer&apos;s time. The monthly
                  bill keeps coming, year after year.
                </p>
                <p
                  style={{ color: sage.ink, fontWeight: 500 }}
                >
                  There&apos;s a third option, and that&apos;s what I build.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── THREE STATEMENTS ── */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 space-y-24 md:space-y-32">
            <Statement
              index="01"
              kicker="Ownership"
              heading="You’ll own it."
              body="The code lives in a GitHub repo under your account. The site deploys on Vercel’s free tier, so there’s no hosting bill from me — just your domain (about $12 a year). No monthly platform fee. No lock-in. If you ever want to bring in another developer, or move the site elsewhere entirely, you can. That’s the whole point."
              photo={PHOTOS.tree}
              alt="A lone tree standing in an open field"
              reverse={false}
            />
            <Statement
              index="02"
              kicker="Editorial control"
              heading="You’ll edit it."
              body="The site comes with a clean content editor — visually closer to writing in Notion or Google Docs than coding. Need to update your bio? Click. Add a new blog post? Click. Change a service description, swap a photo, update your hours? Click. No tickets. No waiting on me. The work is yours to publish, on your time."
              photo={PHOTOS.leaves}
              alt="Soft rain on green leaves"
              reverse={true}
            />
            <Statement
              index="03"
              kicker="The craft"
              heading="You’ll feel proud of it."
              body="Every site is custom-designed for the practice — its colors, its voice, the way the photos and the prose sit together. Not a template thousands of other therapists share. The result is something modern and calming, that loads fast, reads well on a phone, and feels like a thoughtful extension of the care you offer in the room."
              photo={PHOTOS.mist}
              alt="Mist drifting through a quiet forest"
              reverse={false}
            />
          </div>
        </section>

        {/* ── LIVE EXAMPLE ── */}
        <section
          className="border-y"
          style={{ borderColor: sage.rule, backgroundColor: "#f5f1ea" }}
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-2xl mx-auto"
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                A live example
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Here&apos;s what one of these looks like.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: sage.body }}
              >
                A reference practice site I built — calming sage palette, a full
                blog, and an editor that the practice owner runs themselves.
                Yours would look different. This is the architecture.
              </p>
              <a
                href="https://therapy-template-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm transition-all hover:opacity-95"
                style={{
                  backgroundColor: sage.accent,
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                Open the live site
                <span>↗</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-14 rounded-[2rem] overflow-hidden"
              style={{
                boxShadow: "0 30px 60px -20px rgba(74, 106, 93, 0.18)",
                backgroundColor: "#fff",
                border: `1px solid ${sage.rule}`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/therapy/home.png"
                alt="Reference therapy practice site — home page"
                className="block w-full"
                style={{ aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top" }}
              />
            </motion.div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  src: "/screenshots/therapy/about.png",
                  alt: "Reference site — About page",
                  label: "About",
                },
                {
                  src: "/screenshots/therapy/blog.png",
                  alt: "Reference site — Blog",
                  label: "Blog",
                },
                {
                  src: "/screenshots/therapy/services.png",
                  alt: "Reference site — Services page",
                  label: "Services",
                },
              ].map((shot, i) => (
                <motion.div
                  key={shot.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                >
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        "0 14px 30px -14px rgba(74, 106, 93, 0.18)",
                      backgroundColor: "#fff",
                      border: `1px solid ${sage.rule}`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="block w-full"
                      style={{
                        aspectRatio: "16 / 10",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </div>
                  <div
                    className="mt-3 text-center text-[11px] tracking-[0.18em] uppercase"
                    style={{ color: sage.muted }}
                  >
                    {shot.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT GOES ── */}
        <section>
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                How it goes
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                How working together unfolds.
              </h2>
            </motion.div>

            <div className="mt-12 space-y-12">
              <Step
                phase="First"
                heading="We start with a conversation."
                body="A 45-minute discovery call. We talk about your practice, your clients, what feels missing about your current online presence, and whether I'm a good fit for what you need. No pressure. If we're not aligned, I'll do my best to point you somewhere useful."
              />
              <Step
                phase="Then"
                heading="I build it over two to three weeks."
                body="I send a homepage mockup first, based on what we discussed. We iterate together until you'd be proud to share it with a colleague. Then I build the full site, set up your editor, and seed it with your initial content — your bio, your services, an intro blog post."
              />
              <Step
                phase="Finally"
                heading="I hand it off cleanly."
                body="We connect your domain, deploy to production, and I walk you through the editor so you're comfortable making changes on your own. The site is yours. I'm available for 30 days of post-launch tweaks at no additional cost — the kind that always come up after a project goes live."
              />
            </div>
          </div>
        </section>

        {/* ── INVESTMENT ── */}
        <section
          className="border-y"
          style={{ borderColor: sage.rule, backgroundColor: "#f5f1ea" }}
        >
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Investment
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                One project, one price.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                No retainers. No monthly maintenance fees. After we launch,
                the site is yours — and you only hear from me again if you
                want to.
              </p>

              <div className="mt-12 flex items-baseline justify-center gap-3">
                <span
                  className="text-sm"
                  style={{ color: sage.muted, fontStyle: "italic" }}
                >
                  starting at
                </span>
                <span
                  className="text-6xl md:text-7xl"
                  style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    color: sage.ink,
                  }}
                >
                  $X,XXX
                </span>
              </div>
              <p
                className="mt-3 text-sm"
                style={{ color: sage.muted }}
              >
                Paid in two parts — half at kickoff, half at launch.
              </p>

              <div
                className="mt-12 max-w-xl mx-auto text-left space-y-3"
                style={{ color: sage.body }}
              >
                {[
                  "Custom-designed home, about, services, and contact pages",
                  "Full blog system with authors, categories, and rich text",
                  "Sanity editor — edit anything, anytime, no developer needed",
                  "Vercel hosting setup, custom domain, SSL — all configured",
                  "Performance, accessibility, and SEO fundamentals built-in",
                  "30 days of post-launch tweaks at no extra cost",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3 text-base">
                    <span
                      className="mt-2.5 h-1 w-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: sage.accent }}
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-95"
                  style={{
                    backgroundColor: sage.accent,
                    color: "#fff",
                    fontWeight: 500,
                    boxShadow: "0 6px 20px -8px rgba(74, 106, 93, 0.4)",
                  }}
                >
                  Start a conversation
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUESTIONS ── */}
        <section>
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Questions
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                A few I usually hear.
              </h2>
            </motion.div>

            <div className="mt-12 space-y-12">
              {[
                {
                  q: "Do I need to know how to code?",
                  a: "Not at all. The editor is built for non-developers — same workflow as writing in Notion or Google Docs. If you can write a blog post in a word processor, you can publish one on your site.",
                },
                {
                  q: "What if I want changes after launch?",
                  a: "Anything content-related — copy, photos, blog posts, even adding new pages — you can do yourself in the editor. For design changes or new features beyond the original scope, I offer hourly support at a flat rate. Most clients don't need it.",
                },
                {
                  q: "How is this different from Squarespace?",
                  a: "Three meaningful ways: it's much faster (sub-second loads vs three to five seconds), it's truly yours (you own the code, no monthly platform fee, no lock-in), and the design is built specifically for your practice rather than a template thousands of other therapists are also using.",
                },
                {
                  q: "What does ongoing hosting cost?",
                  a: "About $12 per year for your domain. Hosting itself is free on Vercel's hobby tier, which comfortably handles a small therapist site. No surprise bills, no subscriptions to manage.",
                },
                {
                  q: "What happens if my practice grows or I want to hire another developer?",
                  a: "The code lives in a GitHub repo under your account. Any modern web developer can pick it up and extend it. You're not locked into me or any platform — the whole point is that the work is yours.",
                },
                {
                  q: "Can you help with photography, branding, or copy too?",
                  a: "I focus on the build. For branding and photography, I'll happily refer you to designers and photographers I trust. For copy, we work from your existing voice — I'll help shape and refine it, but I won't pretend to be a copywriter.",
                },
                {
                  q: "How long does the whole thing take?",
                  a: "Two to four weeks from kickoff is typical. Most variance comes from how much content you already have ready. If your bio, services copy, and headshot are in hand, we're on the faster end. If we're writing things from scratch together, closer to four.",
                },
              ].map((item) => (
                <motion.div
                  key={item.q}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeIn}
                >
                  <p
                    className="text-xl md:text-2xl leading-snug mb-3"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      fontStyle: "italic",
                      color: sage.ink,
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: sage.body }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REACH OUT ── */}
        <section
          className="border-t"
          style={{ borderColor: sage.rule, backgroundColor: "#f5f1ea" }}
        >
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Reach out
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Curious whether this might be a fit?
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                Send a note about where your practice is and what you&apos;re
                hoping for. I read every one personally and reply within a
                couple of days.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-95"
                  style={{
                    backgroundColor: sage.accent,
                    color: "#fff",
                    fontWeight: 500,
                    boxShadow: "0 6px 20px -8px rgba(74, 106, 93, 0.4)",
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
                    color: sage.accentDark,
                    border: `1px solid ${sage.rule}`,
                    fontWeight: 500,
                  }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="text-center text-xs py-10"
          style={{
            color: sage.muted,
            borderTop: `1px solid ${sage.rule}`,
            backgroundColor: sage.bg,
          }}
        >
          © {new Date().getFullYear()} Grant Kyle &nbsp;·&nbsp;{" "}
          <Link
            href="/"
            className="transition-colors hover:underline"
            style={{ color: sage.accentDark }}
          >
            Back to home
          </Link>
        </footer>
      </main>
    </>
  );
}

/* ── Sub-components ── */

function Statement({
  index,
  kicker,
  heading,
  body,
  photo,
  alt,
  reverse,
}: {
  index: string;
  kicker: string;
  heading: string;
  body: string;
  photo: string;
  alt: string;
  reverse: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div
          className="flex items-baseline gap-4 mb-5"
        >
          <span
            className="text-3xl"
            style={{ fontFamily: serif, color: sage.accent, fontWeight: 400 }}
          >
            {index}
          </span>
          <span
            className="text-[11px] tracking-[0.22em] uppercase"
            style={{ color: sage.muted }}
          >
            {kicker}
          </span>
        </div>
        <h3
          className="text-3xl md:text-[2.25rem] leading-tight"
          style={{
            fontFamily: serif,
            fontWeight: 500,
            color: sage.ink,
          }}
        >
          {heading}
        </h3>
        <p
          className="mt-5 text-lg leading-relaxed"
          style={{ color: sage.body }}
        >
          {body}
        </p>
      </div>
      <div
        className="overflow-hidden rounded-[2rem]"
        style={{ boxShadow: "0 20px 50px -16px rgba(74, 106, 93, 0.22)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={alt}
          className="block w-full h-full object-cover"
          style={{ aspectRatio: "4 / 5" }}
        />
      </div>
    </motion.div>
  );
}

function Step({
  phase,
  heading,
  body,
}: {
  phase: string;
  heading: string;
  body: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeIn}
      className="flex gap-6 md:gap-10"
    >
      <div
        className="flex-shrink-0 pt-1.5"
        style={{
          fontFamily: serif,
          fontStyle: "italic",
          color: sage.accent,
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
          minWidth: "4.5rem",
        }}
      >
        {phase}
      </div>
      <div>
        <h3
          className="text-xl md:text-2xl leading-snug mb-3"
          style={{
            fontFamily: serif,
            fontWeight: 500,
            color: sage.ink,
          }}
        >
          {heading}
        </h3>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: sage.body }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
