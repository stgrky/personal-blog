import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, LayoutGroup } from "framer-motion";
import Link from "next/link";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── style constants ─── */
const kicker = "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500";
const sectionTitle = "text-3xl md:text-4xl font-semibold tracking-tight text-slate-900";
const body = "text-slate-500 leading-relaxed";

const TOOLS = [
  "Customer Success", "Post-Sale Ops", "Onboarding Design", "Retention Strategy", "Revenue Expansion",
  "Stakeholder Management", "Escalation Leadership", "Customer Education", "Health Scoring",
  "Voice of Customer", "Process Documentation", "Cross-functional Ops", "0-to-1 Builder",
  "Technical Troubleshooting", "Success Plans", "Spanish (B2)", "Customer Advocacy",
  "Support Infrastructure", "Team Scaling", "Product Feedback Loops", "HubSpot", "Intercom", "Notion",
  "Customer Success", "Post-Sale Ops", "Onboarding Design", "Retention Strategy", "Revenue Expansion",
  "Stakeholder Management", "Escalation Leadership", "Customer Education", "Health Scoring",
  "Voice of Customer", "Process Documentation", "Cross-functional Ops", "0-to-1 Builder",
  "Technical Troubleshooting", "Success Plans", "Spanish (B2)", "Customer Advocacy",
  "Support Infrastructure", "Team Scaling", "Product Feedback Loops", "HubSpot", "Intercom", "Notion",
];

/* ══════════════════════════════════════════════════════════ */
export default function GrantLanding() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("top");

  const roles = useMemo(
    () => [
      "Technical Customer Success Manager",
      "Post-Sale Experience Builder",
      "The Bridge Between Customers & Teams",
    ],
    []
  );

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 90]);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  useEffect(() => {
    const ids = ["top", "what", "work", "cases", "values", "contact"];
    const observers = ids.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionId); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const NAV = [
    { href: "#what",    label: "What I do",    id: "what"    },
    { href: "#work",    label: "Experience",   id: "work"    },
    { href: "#cases",   label: "Case studies", id: "cases"   },
    { href: "#values",  label: "Values",       id: "values"  },
    { href: "#contact", label: "Contact",      id: "contact" },
  ];

  return (
    <main className="min-h-screen w-full text-slate-900 bg-white antialiased">

      {/* ── STICKY NAV ── */}
      <LayoutGroup>
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-5 py-3.5 flex items-center justify-between">

            <Link href="#top" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 grid place-items-center shadow-sm shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
                <span className="text-[11px] font-bold text-white tracking-tight">GK</span>
              </div>
              <div className="leading-tight hidden sm:block">
                <div className="text-sm font-semibold text-slate-900">Grant Kyle</div>
                <div className="text-[11px] text-slate-400">CSM · Technical · Ops</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-indigo-600 font-medium"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-50 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
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
                href="https://www.linkedin.com/in/sgrantkyle/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 rounded-lg font-semibold"
              >
                LinkedIn →
              </a>
              <MobileMenu nav={NAV} />
            </div>
          </div>
        </header>
      </LayoutGroup>

      {/* ── HERO ── */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_-10%_-5%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(ellipse_55%_45%_at_105%_15%,rgba(139,92,246,0.09),transparent_55%),radial-gradient(ellipse_60%_70%_at_50%_110%,rgba(99,102,241,0.05),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <motion.div style={{ y: heroY }}>
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-start">

              {/* Left: Message */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-medium text-indigo-700">Technical CSM · Open to new roles</span>
                </div>

                <h1 className="text-4xl md:text-[3.4rem] leading-[1.1] font-semibold tracking-tight">
                  I bridge the gap between{" "}
                  <span className="gradient-text">complex products</span>{" "}
                  and the customers who need to succeed with them.
                </h1>

                <div className="mt-5 h-7 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={roleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.38, ease: "easeOut" }}
                      className="text-base md:text-lg text-slate-500 font-medium"
                    >
                      {roles[roleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <p className={`mt-6 max-w-xl ${body}`}>
                  I came up through software engineering — JavaScript, React, TypeScript — and made the deliberate move into customer success because I realized the most interesting problems live at the intersection of people and product. That technical foundation is what makes me different: I can sit in a conversation with an engineering team and actually understand what's being said, then turn around and translate it for a customer or executive in a way that builds trust instead of confusion. I'm most energized taking things from zero to one — building the post-sale infrastructure, feedback loops, and customer experiences that didn't exist yet.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#cases" className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold">
                    View case studies
                  </a>
                  <a href="#contact" className="btn-secondary px-5 py-2.5 rounded-xl text-sm font-semibold">
                    Get in touch
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Customer-facing foundation",
                    "Technically fluent, not a silo",
                    "0-to-1 ops builder",
                    "Stakeholder translation",
                    "Voice of customer → product",
                    "Spanish business proficiency",
                  ].map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Right: Snapshot panel */}
              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="md:sticky md:top-[72px] rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-100 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Profile snapshot</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">How I typically show up</div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white tracking-wide uppercase">
                    Technical CSM
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 divide-y divide-slate-100">
                  <SnapshotRow label="Relationships" value="Executive-to-end-user ownership" />
                  <SnapshotRow label="Background" value="Software engineering → Customer success" />
                  <SnapshotRow label="CS operations" value="Onboarding, health signals, escalation" />
                  <SnapshotRow label="Cross-functional" value="Voice of customer to Eng + Product" />
                  <SnapshotRow label="Split" value="~60% customer-facing · 40% technical" />
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Background & tools</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["JavaScript", "React", "TypeScript", "HubSpot", "Intercom", "Notion", "Jira", "Figma"].map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md text-[11px] bg-slate-50 border border-slate-100 text-slate-600 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="border-y border-slate-100 bg-slate-50 py-3 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-6 whitespace-nowrap w-max">
          {TOOLS.map((tool, i) => (
            <span key={i} className="inline-flex items-center gap-6 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
              {tool}
              <span className="h-1 w-1 rounded-full bg-indigo-300 inline-block flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT I DO ── */}
      <section id="what" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className={kicker}>How I drive value</div>
          <h2 className={`${sectionTitle} mt-2`}>What you get when I own an account book.</h2>
          <p className={`mt-3 max-w-2xl ${body}`}>
            I work at the intersection of customer relationships, technical depth, and operational clarity. These are the four things I consistently deliver.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0} variants={fadeUp}
            className="md:col-span-2 pillar-card rounded-2xl border border-slate-200 bg-white p-7 group"
          >
            <div className="text-xl mb-4" aria-hidden>🎯</div>
            <div className="text-sm font-semibold text-slate-900">Customer adoption & enablement</div>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Onboarding that leads to real usage — not just a training checkbox. I design success plans, build enablement resources, and create communication rhythms that keep customers engaged long past go-live and build habits that actually stick.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0.08} variants={fadeUp}
            className="pillar-card rounded-2xl border border-slate-200 bg-white p-7 group"
          >
            <div className="text-xl mb-4" aria-hidden>🔧</div>
            <div className="text-sm font-semibold text-slate-900">Technical problem-solving</div>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Having built software professionally, I understand what's actually happening under the hood — which means I can diagnose issues more precisely, have more credible conversations with engineering teams, and translate technical complexity into something customers can act on. It's not a party trick; it's what makes the customer experience better.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0.12} variants={fadeUp}
            className="pillar-card rounded-2xl border border-slate-200 bg-white p-7 group"
          >
            <div className="text-xl mb-4" aria-hidden>⚙️</div>
            <div className="text-sm font-semibold text-slate-900">Ops & process design</div>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Documented systems beat heroic memory. I build playbooks, ticketing workflows, SOPs, and handoff processes that make teams scalable — not dependent on any one person knowing the answer.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0.16} variants={fadeUp}
            className="md:col-span-2 pillar-card rounded-2xl border border-slate-200 bg-white p-7 group"
          >
            <div className="text-xl mb-4" aria-hidden>🔗</div>
            <div className="text-sm font-semibold text-slate-900">Cross-functional bridge</div>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Customer reality doesn't translate itself to internal priorities. I collect structured feedback from the field, surface patterns to product and engineering, and bring updates back to customers — closing the loop in both directions. I've managed relationships from end-user to executive and know how to communicate differently for each.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="work" className="bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end gap-6 justify-between"
          >
            <div>
              <div className={kicker}>Experience</div>
              <h2 className={`${sectionTitle} mt-2`}>Where I've built things that mattered.</h2>
              <p className={`mt-3 max-w-2xl ${body}`}>
                A mix of startups, contracts, and growth environments — intentionally concise. The goal is signal, not volume.
              </p>
            </div>
            <a href="#contact" className="btn-secondary px-5 py-2.5 rounded-xl text-sm font-semibold self-start md:self-auto whitespace-nowrap flex-shrink-0">
              Ask for the full resume →
            </a>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Technical CSM",
                org: "Aquaria",
                period: "2024 – Present",
                tag: "Hardware startup · Series A",
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08} variants={fadeUp}
                className="work-card rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:shadow-slate-100 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{job.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{job.org} · {job.period}</div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 whitespace-nowrap flex-shrink-0">
                    {job.tag}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-slate-500">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-indigo-300 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Earlier career callout */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0.24} variants={fadeUp}
            className="mt-5 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
          >
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Earlier: </span>
              Project Manager at Muuse (NextGen Consortium · Starbucks / McDonald's), web developer at Paperstreet, SEO Account Manager at 51Blocks managing 35+ client campaigns end-to-end.
            </p>
            <a href="#contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors whitespace-nowrap">
              Full resume →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="cases" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className={kicker}>Case studies</div>
          <h2 className={`${sectionTitle} mt-2`}>A closer look at how I operate.</h2>
          <p className={`mt-3 max-w-2xl ${body}`}>
            Written to show approach — problem framing, execution, and how I communicate across technical and business stakeholders.
          </p>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0} variants={fadeUp}
          >
            <CaseCard
              tag="CS Ops · Hardware"
              title="Building customer success from scratch at a hardware startup"
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
              tools={["HubSpot", "Notion", "SOPs & playbooks", "Customer education content", "Field QA"]}
            />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={0.1} variants={fadeUp}
          >
            <CaseCard
              tag="SaaS · Churn prevention"
              title="Technical onboarding and enterprise account recovery at a loyalty SaaS"
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
              tools={["Enterprise onboarding", "Technical troubleshooting", "Stakeholder management", "Expectation setting", "Success planning"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <div className={kicker}>Values</div>
            <h2 className={`${sectionTitle} mt-2`}>How I prefer to work.</h2>
            <p className={`mt-3 max-w-2xl ${body}`}>
              Values only matter when they show up in behavior. These are the ones I try to operationalize.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
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
                title: "Engineering background, customer-first mindset",
                text: "I came up through software engineering and made a deliberate move into customer success. That foundation means I can hold a technical conversation without needing a translator — and use that depth to make the customer experience sharper, not just the product.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08} variants={fadeUp}
                className="rounded-2xl bg-white border border-slate-200 p-7"
              >
                <div className="h-0.5 w-8 bg-indigo-500 rounded-full mb-5" />
                <div className="text-sm font-semibold text-slate-900">{v.title}</div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
        >
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <div className={kicker}>Contact</div>
              <h2 className={`${sectionTitle} mt-2`}>Let's connect.</h2>
              <p className={`mt-3 max-w-lg ${body}`}>
                If you're building a team where customer empathy and technical depth both matter, I'm open to conversations.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@grantkyle.com" className="btn-primary px-5 py-3 rounded-xl text-sm font-semibold text-center">
                  hello@grantkyle.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sgrantkyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-3 rounded-xl text-sm font-semibold text-center"
                >
                  LinkedIn →
                </a>
              </div>
              <p className="mt-5 text-xs text-slate-400">
                Prefer a quick call? Send an email with a few times and I'll get back to you fast.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
              <div className="text-sm font-semibold text-slate-900 mb-4">What I'm looking for</div>
              <ul className="space-y-2.5">
                {[
                  "Clear success metrics and real ownership",
                  "High-trust, high-accountability culture",
                  "Products with genuine customer impact",
                  "Room to build systems, not just maintain them",
                  "A team that values both the relationship and the result",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-slate-500">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="text-center text-slate-400 text-xs py-8 border-t border-slate-100">
        © {new Date().getFullYear()} Grant Kyle &nbsp;·&nbsp; Built with Next.js, React, Tailwind &amp; Framer Motion
      </footer>

      {/* ─────────────────────────── STYLES ─────────────────────────── */}
      <style jsx>{`
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #4f46e5 0%, #4338ca 100%);
          color: #fff;
          box-shadow: 0 4px 14px -4px rgba(79, 70, 229, 0.55);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
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
          transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }
        .btn-secondary:hover {
          transform: translateY(-1px);
          border-color: rgba(79, 70, 229, 0.35);
          color: #4f46e5;
        }

        /* Proof chips */
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

        /* Marquee */
        .marquee-track {
          animation: marquee 38s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pillar cards */
        .pillar-card {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pillar-card:hover {
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.12), 0 4px 24px -6px rgba(99, 102, 241, 0.12);
        }

        /* Work cards */
        .work-card {
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .work-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}

/* ══════════════════════════════════════════════════════════ */
/* Sub-components                                             */
/* ══════════════════════════════════════════════════════════ */

function SnapshotRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 pt-3 first:pt-0">
      <div className="text-[11px] text-slate-400 font-medium">{label}</div>
      <div className="text-[11px] font-semibold text-slate-700 text-right">{value}</div>
    </div>
  );
}

function CaseCard({
  tag,
  title,
  context,
  whatIDid,
  outcomes,
  tools,
}: {
  tag: string;
  title: string;
  context: string;
  whatIDid: string[];
  outcomes: string[];
  tools: string[];
}) {
  return (
    <div className="h-full rounded-2xl bg-white border border-slate-200 p-7 hover:shadow-md hover:shadow-slate-100 transition-all flex flex-col gap-5">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">{tag}</span>
        <div className="mt-2 text-base font-semibold text-slate-900 leading-snug">{title}</div>
        <div className="mt-2 text-sm text-slate-400">{context}</div>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2.5">What I did</div>
        <ul className="space-y-2">
          {whatIDid.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-slate-500">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-indigo-300 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2.5">Outcomes</div>
        <div className="flex flex-wrap gap-2">
          {outcomes.map((o) => (
            <span key={o} className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 border border-indigo-100 text-indigo-700">
              {o}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2.5">Tools &amp; methods</div>
        <div className="flex flex-wrap gap-1.5">
          {tools.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-white border border-slate-200 text-slate-500 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ nav }: { nav: { href: string; label: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-[5px] items-center justify-center w-4 h-4">
          <span className={`block h-[1.5px] w-full bg-slate-700 rounded-full origin-center transition-all duration-200 ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-[1.5px] w-full bg-slate-700 rounded-full transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[1.5px] w-full bg-slate-700 rounded-full origin-center transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden"
          >
            <nav className="flex flex-col p-1.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
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
