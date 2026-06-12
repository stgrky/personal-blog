import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../../services";

interface WidgetProps {
  categories: any;
  slug: any;
}

const PostWidget: NextPage<WidgetProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any) =>
        setRelatedPosts(result || [])
      );
    } else {
      getRecentPosts().then((result: any) => setRelatedPosts(result || []));
    }
  }, [slug, categories]);

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <aside
      className="rounded-2xl p-7 md:p-8"
      style={{
        backgroundColor: "var(--warm-card)",
        border: "1px solid var(--warm-rule)",
      }}
    >
      <p
        className="text-[11px] tracking-[0.22em] uppercase mb-5"
        style={{ color: "var(--warm-accent)" }}
      >
        {slug ? "Related" : "Recent"}
      </p>
      <h3
        className="text-xl mb-6 pb-5"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          color: "var(--warm-ink)",
          borderBottom: "1px solid var(--warm-rule)",
        }}
      >
        {slug ? "Related posts" : "Recent posts"}
      </h3>

      <ul className="space-y-5">
        {relatedPosts.map((post: any) => (
          <li key={post.title} className="flex items-start gap-4">
            {post?.featuredImage?.url && (
              <Link
                href={`/post/${post.slug}`}
                className="block flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: 56, height: 56 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  width={56}
                  height={56}
                  className="block w-full h-full object-cover"
                />
              </Link>
            )}
            <div className="flex-grow min-w-0">
              <p
                className="text-[11px] mb-1"
                style={{ color: "var(--warm-muted)" }}
              >
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link
                href={`/post/${post.slug}`}
                className="text-sm leading-snug transition-colors hover:underline"
                style={{
                  color: "var(--warm-ink)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 500,
                }}
              >
                {post.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PostWidget;
