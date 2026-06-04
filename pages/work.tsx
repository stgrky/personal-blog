import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
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
const sectionTitleCls =
  "text-3xl md:text-[2.6rem] leading-[1.15] tracking-tight text-[var(--warm-ink)]";
const body = "text-[var(--warm-body)] leading-relaxed";

const WORK_SECTIONS = [
  { href: "#what", label: "Skills", id: "what" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#cases", label: "Cases", id: "cases" },
  { href: "#values", label: "Values", id: "values" },
];

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>The work — Grant Kyle</title>
        <meta
          name="description"
          content="Customer success, technical work, and the systems I build at the seam between teams."
        />
      </Head>

      <main
        className="min-h-screen w-full antialiased"
        style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
      >
        <SiteNav sections={WORK_SECTIONS} />

        {/* ── HERO ── */}
        <section id="top">
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
                The work —
              </p>
              <h1
                className="text-4xl md:text-[3.4rem] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: "var(--warm-ink)",
                }}
              >
                What I do for a living.
              </h1>
              <p
                className="mt-7 max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--warm-body)" }}
              >
                Customer success, technical depth, and the operational systems
                that keep teams from depending on heroic memory. A longer look
                at the skills, the roles, the case studies, and how I show up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS / WHAT I'M GOOD AT ── */}
        <section
          id="what"
          className="border-y"
          style={{
            borderColor: "var(--warm-rule)",
            backgroundColor: "var(--warm-bg-soft)",
          }}
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
                depth, and operational clarity. Four things I keep coming back
                to, across roles.
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
        <section id="experience">
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
              McDonald&apos;s), web developer at Paperstreet, SEO Account
              Manager at 51Blocks managing 35+ client campaigns end-to-end.
            </motion.p>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section
          id="cases"
          className="border-y"
          style={{
            borderColor: "var(--warm-rule)",
            backgroundColor: "var(--warm-bg-soft)",
          }}
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
                Two stories written for approach — problem framing, execution,
                and how I communicate across technical and business
                stakeholders.
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

        {/* ── VALUES ── */}
        <section id="values">
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
                className={`${sectionTitleCls} mt-3`}
                style={{ fontFamily: serif, fontWeight: 500 }}
              >
                Happy to talk shop.
              </h2>
              <p className={`mt-6 max-w-xl mx-auto text-lg ${body}`}>
                Customer success, technical work, or building things in the
                mental health space — happy to hear from you.
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
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <SiteFooter />
      </main>
    </>
  );
};

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

function SiteFooter() {
  return (
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
              fontFamily: "var(--font-serif)",
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
  );
}

export default WorkPage;
