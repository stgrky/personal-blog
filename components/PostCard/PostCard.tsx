import type { NextPage } from "next";
import React from "react";
import moment from "moment";
import Link from "next/link";

interface PostCardProps {
  post: any;
}

const PostCard: NextPage<PostCardProps> = ({ post }): JSX.Element => {
  return (
    <article
      className="overflow-hidden rounded-2xl mb-10 transition-all"
      style={{
        backgroundColor: "var(--warm-card)",
        border: "1px solid var(--warm-rule)",
      }}
    >
      {post?.featuredImage?.url && (
        <Link href={`/post/${post.slug}`} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="block w-full"
            style={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Link>
      )}

      <div className="px-7 md:px-10 py-8 md:py-10">
        <div
          className="flex flex-wrap items-center gap-3 text-xs mb-5"
          style={{ color: "var(--warm-muted)" }}
        >
          {post?.author?.name && (
            <span className="inline-flex items-center gap-2">
              {post.author?.photo?.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.author.photo.url}
                  alt={post.author.name}
                  width={22}
                  height={22}
                  className="rounded-full object-cover"
                  style={{ height: 22, width: 22 }}
                />
              )}
              <span>{post.author.name}</span>
            </span>
          )}
          {post?.createdAt && (
            <>
              <span aria-hidden>·</span>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </>
          )}
        </div>

        <h2
          className="text-2xl md:text-[2rem] leading-tight"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            color: "var(--warm-ink)",
          }}
        >
          <Link
            href={`/post/${post.slug}`}
            className="transition-colors"
            style={{ color: "var(--warm-ink)" }}
          >
            {post.title}
          </Link>
        </h2>

        {post?.excerpt && (
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--warm-body)" }}
          >
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/post/${post.slug}`}
          className="inline-flex items-center gap-1.5 mt-6 text-sm transition-colors hover:underline"
          style={{
            color: "var(--warm-accent-dark)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Read more
          <span>→</span>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
