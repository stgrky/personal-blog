import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getPosts, getPostDetails } from "../../services";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author/Author";
import PostWidget from "../../components/PostWidget";

const serif = "var(--font-serif)";

const PostDetails = ({ post }) => {
  if (!post) {
    return (
      <main
        className="min-h-screen w-full flex items-center justify-center px-6"
        style={{ backgroundColor: "var(--warm-bg)", color: "var(--warm-ink)" }}
      >
        <div className="text-center">
          <p
            className="text-2xl mb-4"
            style={{
              fontFamily: serif,
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Post not found.
          </p>
          <Link
            href="/blog"
            className="transition-colors hover:underline"
            style={{ color: "var(--warm-accent-dark)" }}
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} — Grant Kyle</title>
        {post.excerpt && <meta name="description" content={post.excerpt} />}
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
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg leading-none"
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Grant Kyle
            </Link>
            <Link
              href="/blog"
              className="text-sm transition-colors hover:underline"
              style={{ color: "var(--warm-accent-dark)" }}
            >
              ← Blog
            </Link>
          </div>
        </header>

        {/* ── POST + SIDEBAR ── */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="col-span-1 lg:col-span-8">
                <PostDetail post={post} />
                <Author author={post.author} />
              </div>
              <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky lg:top-24">
                  <PostWidget
                    slug={post.slug}
                    categories={
                      post.categories
                        ? post.categories.map((c) => c.slug)
                        : []
                    }
                  />
                </div>
              </div>
            </div>
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

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data || null },
  };
}

export async function getStaticPaths() {
  const posts = (await getPosts()) || [];
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
