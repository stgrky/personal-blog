import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

export default function GrantLanding() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Mission-Driven", "Servant-Leadership", "Craft-Focused"];

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 400]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory text-slate-900 bg-slate-50">
      {/* ---- HERO ---- */}
      <section className="relative h-[75vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden snap-start">
        {/* Background image (placeholder) */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/hero-bg-placeholder.jpg')] bg-cover bg-center"
          style={{
            backgroundPosition: "center 40%",
            filter: "brightness(0.85)",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 animate-gradientFade" />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-orange-500 to-amber-400 animate-gradient">
            Grant Kyle
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-slate-800 mb-6"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>

          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#work"
              className="btn-primary px-6 py-3 rounded-full font-semibold text-sm"
            >
              Professional Highlights
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="btn-secondary px-6 py-3 rounded-full font-semibold text-sm"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Ambient blobs */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-300/25 rounded-full blur-3xl top-[15%] left-[8%]"
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] bg-amber-200/25 rounded-full blur-3xl bottom-[10%] right-[8%]"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </section>

      {/* ---- ABOUT ---- */}
      <section
        id="about"
        className="snap-start relative min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="z-10"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl text-slate-600 leading-relaxed text-lg mx-auto">
            My name is Grant Kyle, and I build customer experiences that scale.
            I am a customer success and experience leader passionate about
            helping mission-driven companies deliver real impact through
            meaningful relationships with their customers. I specialize in
            building the programs, playbooks, and systems that turn customer
            feedback into action—improving satisfaction, retention, and advocacy
            at scale. My work centers on creating high-touch, proactive
            experiences that balance empathy with execution, ensuring customers
            feel supported, heard, and confident from onboarding to renewal. I’m
            driven by the belief that great customer success isn’t just about
            solving problems—it’s about helping people achieve outcomes that
            matter.
          </p>
        </motion.div>
      </section>

      {/* ---- WORK ---- */}
      <section
        id="work"
        className="snap-start relative min-h-screen flex flex-col justify-center px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Selected Work Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto">
          {[
            {
              title: "Technical CSM Lead at Aquaria",
              desc: "The founding CSM of Aquaria. Responsible for MVP build of all proactive success and reactive support processes, including a revenue-driving Maintenance-as-a-Service model.",
            },
            {
              title: "Marketing Software Engineer at Recovery.com",
              desc: "The first engineer hire underneath the founding engineer. Built the first Resource Center on the website, implementing conversion tactics that increased pageviews by 300%.",
            },
            {
              title: "Project Manager contract at Muuse",
              desc: "A fractional Project Manager, brought onto the project to hire and lead a team of 12 contractors. Diligent work and compelling storytelling helped convince stakeholders to approve a 3-month extension on the project length.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- VALUES ---- */}
      <section
        id="values"
        className="snap-start relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-[#e0f7fa] via-[#fbe9e7] to-[#f3e5f5]"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl z-10"
        >
          <h2 className="text-4xl font-bold mb-10">Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Empathy In Action",
                text: "Building genuine relationships through active listening, thoughtful communication, and a deep understanding of customer needs.",
              },
              {
                title: "Operational Excellence",
                text: "Designing scalable systems and processes that turn great intentions into consistent, measurable results.",
              },
              {
                title: "Mission-driven Integrity",
                text: "Ensuring the center of gravity is always contributing to a greater good. Following through on promises. I don't talk about it, I be about it.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/60 rounded-2xl p-8 shadow-sm border border-white/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-slate-700 text-sm">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---- CONTACT ---- */}
      <section
        id="contact"
        className="snap-start relative min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="z-10"
        >
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            If you are reading this, there is a 98% chance that I will be happy to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:hello@grantkyle.com"
              className="btn-primary px-6 py-3 rounded-full font-semibold text-sm"
            >
              Email Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/sgrantkyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 rounded-full font-semibold text-sm"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="text-center text-slate-500 text-sm py-10">
        © {new Date().getFullYear()} Grant Kyle — Designed with React + Tailwind
      </footer>

      {/* Inline styling */}
      <style jsx>{`
        .btn-primary {
          background: linear-gradient(180deg, #ffb5a7, #fcd5ce);
          color: #111;
          box-shadow: 0 8px 20px -8px rgba(255, 136, 106, 0.4);
          transition: all 0.25s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.25s ease;
        }
        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .animate-gradientFade {
          background-size: 200% 200%;
          animation: gradientFade 10s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes gradientFade {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}

/* ---- COMPONENTS ---- */
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="group relative">
    <span>{label}</span>
    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
      >
        <span
          className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-slate-800 text-base font-medium">
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-500 transition"
              >
                About
              </Link>
              <Link
                href="#work"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Work
              </Link>
              <Link
                href="#values"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-500 transition"
              >
                Values
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-500 transition"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
