import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function GrantLanding() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = useMemo(
    () => ["Technical CSM", "Customer Experience Operator", "Engineering-Adjacent Builder"],
    []
  );

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const sectionTitle = "text-3xl md:text-4xl font-semibold tracking-tight";
  const sectionKicker = "text-sm uppercase tracking-[0.18em] text-slate-500";
  const bodyText = "text-slate-600 leading-relaxed";

  return (
    <main className="min-h-screen w-full text-slate-900 bg-slate-50">
      {/* --- Sticky Nav --- */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 shadow-sm grid place-items-center">
              <span className="font-semibold text-slate-800">GK</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Grant Kyle</div>
              <div className="text-xs text-slate-500">Customer Success • Technical • Ops</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            <NavLink href="#work" label="Highlights" />
            <NavLink href="#what" label="What I deliver" />
            <NavLink href="#cases" label="Case studies" />
            <NavLink href="#values" label="Values" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@grantkyle.com"
              className="hidden sm:inline-flex btn-secondary px-4 py-2 rounded-xl text-sm font-medium"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sgrantkyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold"
            >
              LinkedIn
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* --- HERO --- */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* subtle gradient + noise */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(251,146,60,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(1000px_circle_at_50%_90%,rgba(59,130,246,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 md:pt-20 md:pb-16 relative">
          <motion.div style={{ y: heroY }} className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Left: Message */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className={`${sectionKicker} mb-4`}>Technical Customer Success</div>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
                I help customers adopt complex products and get outcomes they can measure.
              </h1>

              <div className="mt-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45 }}
                    className="text-lg md:text-xl text-slate-700"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className={`mt-6 max-w-2xl ${bodyText}`}>
                I bring a customer-facing foundation (business development + account management) and hands-on technical experience
                (software engineering). Today, I operate as a technical CSM: translating between stakeholders, troubleshooting real problems,
                and building repeatable systems that scale adoption, retention, and customer confidence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cases" className="btn-primary px-5 py-3 rounded-2xl text-sm font-semibold inline-flex items-center justify-center">
                  View case studies
                </a>
                <a href="#contact" className="btn-secondary px-5 py-3 rounded-2xl text-sm font-semibold inline-flex items-center justify-center">
                  Get in touch
                </a>
              </div>

              {/* proof chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Exec-to-end-user stakeholder mgmt",
                  "Engineering fluency",
                  "Process + playbooks",
                  "Calm escalation leadership",
                  "Customer education + enablement",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 border border-slate-200 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Proof Panel */}
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Snapshot</div>
                  <div className="text-xs text-slate-500 mt-1">How I typically show up</div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900 text-white">CSM</span>
              </div>

              <div className="mt-5 space-y-4">
                <MetricRow label="Adoption & enablement" value="High-touch + scalable systems" />
                <MetricRow label="Technical problem-solving" value="Root cause, integrations, escalation" />
                <MetricRow label="Operating rhythm" value="Success plans, QBRs, health signals" />
                <MetricRow label="Cross-functional execution" value="Product, Eng, Ops alignment" />
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-3">Tools and comfort zones</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HubSpot",
                    "Notion",
                    "Intercom/KB",
                    "Next.js/React",
                    "APIs + integrations",
                    "Technical troubleshooting",
                    "Documentation systems",
                  ].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      {/* --- Selected Highlights --- */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className={sectionKicker}>Selected highlights</div>
            <h2 className={`${sectionTitle} mt-2`}>Work that blends people, product, and execution.</h2>
            <p className={`mt-3 max-w-2xl ${bodyText}`}>
              A few representative chapters. I’m intentionally concise here, the goal is credibility and signal.
            </p>
          </div>
          <a href="#contact" className="btn-secondary px-5 py-3 rounded-2xl text-sm font-semibold self-start md:self-auto">
            Ask for the full resume
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Technical CSM Lead",
              org: "Aquaria",
              bullets: [
                "Built CS foundations: support workflows, playbooks, and proactive customer communications.",
                "Led technical troubleshooting across stakeholders and external service providers.",
                "Designed scalable self-serve strategy to reduce repeat issues and improve consistency.",
              ],
              tag: "Hardware + field ops",
            },
            {
              title: "Marketing Software Engineer",
              org: "Recovery.com",
              bullets: [
                "Delivered customer-facing web experiences with strong UX + conversion fundamentals.",
                "Partnered with product, design, and content to ship fast and sustainably.",
                "Improved discoverability and structure of educational content on-site.",
              ],
              tag: "Web + growth",
            },
            {
              title: "Project Manager (Contract)",
              org: "Muuse",
              bullets: [
                "Coordinated a contractor team and kept delivery moving with clear scopes and narratives.",
                "Managed stakeholder expectations and execution across a shifting environment.",
                "Built structure: milestones, accountability, and crisp comms.",
              ],
              tag: "Delivery + alignment",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{p.org}</div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                  {p.tag}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- What I Deliver --- */}
      <section id="what" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className={sectionKicker}>How I drive value</div>
        <h2 className={`${sectionTitle} mt-2`}>What you can expect when I own an account book.</h2>
        <p className={`mt-3 max-w-3xl ${bodyText}`}>
          I’m motivated by clarity: defined outcomes, measurable adoption, and a customer experience that earns trust. These are the core lanes I
          operate in.
        </p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Adoption & activation",
              text: "Onboarding that leads to usage, not just training. Success plans, enablement, and habits that stick.",
            },
            {
              title: "Technical problem-solving",
              text: "I’ll get into the weeds when needed: root cause, systems thinking, integrations, and calm escalation leadership.",
            },
            {
              title: "Retention readiness",
              text: "Health signals, risk mitigation, and value narratives that align stakeholders before renewal season shows up.",
            },
            {
              title: "Cross-functional execution",
              text: "Turning customer reality into internal priorities: crisp feedback loops with Product, Eng, and Ops.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-white/80 border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-slate-900">{c.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Case Studies --- */}
      <section id="cases" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className={sectionKicker}>Case studies</div>
        <h2 className={`${sectionTitle} mt-2`}>A closer look at how I operate.</h2>
        <p className={`mt-3 max-w-3xl ${bodyText}`}>
          These are written to show approach: problem framing, execution, and how I communicate across stakeholders. Swap in metrics as you like.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <CaseCard
            title="Scaling support without losing the human touch"
            context="Hardware startup with high-touch customers and operational constraints."
            bullets={[
              "Standardized intake and triage to reduce noise and clarify ownership.",
              "Built customer-facing education and proactive communication rhythms.",
              "Created repeatable documentation for external technicians and internal escalation.",
            ]}
            outcome={[
              "Faster, more consistent resolution paths",
              "Less reliance on ad hoc knowledge",
              "Improved customer confidence through clarity",
            ]}
            tools={["HubSpot", "Notion/KB", "Playbooks", "Service templates"]}
          />

          <CaseCard
            title="Driving adoption across multiple stakeholder layers"
            context="Complex product usage where buyer and end user needs don’t always match."
            bullets={[
              "Aligned on outcomes with the economic buyer and translated them into day-to-day workflows for operators.",
              "Created enablement moments tied to real milestones, not generic training.",
              "Closed the loop: surfaced patterns to internal teams and returned updates to customers.",
            ]}
            outcome={[
              "Clearer value narrative across stakeholders",
              "Higher engagement through workflow-based enablement",
              "Better internal prioritization through patterned feedback",
            ]}
            tools={["Success plans", "QBR narrative", "Enablement assets", "Stakeholder mapping"]}
          />
        </div>
      </section>

      {/* --- Values (cleaner, less “poster”) --- */}
      <section
        id="values"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className={sectionKicker}>Values</div>
          <h2 className={`${sectionTitle} mt-2`}>How I prefer to work.</h2>
          <p className={`mt-3 max-w-3xl ${bodyText}`}>
            Values are only useful when they show up in behavior. These are the ones I try to operationalize.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <ValueCard
              title="Empathy, with standards"
              text="Warm communication, clear expectations, and follow-through. Customers feel heard and also guided."
            />
            <ValueCard
              title="Operational excellence"
              text="Documented systems beat heroic memory. Consistency scales. Metrics tell the truth."
            />
            <ValueCard
              title="Integrity and accountability"
              text="Say what you’ll do, do what you said, and close the loop. Especially when things get hard."
            />
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white/80 shadow-sm p-8 md:p-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <div className={sectionKicker}>Contact</div>
              <h2 className={`${sectionTitle} mt-2`}>Let’s connect.</h2>
              <p className={`mt-3 max-w-2xl ${bodyText}`}>
                If you’re hiring for Customer Success where relationship-building and technical depth both matter, I’m open to conversations.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@grantkyle.com" className="btn-primary px-5 py-3 rounded-2xl text-sm font-semibold text-center">
                  hello@grantkyle.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sgrantkyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-3 rounded-2xl text-sm font-semibold text-center"
                >
                  LinkedIn
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Prefer a quick call? Send an email with a couple times and I’ll respond quickly.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-900">What I’m looking for</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {[
                  "Clear success metrics and accountability",
                  "High-trust, high-ownership culture",
                  "Product-led organization with strong customer outcomes",
                  "Room to build systems and improve adoption",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-slate-500 text-sm py-10">
        © {new Date().getFullYear()} Grant Kyle • React + Next.js + Tailwind
      </footer>

      {/* Inline styling */}
      <style jsx>{`
        .btn-primary {
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(2, 6, 23, 0.98));
          color: white;
          box-shadow: 0 14px 30px -18px rgba(2, 6, 23, 0.7);
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }
        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(15, 23, 42, 0.12);
          color: rgba(15, 23, 42, 0.9);
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.92);
          transform: translateY(-1px);
        }
      `}</style>
    </main>
  );
}

/* --- Components --- */

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="text-sm font-medium text-slate-800 text-right">{value}</div>
    </div>
  );
}

function CaseCard({
  title,
  context,
  bullets,
  outcome,
  tools,
}: {
  title: string;
  context: string;
  bullets: string[];
  outcome: string[];
  tools: string[];
}) {
  return (
    <div className="rounded-3xl bg-white/80 border border-slate-200 shadow-sm p-7 hover:shadow-md transition-shadow">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{context}</div>

      <div className="mt-5 grid gap-5">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">What I did</div>
          <ul className="space-y-2 text-sm text-slate-600">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">Outcome</div>
          <div className="flex flex-wrap gap-2">
            {outcome.map((o) => (
              <span key={o} className="px-2.5 py-1 rounded-full text-xs bg-slate-50 border border-slate-200 text-slate-700">
                {o}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">Tools</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-white border border-slate-200 text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="group relative">
    <span className="hover:text-slate-900 transition-colors">{label}</span>
    <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white/80"
        aria-label="Open menu"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1">
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-2 text-sm">
              {[
                { href: "#work", label: "Highlights" },
                { href: "#what", label: "What I deliver" },
                { href: "#cases", label: "Case studies" },
                { href: "#values", label: "Values" },
                { href: "#contact", label: "Contact" },
              ].map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
