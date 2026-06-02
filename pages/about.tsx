import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

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

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About — Grant Kyle</title>
        <meta
          name="description"
          content="A longer story about how I got here, how I think about my work, and what I'm building right now."
        />
      </Head>

      <main
        className="min-h-screen w-full antialiased"
        style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
      >
        {/* ── Soft top bar ── */}
        <header
          className="sticky top-0 z-50 backdrop-blur-md"
          style={{
            backgroundColor: "rgba(253, 251, 247, 0.82)",
            borderBottom: "1px solid var(--warm-rule)",
          }}
        >
          <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg leading-none"
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Grant Kyle
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors hover:underline"
              style={{ color: "var(--warm-accent-dark)" }}
            >
              ← Home
            </Link>
          </div>
        </header>

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
                About me —
              </p>
              <h1
                className="text-4xl md:text-[3.6rem] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: "var(--warm-ink)",
                }}
              >
                The longer version.
              </h1>
              <p
                className="mt-7 text-lg md:text-[1.2rem] leading-relaxed"
                style={{ color: "var(--warm-body)" }}
              >
                The homepage gives the short version. This is the longer one —
                how I got here, how I think about my work, and what I&apos;m
                building right now.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── HOW I GOT HERE ── */}
        <Section title="How I got here.">
          <p>
            I came up through sales. I spent my first real job selling SEO and
            web development at a digital marketing agency — which is a polite
            way of saying I cold-called small businesses, learned how to listen
            to a customer&apos;s frustration without flinching, and got
            comfortable with the discomfort of asking people for money.
          </p>
          <p>
            Naturally curious, I got pulled toward what I was selling. I learned
            the JavaScript ecosystem — Vanilla JS, React, TypeScript — and made
            the deliberate move into software development. I knew I
            wouldn&apos;t stay competitive against people who live and die by
            the code, but I was relentless about the training anyway. The
            engineering rooms taught me how things actually work, which is
            still the most useful thing I&apos;ve learned in a career.
          </p>
          <p>
            After several years in engineering roles, my customer-facing
            instincts had grown considerably, and I started looking for roles
            that fit my natural skill set. That landed me where I am now:
            living at the intersection of people and product.
          </p>
        </Section>

        {/* ── HOW I THINK ABOUT THE WORK ── */}
        <Section title="How I think about the work.">
          <p>
            The most interesting problems live at the seam between teams. The
            place where engineering meets the customer&apos;s real life. The
            place where the product&apos;s capabilities meet the executive&apos;s
            actual priorities. The place where the support ticket meets the
            roadmap.
          </p>
          <p>
            Most companies struggle there because the people on either side
            don&apos;t speak the same language. The engineer doesn&apos;t want
            to hear feelings; the customer doesn&apos;t care about the
            implementation. The exec wants the summary; the analyst wants the
            detail. I find that translation work genuinely interesting, and the
            engineering background means I can do it without making things up
            in either direction.
          </p>
          <p>
            What I aim for, when I&apos;m at my best: customers feel like
            someone actually heard them, engineers feel like they have a clear
            view of what&apos;s happening in the field, and the executive sees
            the pattern emerge in a way that lets them make a decision. That
            doesn&apos;t happen by accident; it happens because someone is
            quietly doing the connective work in the middle.
          </p>
        </Section>

        {/* ── WHAT I'M BUILDING ── */}
        <Section title="What I&rsquo;m building right now.">
          <p>
            Outside my day job, I&apos;m building modern, client-managed
            websites for therapists in private practice. Calming sites built on
            Next.js and Sanity, designed so the therapist themselves can edit
            any page or publish a blog post — no developer in the loop.
          </p>
          <p>
            It started as a side project for my mom, who&apos;s a clinical
            psychologist. It turned into a real offering once I realized how
            many therapists are stuck between Squarespace and an agency
            invoice — and how few of them have a website that actually feels
            like their practice.
          </p>
          <p>
            If that&apos;s interesting to you,{" "}
            <Link
              href="/web-development"
              className="transition-colors hover:underline"
              style={{
                color: "var(--warm-accent-dark)",
                fontStyle: "italic",
                fontFamily: serif,
                fontWeight: 500,
              }}
            >
              there&apos;s a separate page about it
            </Link>
            .
          </p>
        </Section>

        {/* ── CONTACT ── */}
        <section
          className="border-y"
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
              <p className={kicker}>Reach out</p>
              <h2
                className="mt-3 text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: "var(--warm-ink)",
                }}
              >
                If any of this resonated.
              </h2>
              <p
                className="mt-6 max-w-xl mx-auto text-lg leading-relaxed"
                style={{ color: "var(--warm-body)" }}
              >
                I&apos;m happy to talk shop — customer success, technical work,
                or building things for the mental health space. Email or
                LinkedIn, whichever&apos;s easier.
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
              <Link href="/" className="hover:underline">
                Home
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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
          <h2
            className="text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight mb-8"
            style={{
              fontFamily: serif,
              fontWeight: 500,
              color: "var(--warm-ink)",
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="space-y-5 text-lg leading-relaxed"
            style={{ color: "var(--warm-body)" }}
          >
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
