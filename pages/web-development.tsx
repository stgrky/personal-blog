import React, { useEffect, useState } from "react";
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

const WEBDEV_SECTIONS = [
  { href: "#example", label: "Example", id: "example" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#addons", label: "Add-ons", id: "addons" },
  { href: "#referrals", label: "Referrals", id: "referrals" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function WebDevelopmentLanding() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers = WEBDEV_SECTIONS.map((s) => {
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
    });
    return () =>
      observers.forEach((o) => {
        if (o) o.disconnect();
      });
  }, []);

  return (
    <>
      <Head>
        <title>Therapy Practice Websites — Grant Kyle</title>
        <meta
          name="description"
          content="Calming, modern websites for therapists in private practice. Built so you can edit your own content — no developer required."
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
        <div className="sticky top-0 z-50">
        <header
          className="backdrop-blur-md"
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

        {/* ── SUB-NAV ── */}
        <div
          className="backdrop-blur-md"
          style={{
            backgroundColor: "rgba(251, 250, 247, 0.78)",
            borderBottom: `1px solid ${sage.rule}`,
          }}
        >
          <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-center gap-1 overflow-x-auto">
            {WEBDEV_SECTIONS.map((s) => {
              const active = activeSection === s.id;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-3 py-1 rounded-full text-[13px] whitespace-nowrap transition-colors"
                  style={
                    active
                      ? {
                          color: sage.accentDark,
                          backgroundColor: sage.accentSoft,
                        }
                      : { color: sage.muted }
                  }
                >
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
        </div>

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
              body="I build the site. I host it. I keep it healthy. And if you ever decide to take it elsewhere — different developer, different setup, different anything — the whole site comes with you. No platform holding it hostage, no escape fee, no quiet lock-in. If you bring in another developer down the road, I’ll personally hop on a call with them to walk through the handoff so it lands gracefully. You stay because the work is good, not because you can’t get out."
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
          id="example"
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
        <section id="process">
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
                heading="I build it in about a week."
                body="I send a homepage mockup first, based on what we discussed. We iterate together until you'd be proud to share it with a colleague. Then I build the full site, set up your editor, and seed it with your initial content — your bio, your services, an intro blog post."
              />
              <Step
                phase="Finally"
                heading="I hand it off cleanly."
                body="We connect your domain, take the site live, and I walk you through the editor so you're comfortable making changes on your own. The site is yours. From there, your optional hosting tier handles the ongoing — monitoring, maintenance, and (in Tier 2) a monthly hour of dev work to keep things sharp."
              />
            </div>
          </div>
        </section>

        {/* ── INVESTMENT ── */}
        <section
          id="pricing"
          className="border-y"
          style={{ borderColor: sage.rule, backgroundColor: "#f5f1ea" }}
        >
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center"
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Pricing
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Get your practice online in one week.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                Simple, transparent pricing. No hidden fees, no nickel-and-diming,
                no surprise invoices six months in.
              </p>
            </motion.div>

            {/* ── Initial Build Card ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="mt-16 max-w-2xl mx-auto rounded-2xl p-10 md:p-12"
              style={{
                backgroundColor: sage.card,
                border: `1px solid ${sage.rule}`,
                boxShadow: "0 1px 2px rgba(74, 106, 93, 0.04)",
              }}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase"
                    style={{ color: sage.muted }}
                  >
                    One-time
                  </p>
                  <h3
                    className="mt-2 text-2xl md:text-[1.7rem]"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    Initial Build
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-5xl md:text-6xl"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    $333
                  </span>
                </div>
              </div>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: sage.body }}
              >
                A 5-page professional website — Home, About, Services, Blog,
                and Contact — built for you in about a week.
              </p>
              <div
                className="mt-8 space-y-3"
                style={{ color: sage.body }}
              >
                {[
                  "Five custom pages: Home, About, Services, Blog, Contact",
                  "Two rounds of revisions (up to 4 hours)",
                  "Basic Google Analytics — see who visits and what they read",
                  "Your own secure login to manage every word, photo, and post",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 text-base"
                  >
                    <span
                      className="mt-2.5 h-1 w-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: sage.accent }}
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Hosting & Maintenance intro ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="mt-24 md:mt-28 text-center"
            >
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-6"
                style={{ color: sage.muted }}
              >
                Hosting &amp; Maintenance
              </p>
              <h3
                className="text-2xl md:text-[2rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Then, choose your plan.
              </h3>
              <p
                className="mt-5 text-base leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                Pick the level of ongoing support that fits how active you
                want your site to be. You can change tiers anytime, or cancel
                outright — your site comes with you.
              </p>
            </motion.div>

            {/* ── Tier Cards ── */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {/* Tier 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
                className="rounded-2xl p-8 md:p-10 flex flex-col"
                style={{
                  backgroundColor: sage.card,
                  border: `1px solid ${sage.rule}`,
                }}
              >
                <p
                  className="text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: sage.muted }}
                >
                  Tier 1 · Essentials
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-4xl md:text-5xl"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    $39
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: sage.muted }}
                  >
                    /month
                  </span>
                </div>
                <p
                  className="mt-5 text-[15px] leading-relaxed"
                  style={{ color: sage.body }}
                >
                  Keep your site online, fast, and healthy. Quiet, reliable,
                  hands-off.
                </p>
                <div
                  className="mt-6 space-y-3 flex-grow"
                  style={{ color: sage.body }}
                >
                  {[
                    "Hosting and infrastructure",
                    "Security monitoring",
                    "Outage monitoring and alerts",
                    "Maintenance — bugs, errors, and outages fixed",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 text-[15px]"
                    >
                      <span
                        className="mt-2 h-1 w-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sage.accent }}
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-8 pt-6 text-sm italic leading-relaxed border-t"
                  style={{ color: sage.muted, borderColor: sage.rule }}
                >
                  Best for therapists who want a professional online presence
                  that just works in the background — a digital business card
                  that asks nothing of you.
                </p>
              </motion.div>

              {/* Tier 2 — featured */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
                className="rounded-2xl p-8 md:p-10 flex flex-col relative"
                style={{
                  backgroundColor: sage.card,
                  border: `2px solid ${sage.accent}`,
                  boxShadow: "0 12px 30px -16px rgba(74, 106, 93, 0.35)",
                }}
              >
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    backgroundColor: sage.accent,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Recommended
                </div>
                <p
                  className="text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: sage.accentDark }}
                >
                  Tier 2 · Growth
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-4xl md:text-5xl"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    $59
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: sage.muted }}
                  >
                    /month
                  </span>
                </div>
                <p
                  className="mt-5 text-[15px] leading-relaxed"
                  style={{ color: sage.body }}
                >
                  Everything in Tier 1, plus active growth support — analytics,
                  SEO, and a monthly hour of dev work on the house.
                </p>
                <div
                  className="mt-6 space-y-3 flex-grow"
                  style={{ color: sage.body }}
                >
                  {[
                    "Everything in Tier 1",
                    "One hour of development work per month",
                    "Advanced Analytics + monthly performance reviews",
                    "Google Business Profile setup + monthly maintenance",
                    "Contact form, set up and ready",
                    "Typeform testimonials + monthly curation",
                    "SEO setup + monthly monitoring",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 text-[15px]"
                    >
                      <span
                        className="mt-2 h-1 w-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sage.accent }}
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-8 pt-6 text-sm italic leading-relaxed border-t"
                  style={{ color: sage.muted, borderColor: sage.rule }}
                >
                  Best for therapists who want the site to actively grow the
                  practice — continuous optimization, marketing insight, and a
                  professional managing your online presence. No technical work
                  on your end.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="mt-12 text-center"
            >
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
                Schedule a consultation
                <span>→</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── ADD-ONS ── */}
        <section id="addons">
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
                Add-ons
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Extras, if you want them.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl"
                style={{ color: sage.body }}
              >
                The base package covers what most practices actually need. These
                are à la carte — added at intake, billed once, no surprises
                later.
              </p>

              <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-0 items-start">
                {[
                  {
                    label: "Extra page",
                    price: "$49 / page",
                    what: "A page beyond the base five — e.g. an FAQ, specialties breakdown, or a focused service page.",
                    why: "Sometimes one page can&rsquo;t carry everything a visitor needs to know. Extra pages give specific topics room to breathe.",
                    whoFor: "Therapists with multiple specialties, group practices, or anyone who finds themselves cramming three topics into one section.",
                  },
                  {
                    label: "Legal or disclaimer pages",
                    price: "$29 / page",
                    what: "Privacy policy, HIPAA notice, terms of service, accessibility statement — the pages your regulators and insurance carrier like to see.",
                    why: "Cheaper than a regular extra page because the copy is mostly boilerplate I can draft from a template.",
                    whoFor: "Every licensed practice eventually. Often required for ad networks and some referral platforms.",
                  },
                  {
                    label: "Calendly scheduling integration",
                    price: "$49",
                    what: "Your Calendly (or Cal.com) booking widget embedded directly on the site so visitors can pick a consult time without leaving.",
                    why: "Removes a click between &ldquo;interested&rdquo; and &ldquo;booked.&rdquo; For an anxious prospective client, that click is the conversion-killer.",
                    whoFor: "Anyone who already uses a scheduler, or can spare 10 minutes to set one up.",
                  },
                  {
                    label: "Typeform testimonial integration",
                    price: "$49",
                    what: "A Typeform on the site where past clients can submit testimonials. You review and approve before they go live.",
                    why: "Therapy decisions are emotional and social proof helps. A streamlined collection process means you actually end up with quotes.",
                    whoFor: "Established practices with happy clients who&rsquo;d give a review if asked.",
                  },
                  {
                    label: "Google Business Profile setup",
                    price: "$49",
                    what: "I claim or create your Google Business Profile, optimize it with photos, hours, and service area, and link it to your site.",
                    why: "Most people find a nearby therapist through Google&rsquo;s map. Without a profile, you&rsquo;re effectively invisible to local search.",
                    whoFor: "Anyone with a physical office — even part-time. Telehealth-only practices benefit less.",
                  },
                  {
                    label: "SEO setup",
                    price: "$99",
                    what: "Meta titles and descriptions for every page, an XML sitemap, schema markup for local business, and keyword research for your niche.",
                    why: "Helps the right kind of clients find you on Google. Most of the work is one-time; the lift is ongoing.",
                    whoFor: "Practices that want long-term organic traffic instead of paid ads forever.",
                  },
                  {
                    label: "Advanced Analytics setup",
                    price: "$99",
                    what: "Google Analytics 4 with conversion goals, scroll tracking, and event tracking for key actions (booking clicks, contact submissions, etc.).",
                    why: "You can finally answer &ldquo;is the site actually working?&rdquo; with data instead of guesses.",
                    whoFor: "Therapists spending on marketing who want to know what&rsquo;s pulling its weight.",
                  },
                  {
                    label: "Custom logo design",
                    price: "$99",
                    what: "A simple, professional wordmark or lockup for your practice. Usually one to two rounds of revisions.",
                    why: "A logo signals you&rsquo;re a real practice, not a side project. Used in your site header, favicon, and email signatures.",
                    whoFor: "New practices, rebrands, or anyone still relying on a Canva template.",
                  },
                ].map((item) => (
                  <details
                    key={item.label}
                    className="group border-b [&_summary::-webkit-details-marker]:hidden"
                    style={{ borderColor: sage.rule }}
                  >
                    <summary
                      className="flex items-baseline justify-between gap-4 py-3 cursor-pointer list-none select-none"
                      aria-label={`${item.label}, ${item.price}. Tap to expand details.`}
                    >
                      <span
                        className="text-base flex items-center gap-2"
                        style={{ color: sage.body }}
                      >
                        {item.label}
                        <svg
                          aria-hidden
                          viewBox="0 0 20 20"
                          width="12"
                          height="12"
                          className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                          style={{ color: sage.muted }}
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 8l5 5 5-5"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-base whitespace-nowrap"
                        style={{
                          fontFamily: serif,
                          fontWeight: 500,
                          color: sage.ink,
                        }}
                      >
                        {item.price}
                      </span>
                    </summary>
                    <div className="pb-5 pt-1 space-y-3">
                      {(
                        [
                          { kicker: "What", body: item.what },
                          { kicker: "Why", body: item.why },
                          { kicker: "Who it's for", body: item.whoFor },
                        ] as const
                      ).map((row) => (
                        <div key={row.kicker}>
                          <div
                            className="text-[10px] font-medium tracking-[0.18em] uppercase"
                            style={{ color: sage.muted }}
                          >
                            {row.kicker}
                          </div>
                          <p
                            className="mt-1 text-sm leading-relaxed"
                            style={{ color: sage.body }}
                            dangerouslySetInnerHTML={{ __html: row.body }}
                          />
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <p
                className="mt-10 text-sm italic"
                style={{ color: sage.muted }}
              >
                Need something not listed? Ask — most things therapists request
                are either already included or one of the items above in
                disguise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── REFERRALS ── */}
        <section
          id="referrals"
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
                Referrals
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Know another therapist who needs a site?
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                Send them my way. If they sign up, you both get three months
                of free hosting at your respective tier. That&apos;s it. No
                limits, no catches, no fine print.
              </p>

              <div
                className="mt-12 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto"
              >
                <div
                  className="rounded-2xl p-6 text-left"
                  style={{
                    backgroundColor: sage.card,
                    border: `1px solid ${sage.rule}`,
                  }}
                >
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase"
                    style={{ color: sage.muted }}
                  >
                    You get
                  </p>
                  <p
                    className="mt-3 text-xl"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    3 months free
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: sage.muted }}
                  >
                    at your tier
                  </p>
                </div>
                <div
                  className="rounded-2xl p-6 text-left"
                  style={{
                    backgroundColor: sage.card,
                    border: `1px solid ${sage.rule}`,
                  }}
                >
                  <p
                    className="text-[11px] tracking-[0.22em] uppercase"
                    style={{ color: sage.muted }}
                  >
                    They get
                  </p>
                  <p
                    className="mt-3 text-xl"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: sage.ink,
                    }}
                  >
                    3 months free
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: sage.muted }}
                  >
                    at their tier
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUESTIONS ── */}
        <section id="faq">
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
                  a: "Anything content-related — copy, photos, blog posts, even adding new pages — you can do yourself in the editor. For ongoing design tweaks and dev work, the Tier 2 retainer includes one hour of my time each month. If you'd rather stay hands-off, Tier 1 keeps the site humming without dev work. And if something bigger comes up either way, we scope it as a one-off — no surprise bills.",
                },
                {
                  q: "How is this different from Squarespace?",
                  a: "Three meaningful ways: it's much faster (sub-second loads vs three to five seconds), it's truly yours (no monthly platform fee, no lock-in — if you ever want to move it, it moves with you), and the design is built specifically for your practice rather than a template thousands of other therapists are also using.",
                },
                {
                  q: "What does ongoing hosting cost?",
                  a: "Hosting is bundled into one of the two monthly tiers — $39/month for Essentials or $59/month for Growth. Your domain (about $12/year) is the only thing you pay for separately. No surprise bills, no add-on subscriptions to manage.",
                },
                {
                  q: "What if I ever want to work with a different developer?",
                  a: "Easy. The whole site — every file, every setting, your editor and everything in it — comes with you. I'll get on a call with whoever you bring in next and walk them through how it all fits together, so the handoff lands gracefully. You're not locked into me, and I'm not going to make leaving feel like a battle. The freedom to go is part of what you're paying for.",
                },
                {
                  q: "Can you help with photography, branding, or copy too?",
                  a: "I focus on the build. For branding and photography, I'll happily refer you to designers and photographers I trust. For copy, we work from your existing voice — I'll help shape and refine it, but I won't pretend to be a copywriter.",
                },
                {
                  q: "How long does the whole thing take?",
                  a: "About a week from kickoff is typical, assuming your bio, services copy, and a headshot are in hand. If we're writing or sourcing content from scratch together, it stretches a bit — usually no more than two weeks total.",
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
          id="contact"
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
                Get started
              </p>
              <h2
                className="text-3xl md:text-[2.5rem] leading-[1.2]"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: sage.ink,
                }}
              >
                Ready to build your practice website?
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: sage.body }}
              >
                Schedule a 30-minute consultation. We&apos;ll talk through
                what your practice needs, walk through the options together,
                and figure out whether this is the right fit. No pressure,
                no pitch — and if it&apos;s a yes, you can be live in about
                a week.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website%20consultation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-95"
                  style={{
                    backgroundColor: sage.accent,
                    color: "#fff",
                    fontWeight: 500,
                    boxShadow: "0 6px 20px -8px rgba(74, 106, 93, 0.4)",
                  }}
                >
                  Schedule a consultation →
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
