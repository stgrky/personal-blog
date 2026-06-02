import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";

/* ─── animation tokens ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── shared style strings ─── */
const serif = "var(--font-serif)";
const kicker =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--warm-muted)]";
const sectionTitleCls =
  "text-3xl md:text-[2.6rem] leading-[1.15] tracking-tight text-[var(--warm-ink)]";
const body = "text-[var(--warm-body)] leading-relaxed";

export default function GrantLanding() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const ids = ["top", "what", "work", "cases", "values", "now", "contact"];
    const observers = ids.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const NAV = [
    { href: "#what", label: "Skills", id: "what" },
    { href: "#work", label: "Experience", id: "work" },
    { href: "#cases", label: "Cases", id: "cases" },
    { href: "/web-development", label: "Web dev", id: "webdev" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <main
      className="min-h-screen w-full antialiased"
      style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
    >
      {/* ── STICKY NAV ── */}
      <LayoutGroup>
        <header
          className="sticky top-0 z-50 backdrop-blur-md"
          style={{
            backgroundColor: "rgba(253, 251, 247, 0.82)",
            borderBottom: "1px solid var(--warm-rule)",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link
              href="#top"
              className="text-lg leading-none"
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Grant Kyle
              <span
                className="ml-2 text-[11px] tracking-wide hidden sm:inline"
                style={{ color: "var(--warm-muted)", fontFamily: "var(--font-sans)" }}
              >
                / customer success · engineering · web
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-1.5 rounded-full text-sm transition-colors"
                  style={
                    activeSection === item.id
                      ? {
                          color: "var(--warm-accent-dark)",
                        }
                      : { color: "var(--warm-body)" }
                  }
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ backgroundColor: "var(--warm-accent-soft)" }}
                      transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/stgrky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ color: "var(--warm-body)" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
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
              <MobileMenu nav={NAV} />
            </div>
          </div>
        </header>
      </LayoutGroup>

      {/* ── HERO ── */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p
              className="mb-7 text-base"
              style={{
                fontFamily: serif,
                color: "var(--warm-accent)",
                fontStyle: "italic",
              }}
            >
              Hi —
            </p>
            <h1
              className="text-4xl md:text-[3.6rem] leading-[1.05] tracking-tight"
              style={{
                fontFamily: serif,
                fontWeight: 500,
                color: "var(--warm-ink)",
              }}
            >
              I&apos;m Grant. A customer-facing operator with an{" "}
              <span style={{ color: "var(--warm-accent)" }}>engineering</span>{" "}
              foundation.
            </h1>

            <div
              className="mt-8 space-y-5 text-lg md:text-[1.2rem] leading-relaxed"
              style={{ color: "var(--warm-body)" }}
            >
              <p>
                I am a naturally curious human, and my professional journey is
                testament to this.
              </p>
              <p>
                I came up through sales. After selling SEO and web development
                at a digital marketing agency, I learned the JavaScript
                ecosystem (Vanilla JS / React / TypeScript) and made the
                deliberate move into software development. I knew I wouldn&apos;t
                stay competitive among those who live and die by the code, but I
                was relentless in my pursuit of technical training nonetheless.
                After several years in engineering roles, my customer-facing and
                selling abilities had grown considerably, and I sought to come
                back to roles that fit my natural skill set.
              </p>
              <p>
                This is where I am now: living at the intersection of people and
                product. That technical foundation is what makes me different —
                I can sit in a conversation with an engineering team and
                actually understand what&apos;s being said, then turn around and
                translate it for a customer or executive in a way that builds
                trust instead of confusion. I&apos;m most energized taking
                things from zero to one: building the post-sale infrastructure,
                feedback loops, and customer experiences that didn&apos;t exist
                yet.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--warm-accent)",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                See recent work
                <span>→</span>
              </a>
              <a
                href="https://github.com/stgrky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:underline"
                style={{ color: "var(--warm-accent-dark)" }}
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS / WHAT I'M GOOD AT ── */}
      <section
        id="what"
        className="border-y"
        style={{ borderColor: "var(--warm-rule)", backgroundColor: "var(--warm-bg-soft)" }}
      >
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>The work</p>
            <h2
              className={`${sectionTitleCls} mt-3`}
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              What I&apos;m good at.
            </h2>
            <p className={`mt-6 text-lg ${body}`}>
              I live at the intersection of customer relationships, technical
              depth, and operational clarity. Four things I keep coming back to,
              across roles.
            </p>
          </motion.div>

          <div className="mt-14 space-y-14">
            <Skill
              kicker="Adoption & enablement"
              heading="Onboarding that leads to real usage."
              body="Not just a training checkbox. I design success plans, build enablement resources, and create communication rhythms that keep customers engaged long past go-live — and help them build habits that actually stick."
            />
            <Skill
              kicker="Technical depth"
              heading="Engineering background that quietly does a lot of work."
              body="Having built software professionally, I understand what's actually happening under the hood. That means I can diagnose issues more precisely, have more credible conversations with engineering teams, and translate technical complexity into something customers can act on. It's not a party trick — it's what makes the customer experience better."
            />
            <Skill
              kicker="Ops & systems"
              heading="Documented processes beat heroic memory."
              body="Playbooks, ticketing workflows, SOPs, handoff processes. The boring infrastructure that makes a team scalable instead of dependent on any one person knowing the answer."
            />
            <Skill
              kicker="Cross-functional translation"
              heading="Customer reality doesn't translate itself."
              body="I collect structured feedback from the field, surface patterns to product and engineering, and bring updates back to customers — closing the loop in both directions. I've held relationships from end-user to executive and know how to communicate differently for each."
            />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="work">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end gap-6 justify-between"
          >
            <div>
              <p className={kicker}>Experience</p>
              <h2
                className={`${sectionTitleCls} mt-3`}
                style={{ fontFamily: serif, fontWeight: 500 }}
              >
                Where I&apos;ve worked.
              </h2>
              <p className={`mt-4 max-w-2xl text-lg ${body}`}>
                A mix of startups, contracts, and growth environments — kept
                intentionally concise. Signal over volume.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/sgrantkyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:underline self-start md:self-auto whitespace-nowrap"
              style={{ color: "var(--warm-accent-dark)" }}
            >
              Full history on LinkedIn ↗
            </a>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical CSM",
                org: "Aquaria",
                period: "2024 – Present",
                tag: "Hardware · Series A",
                bullets: [
                  "Built CS and support operations from scratch — playbooks, ticketing, customer education content, self-serve hub, and AE-to-CSM handoff SOP.",
                  "Led end-to-end field deployments, coordinating contractors, logistics partners, and internal teams across complex hardware installations.",
                  "Served as the primary voice of the customer, translating field feedback into product improvements in direct collaboration with engineering.",
                  "Launched customer advocacy programs (referral + video testimonial) that became a measurable revenue channel.",
                ],
              },
              {
                title: "Customer Success Engineer",
                org: "Inveterate",
                period: "2024",
                tag: "eCommerce SaaS · Contract",
                bullets: [
                  "Managed technical onboarding for enterprise brands end-to-end, partnering directly with client teams to ensure integrations launched smoothly and performed reliably.",
                  "Maintained high customer satisfaction through proactive communication, clear expectation-setting, and hands-on troubleshooting when issues arose.",
                  "Recovered an at-risk enterprise account through careful problem-solving and deliberate relationship rebuilding — preventing churn and expanding the account.",
                ],
              },
              {
                title: "Cross-functional Engineer",
                org: "Recovery.com",
                period: "2021 – 2023",
                tag: "Health tech · Full-time",
                bullets: [
                  "Led cross-functional projects with design, product, SEO, and content teams — translating business goals into technical execution and shipping work that moved the needle.",
                  "Introduced quality assurance processes and content architecture that reduced production issues and gave non-technical stakeholders more confidence in releases.",
                  "Consistently connected technical work to business outcomes, making the case for every initiative in terms stakeholders at all levels could act on.",
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={job.org}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.06}
                variants={fadeIn}
                className="rounded-2xl p-7 transition-all"
                style={{
                  backgroundColor: "var(--warm-card)",
                  border: "1px solid var(--warm-rule)",
                }}
              >
                <div className="mb-5">
                  <div
                    className="text-base leading-snug"
                    style={{
                      fontFamily: serif,
                      fontWeight: 500,
                      color: "var(--warm-ink)",
                    }}
                  >
                    {job.title}
                  </div>
                  <div
                    className="text-[12px] mt-1"
                    style={{ color: "var(--warm-muted)" }}
                  >
                    {job.org} · {job.period}
                  </div>
                  <div
                    className="text-[10px] mt-3 tracking-[0.18em] uppercase"
                    style={{ color: "var(--warm-accent)" }}
                  >
                    {job.tag}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--warm-body)" }}
                    >
                      <span
                        className="mt-[8px] h-1 w-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--warm-accent)" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="mt-8 text-sm leading-relaxed"
            style={{ color: "var(--warm-body)" }}
          >
            <span
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                color: "var(--warm-ink)",
                fontWeight: 500,
              }}
            >
              Earlier —{" "}
            </span>
            Project Manager at Muuse (NextGen Consortium · Starbucks /
            McDonald&apos;s), web developer at Paperstreet, SEO Account Manager
            at 51Blocks managing 35+ client campaigns end-to-end.
          </motion.p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section
        id="cases"
        className="border-y"
        style={{ borderColor: "var(--warm-rule)", backgroundColor: "var(--warm-bg-soft)" }}
      >
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Cases</p>
            <h2
              className={`${sectionTitleCls} mt-3`}
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              A closer look at how I operate.
            </h2>
            <p className={`mt-4 text-lg ${body}`}>
              Two stories written for approach — problem framing, execution, and
              how I communicate across technical and business stakeholders.
            </p>
          </motion.div>

          <div className="mt-14 space-y-16">
            <CaseStudy
              kicker="CS Ops · Hardware"
              title="Building customer success from scratch at a hardware startup."
              context="Series-A startup with complex physical product deployments, a growing customer base, and no existing CS infrastructure."
              whatIDid={[
                "Designed the entire post-sale motion — ticketing workflows, email cadences, customer education content, self-serve resource hub, and AE-to-CSM handoff SOP.",
                "Led on-site deployments end-to-end, coordinating contractors, logistics, and internal teams while acting as QA and the customer's primary point of contact.",
                "Collected structured field feedback and channeled it directly into engineering conversations, turning customer problems into product improvements.",
                "Launched a referral and video testimonial program that became a meaningful, measurable revenue channel.",
              ]}
              outcomes={[
                "Scalable CS ops where none existed",
                "Faster, consistent resolution paths",
                "Tighter engineering feedback loop",
                "Customer advocacy driving revenue",
              ]}
            />

            <CaseStudy
              kicker="SaaS · Churn prevention"
              title="Technical onboarding and enterprise account recovery."
              context="SaaS platform with enterprise clients who needed hands-on technical onboarding and reliable post-launch support to get full value from the product."
              whatIDid={[
                "Managed complex onboarding end-to-end, coordinating across client teams, internal resources, and platform configurations to ensure successful launches.",
                "Maintained high customer satisfaction through proactive communication, hands-on troubleshooting, and clear expectation management throughout the process.",
                "Identified and recovered a churning enterprise account through deliberate problem-solving, trust rebuilding, and a clear plan to restore confidence.",
                "Guided a high-volume client through a critical go-live phase, helping them launch a large-scale program on time and without disruption.",
              ]}
              outcomes={[
                "Churn prevented on key account",
                "Expanded revenue via relationship recovery",
                "Successful high-volume program launch",
                "Consistently high CSAT post-onboarding",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── NOW / RECENT BUILD ── */}
      <section id="now">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Now</p>
            <h2
              className={`${sectionTitleCls} mt-3`}
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Currently building.
            </h2>
            <p className={`mt-6 text-lg ${body}`}>
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

      {/* ── VALUES / HOW I WORK ── */}
      <section
        id="values"
        className="border-y"
        style={{ borderColor: "var(--warm-rule)", backgroundColor: "var(--warm-bg-soft)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Values</p>
            <h2
              className={`${sectionTitleCls} mt-3`}
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              How I work.
            </h2>
            <p className={`mt-4 text-lg ${body} max-w-2xl`}>
              Values only matter when they show up in behavior. These are the
              ones I operationalize.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Empathy with accountability",
                text: "Warm, clear communication — but with follow-through. Customers feel heard and guided at the same time. I don't choose between the relationship and the result.",
              },
              {
                title: "Builder, not a blocker",
                text: "I'd rather create the system than wait for someone else to. Documented playbooks, self-serve resources, and scalable workflows — built to outlast any single person's memory.",
              },
              {
                title: "Engineering background, customer-first mind",
                text: "I came up through software engineering and made a deliberate move into customer success. That foundation means I can hold a technical conversation without needing a translator — and use that depth to make the customer experience sharper, not just the product.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.06}
                variants={fadeIn}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "var(--warm-card)",
                  border: "1px solid var(--warm-rule)",
                }}
              >
                <div
                  className="h-0.5 w-8 rounded-full mb-5"
                  style={{ backgroundColor: "var(--warm-accent)" }}
                />
                <div
                  className="text-lg leading-snug"
                  style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    color: "var(--warm-ink)",
                  }}
                >
                  {v.title}
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--warm-body)" }}
                >
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className={kicker}>Get in touch</p>
            <h2
              className={`${sectionTitleCls} mt-3`}
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Happy to talk shop.
            </h2>
            <p className={`mt-6 max-w-xl mx-auto text-lg ${body}`}>
              Customer success, technical work, or building things for the
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
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/about" className="hover:underline">
              About
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

/* ══════════════════════════════════════════════════════════ */
/* Sub-components                                             */
/* ══════════════════════════════════════════════════════════ */

function Skill({
  kicker,
  heading,
  body,
}: {
  kicker: string;
  heading: string;
  body: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeIn}
    >
      <p
        className="text-[11px] mb-3 tracking-[0.18em] uppercase"
        style={{ color: "var(--warm-accent)" }}
      >
        {kicker}
      </p>
      <h3
        className="text-2xl md:text-[1.7rem] leading-snug"
        style={{
          fontFamily: serif,
          fontWeight: 500,
          color: "var(--warm-ink)",
        }}
      >
        {heading}
      </h3>
      <p
        className="mt-4 text-lg leading-relaxed"
        style={{ color: "var(--warm-body)" }}
      >
        {body}
      </p>
    </motion.div>
  );
}

function CaseStudy({
  kicker,
  title,
  context,
  whatIDid,
  outcomes,
}: {
  kicker: string;
  title: string;
  context: string;
  whatIDid: string[];
  outcomes: string[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeIn}
    >
      <p
        className="text-[11px] mb-3 tracking-[0.22em] uppercase"
        style={{ color: "var(--warm-accent)" }}
      >
        {kicker}
      </p>
      <h3
        className="text-2xl md:text-[2rem] leading-snug"
        style={{
          fontFamily: serif,
          fontWeight: 500,
          color: "var(--warm-ink)",
        }}
      >
        {title}
      </h3>
      <p
        className="mt-4 text-base leading-relaxed italic"
        style={{ color: "var(--warm-muted)", fontFamily: "var(--font-sans)" }}
      >
        {context}
      </p>

      <div className="mt-7">
        <p
          className="text-[10px] mb-3 tracking-[0.22em] uppercase"
          style={{ color: "var(--warm-muted)" }}
        >
          What I did
        </p>
        <ul className="space-y-3">
          {whatIDid.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-base leading-relaxed"
              style={{ color: "var(--warm-body)" }}
            >
              <span
                className="mt-[10px] h-1 w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--warm-accent)" }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <p
          className="text-[10px] mb-3 tracking-[0.22em] uppercase"
          style={{ color: "var(--warm-muted)" }}
        >
          Outcomes
        </p>
        <div className="flex flex-wrap gap-2">
          {outcomes.map((o) => (
            <span
              key={o}
              className="px-3 py-1.5 rounded-full text-xs"
              style={{
                backgroundColor: "var(--warm-accent-soft)",
                color: "var(--warm-accent-dark)",
              }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({
  nav,
}: {
  nav: { href: string; label: string }[];
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
