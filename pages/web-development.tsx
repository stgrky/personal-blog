import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── style constants (match home) ─── */
const kicker =
  "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500";
const sectionTitle =
  "text-3xl md:text-4xl font-semibold tracking-tight text-slate-900";
const body = "text-slate-500 leading-relaxed";

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
        <title>Web Development for Mental Health Practices — Grant Kyle</title>
        <meta
          name="description"
          content="Modern, client-managed websites for therapy practices. Built on Next.js + Sanity so practice owners can edit content and publish blog posts themselves — no developer required."
        />
      </Head>

      <main className="min-h-screen w-full text-slate-900 bg-white antialiased">
        {/* ── STICKY NAV (mirrors home) ── */}
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 grid place-items-center shadow-sm shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
                <span className="text-[11px] font-bold text-white tracking-tight">
                  GK
                </span>
              </div>
              <div className="leading-tight hidden sm:block">
                <div className="text-sm font-semibold text-slate-900">
                  Grant Kyle
                </div>
                <div className="text-[11px] text-slate-400">
                  Customer Success · Engineering · Web
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {HOME_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm transition-colors ${
                    item.current
                      ? "text-indigo-600 font-medium bg-indigo-50"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="mailto:hello@grantkyle.com"
                className="hidden sm:inline-flex btn-secondary text-sm px-4 py-2 rounded-lg font-medium"
              >
                Email
              </a>
              <a
                href="#contact"
                className="btn-primary text-sm px-4 py-2 rounded-lg font-semibold"
              >
                Get a quote →
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_-10%_-5%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(ellipse_55%_45%_at_105%_15%,rgba(139,92,246,0.09),transparent_55%),radial-gradient(ellipse_60%_70%_at_50%_110%,rgba(99,102,241,0.05),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 md:pt-24 md:pb-20">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-indigo-700">
                  Web Development · For mental health practices
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl md:text-[3.4rem] leading-[1.1] font-semibold tracking-tight">
                Modern, client-managed websites for{" "}
                <span className="gradient-text">mental health practices</span>.
              </h1>

              <p className={`mt-6 max-w-2xl text-lg ${body}`}>
                Built on Next.js + Sanity, so the practice owner can edit any
                page and publish blog posts — without a developer in the loop.
                Fast, accessible, SEO-ready, and yours forever after launch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#preview"
                  className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  See a live demo
                </a>
                <a
                  href="#contact"
                  className="btn-secondary px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Talk to me about your practice
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Next.js + React",
                  "Sanity CMS",
                  "Edit your own content",
                  "Full blog included",
                  "Mobile-first",
                  "No monthly fees",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className={kicker}>The problem</div>
              <h2 className={`${sectionTitle} mt-2`}>
                Most practice websites get stuck on one of two extremes.
              </h2>
              <p className={`mt-3 max-w-2xl ${body}`}>
                Therapists deserve a third option — and that&apos;s the gap
                I&apos;m here to fill.
              </p>
            </motion.div>

            <div className="mt-10 grid md:grid-cols-3 gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Option A
                </div>
                <div className="text-base font-semibold text-slate-900">
                  DIY platforms
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Squarespace, Wix, Wordpress.com. Easy to start, but the
                  templates all look the same, performance is mediocre, and
                  you&apos;ll spend more time wrestling the editor than actually
                  writing.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.08}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Option B
                </div>
                <div className="text-base font-semibold text-slate-900">
                  Agency-built sites
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Beautiful — and you&apos;re locked in. Every change is a
                  ticket. Every blog post requires their developer&apos;s time.
                  Monthly maintenance fees keep adding up, year after year.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.16}
                variants={fadeUp}
                className="rounded-2xl border-2 border-indigo-300 bg-white p-7 shadow-sm shadow-indigo-100"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-3">
                  What I build
                </div>
                <div className="text-base font-semibold text-slate-900">
                  A site you actually own
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Custom-designed, fast, modern. Edit any page and publish blog
                  posts yourself through a clean editor. The code lives in your
                  GitHub account. No lock-in. No monthly fees. Yours forever.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className={kicker}>What&apos;s included</div>
            <h2 className={`${sectionTitle} mt-2`}>
              Everything a working practice site needs.
            </h2>
            <p className={`mt-3 max-w-2xl ${body}`}>
              Designed for therapists in private practice. Built with the
              tooling I&apos;d use for any modern site I build for myself.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🎨",
                title: "Custom design",
                text: "Tailored to your practice — colors, fonts, voice. Not a template you share with 10,000 other therapists.",
              },
              {
                icon: "✍️",
                title: "Self-managed content",
                text: "Edit any page in a clean editor. Publish blog posts without writing a single line of code or emailing me first.",
              },
              {
                icon: "📝",
                title: "Full blog system",
                text: "Authors, categories, rich text, images, SEO metadata — everything you need to publish thoughtful long-form content.",
              },
              {
                icon: "⚡",
                title: "Fast & accessible",
                text: "Sub-second page loads. WCAG-conscious markup. Performs well on phones, tablets, and old desktops alike.",
              },
              {
                icon: "🔍",
                title: "SEO-ready",
                text: "Semantic HTML, proper meta tags, sitemap, robots.txt. The structural fundamentals search engines look for.",
              },
              {
                icon: "🌐",
                title: "Hosting setup",
                text: "Deployed on Vercel's free tier with your custom domain. No hosting bill from me — just your ~$12/yr domain renewal.",
              },
              {
                icon: "🔒",
                title: "Yours to own",
                text: "Code lives in a GitHub repo under your account. You can hire any developer in the future to extend it, or take it elsewhere entirely.",
              },
              {
                icon: "🤝",
                title: "30 days of support",
                text: "Tweaks, bug fixes, copy changes — included in the initial build for the first 30 days after launch.",
              },
              {
                icon: "📱",
                title: "Mobile-first",
                text: "Most prospective clients find you on a phone. The site is designed for that first, then scales up cleanly to desktop.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.04}
                variants={fadeUp}
                className="pillar-card rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-xl mb-3" aria-hidden>
                  {feature.icon}
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {feature.title}
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── LIVE PREVIEW ── */}
        <section
          id="preview"
          className="bg-slate-50 border-y border-slate-100"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center md:text-left md:flex md:items-end md:justify-between gap-6"
            >
              <div>
                <div className={kicker}>Live preview</div>
                <h2 className={`${sectionTitle} mt-2`}>
                  See an example of what you&apos;d get.
                </h2>
                <p className={`mt-3 max-w-2xl ${body}`}>
                  A reference build — calm, sage palette, full blog and content
                  editor. Yours will look different; this is the architecture.
                </p>
              </div>
              <a
                href="https://therapy-template-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap inline-flex mt-6 md:mt-0"
              >
                Open live demo →
              </a>
            </motion.div>

            {/* Stylized browser frame placeholder — swap for real screenshot later */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
              className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
                <span className="ml-3 text-xs text-slate-400 font-mono truncate">
                  therapy-template-v2.vercel.app
                </span>
              </div>
              <div className="aspect-[16/10] bg-gradient-to-br from-emerald-50 via-stone-50 to-emerald-100 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                    Calm Path Therapy
                  </div>
                  <h3
                    className="mt-3 text-3xl md:text-5xl font-semibold text-slate-800"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Therapy that meets you where you are.
                  </h3>
                  <p className="mt-4 max-w-md text-sm text-slate-600 leading-relaxed">
                    Compassionate, evidence-based care for adults navigating
                    anxiety, depression, grief, and life transitions.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-medium">
                    Book a consultation
                  </div>
                  <div className="mt-8 text-[10px] text-slate-400 font-mono">
                    Reference demo · Your build will be designed for your
                    practice
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className={kicker}>How it works</div>
            <h2 className={`${sectionTitle} mt-2`}>
              From first conversation to live site.
            </h2>
            <p className={`mt-3 max-w-2xl ${body}`}>
              Typically 2–4 weeks, depending on how quickly we agree on design
              and how much content you have ready.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discovery call",
                timeline: "~45 min",
                text: "Free, no pressure. We talk about your practice, your clients, what feels missing about your current online presence, and whether I'm a good fit for what you need.",
              },
              {
                step: "02",
                title: "Design pass",
                timeline: "Week 1",
                text: "I send a homepage mockup based on what we discussed. We iterate on it together until you'd be proud to share it with a colleague.",
              },
              {
                step: "03",
                title: "Build & content load",
                timeline: "Weeks 2–3",
                text: "I build the full site, set up your Sanity editor, and seed your initial content (bio, services, intro blog post). You review along the way.",
              },
              {
                step: "04",
                title: "Launch & handoff",
                timeline: "Week 3–4",
                text: "Connect your domain, deploy to production, walk you through Sanity so you're comfortable editing. 30 days of post-launch support included.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-xs font-bold tracking-widest text-indigo-500 mb-3">
                  {step.step}
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 mb-3">
                  {step.timeline}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center"
            >
              <div className={kicker}>Pricing</div>
              <h2 className={`${sectionTitle} mt-2`}>One project, one price.</h2>
              <p className={`mt-3 max-w-xl mx-auto ${body}`}>
                No retainers. No monthly fees. After launch, the site is yours
                to keep — and you only hear from me again if you want to.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
              className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm shadow-slate-100"
            >
              <div className="text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-500">
                  Practice site package
                </div>
                <div className="mt-3 flex items-baseline justify-center gap-2">
                  <span className="text-slate-400 text-lg">starting at</span>
                  <span className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
                    $X,XXX
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  One-time · paid in two installments
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto">
                {[
                  "Custom-designed homepage, about, services, contact",
                  "Full blog with authors, categories, rich text",
                  "Sanity CMS editor — edit anything, anytime",
                  "Vercel hosting setup (free tier)",
                  "Custom domain configuration",
                  "Sub-second performance, mobile-first",
                  "SEO fundamentals + sitemap",
                  "30 days of post-launch support",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex"
                >
                  Start a conversation →
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  Need ongoing support after the first 30 days? Optional
                  hourly support available at a flat rate.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center"
          >
            <div className={kicker}>FAQ</div>
            <h2 className={`${sectionTitle} mt-2`}>Common questions.</h2>
          </motion.div>

          <div className="mt-10 divide-y divide-slate-100">
            {[
              {
                q: "Do I need to know how to code?",
                a: "No. Editing your site uses a clean visual editor — same workflow as writing in Google Docs or Notion. If you can write a blog post in a word processor, you can publish one on your site.",
              },
              {
                q: "What happens if I want changes after launch?",
                a: "Anything content-related (copy, photos, blog posts, new pages) you can do yourself in the editor. For design changes or new features beyond the original scope, I offer hourly support at a flat rate — but most clients don't need it.",
              },
              {
                q: "How is this different from Squarespace or Wix?",
                a: "Three things: it's faster (sub-second loads vs 3–5 seconds), it's truly yours (you own the code, no monthly platform fee), and the design is custom rather than a template thousands of other practices are using.",
              },
              {
                q: "What does hosting cost?",
                a: "Roughly $12 per year for your domain. Hosting itself is free on Vercel's hobby tier, which handles a small therapist site comfortably. No surprise bills.",
              },
              {
                q: "What if my practice grows or I want to hire someone else?",
                a: "The code lives in a GitHub repo under your account. Any modern web developer can pick it up and extend it. You're not locked into me or any platform.",
              },
              {
                q: "Can you also help with branding, copy, or photography?",
                a: "I focus on the build. For branding and photography, I'll happily refer you to designers and photographers I trust. For copywriting, we work from your existing voice — I'll help you shape it but won't pretend to be a copywriter.",
              },
              {
                q: "What's a realistic timeline?",
                a: "Two to four weeks from kickoff is typical. Most variance comes from how much content you have ready — if you already have bio, services copy, and a headshot, we're on the faster end. If we're writing from scratch, plan for closer to four.",
              },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50"
        >
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center"
            >
              <div className={kicker}>Get in touch</div>
              <h2 className={`${sectionTitle} mt-2`}>
                Want to talk about your practice?
              </h2>
              <p className={`mt-4 max-w-xl mx-auto ${body}`}>
                Send a note about where you are and what you&apos;re hoping for.
                If we&apos;re a fit, we&apos;ll book a 45-minute discovery call.
                If not, I&apos;ll do my best to point you somewhere useful.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:hello@grantkyle.com?subject=Therapy%20practice%20website"
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  hello@grantkyle.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sgrantkyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  LinkedIn →
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                Currently booking projects · Typical response within one
                business day
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="text-center text-slate-400 text-xs py-8 border-t border-slate-100">
          © {new Date().getFullYear()} Grant Kyle &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Back to home
          </Link>
        </footer>

        {/* ─────────────────────────── STYLES (matches home) ─────────────────────────── */}
        <style jsx>{`
          .gradient-text {
            background: linear-gradient(
              135deg,
              #4f46e5 0%,
              #7c3aed 60%,
              #6366f1 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, #4f46e5 0%, #4338ca 100%);
            color: #fff;
            box-shadow: 0 4px 14px -4px rgba(79, 70, 229, 0.55);
            transition: transform 0.18s ease, box-shadow 0.18s ease,
              filter 0.18s ease;
          }
          .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px -4px rgba(79, 70, 229, 0.65);
            filter: brightness(1.06);
          }
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border: 1px solid rgba(15, 23, 42, 0.12);
            color: rgba(15, 23, 42, 0.85);
            transition: transform 0.18s ease, border-color 0.18s ease,
              color 0.18s ease;
          }
          .btn-secondary:hover {
            transform: translateY(-1px);
            border-color: rgba(79, 70, 229, 0.35);
            color: #4f46e5;
          }
          .chip {
            display: inline-flex;
            padding: 5px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 500;
            background: rgba(79, 70, 229, 0.06);
            border: 1px solid rgba(79, 70, 229, 0.16);
            color: #4338ca;
          }
          .pillar-card {
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .pillar-card:hover {
            border-color: rgba(99, 102, 241, 0.25);
            box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.12),
              0 4px 24px -6px rgba(99, 102, 241, 0.12);
          }
        `}</style>
      </main>
    </>
  );
}

/* ══════════════════════════════════════════════════════════ */
/* FAQ accordion item                                         */
/* ══════════════════════════════════════════════════════════ */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-7 w-7 rounded-full border border-slate-200 grid place-items-center text-slate-500 transition-all ${
            open ? "rotate-45 border-indigo-300 text-indigo-600" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 pr-12 text-sm text-slate-500 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
