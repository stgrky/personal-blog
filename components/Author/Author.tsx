import React from "react";
import { NextPage } from "next";

interface AuthorProps {
  author: any;
  slug?: any;
}

const Author: NextPage<AuthorProps> = ({ author }) => {
  if (!author?.name) return null;

  return (
    <div
      className="rounded-2xl p-8 md:p-10 mb-10 text-center"
      style={{
        backgroundColor: "var(--warm-bg-soft)",
        border: "1px solid var(--warm-rule)",
      }}
    >
      {author?.photo?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={author.photo.url}
          alt={author.name}
          width={64}
          height={64}
          className="mx-auto rounded-full object-cover"
          style={{ height: 64, width: 64 }}
        />
      )}
      <h3
        className="mt-4 mb-2 text-xl"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          color: "var(--warm-ink)",
        }}
      >
        {author.name}
      </h3>
      {author?.authorBio && (
        <p
          className="max-w-xl mx-auto text-base leading-relaxed"
          style={{ color: "var(--warm-body)" }}
        >
          {author.authorBio}
        </p>
      )}
    </div>
  );
};

export default Author;
