import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import PostWidget from "../components/PostWidget";
import PostCard from "../components/PostCard";
import SiteNav from "../components/SiteNav";
import { getPosts } from "../services";

interface BlogProps {
  posts: any[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const serif = "var(--font-serif)";

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="pzj73ZcC3nv6lymzsrykN7OrN5xHRLnlseK1nWEpI4E"
        />
        <title>Blog — Grant Kyle</title>
      </Head>

      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZXDY7EHJSM', { path_page: window.location.pathname })
        `}
      </Script>

      <main
        className="min-h-screen w-full antialiased"
        style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
      >
        <SiteNav />

        {/* ── HERO ── */}
        <section>
          <div className="mx-auto max-w-5xl px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <p
                className="mb-7 text-base"
                style={{
                  fontFamily: serif,
                  color: "var(--warm-accent)",
                  fontStyle: "italic",
                }}
              >
                Blog —
              </p>
              <h1
                className="text-4xl md:text-[3.4rem] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  color: "var(--warm-ink)",
                }}
              >
                Notes, occasionally written.
              </h1>
              <p
                className="mt-6 max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--warm-body)" }}
              >
                Things I&apos;ve been thinking about — at the seam between
                customers, products, and the people who build them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── POSTS ── */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-5xl px-6">
            {hasPosts ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                <div className="lg:col-span-8 col-span-1">
                  {posts.map((post: any) => (
                    <PostCard post={post.node} key={post.node.slug} />
                  ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                  <div className="lg:sticky relative top-24">
                    <PostWidget categories={undefined} slug={undefined} />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl p-10 md:p-14 text-center"
                style={{
                  backgroundColor: "var(--warm-card)",
                  border: "1px solid var(--warm-rule)",
                }}
              >
                <p
                  className="text-xl md:text-2xl mb-3"
                  style={{
                    fontFamily: serif,
                    fontStyle: "italic",
                    color: "var(--warm-ink)",
                    fontWeight: 500,
                  }}
                >
                  Nothing here yet.
                </p>
                <p
                  className="max-w-md mx-auto text-base leading-relaxed"
                  style={{ color: "var(--warm-body)" }}
                >
                  I&apos;ll start publishing here when I&apos;ve got something
                  worth saying. In the meantime —{" "}
                  <Link
                    href="/"
                    className="transition-colors hover:underline"
                    style={{
                      color: "var(--warm-accent-dark)",
                      fontFamily: serif,
                      fontStyle: "italic",
                      fontWeight: 500,
                    }}
                  >
                    head back home
                  </Link>
                  .
                </p>
              </div>
            )}
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
              <Link href="/work" className="hover:underline">
                Work
              </Link>
              <Link href="/life" className="hover:underline">
                Life
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

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Blog;
