import React, { Fragment } from "react";
import { NextPage } from "next";
import moment from "moment";

interface PostDetailProps {
  post: any;
}

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <b key={index} style={{ color: "var(--warm-ink)" }}>
            {text}
          </b>
        );
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.href) {
        modifiedText = (
          <a
            key={index}
            href={obj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:underline"
            style={{ color: "var(--warm-accent-dark)" }}
          >
            {obj.children?.[0]?.text}
          </a>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3
            key={index}
            className="text-2xl md:text-3xl mb-5 mt-10 leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              color: "var(--warm-ink)",
            }}
          >
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4
            key={index}
            className="text-xl mb-4 mt-8 leading-snug"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              color: "var(--warm-ink)",
            }}
          >
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className="mb-6 text-lg leading-relaxed"
            style={{ color: "var(--warm-body)" }}
          >
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case "unordered-list":
        return (
          <ul
            key={index}
            className="list-disc ml-6 mb-6 space-y-2 text-lg leading-relaxed"
            style={{ color: "var(--warm-body)" }}
          >
            {modifiedText.map((item: any, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="my-8 rounded-2xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <article
      className="overflow-hidden rounded-2xl mb-10"
      style={{
        backgroundColor: "var(--warm-card)",
        border: "1px solid var(--warm-rule)",
      }}
    >
      {post?.featuredImage?.url && (
        // eslint-disable-next-line @next/next/no-img-element
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
      )}

      <div className="px-7 md:px-12 py-10 md:py-14">
        <div
          className="flex flex-wrap items-center gap-3 text-xs mb-6"
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

        <h1
          className="text-4xl md:text-[3rem] leading-[1.1] tracking-tight mb-10"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            color: "var(--warm-ink)",
          }}
        >
          {post.title}
        </h1>

        <div className="prose-content">
          {post?.blogContent?.raw?.children?.map(
            (typeObj: any, index: number) => {
              const children = typeObj.children.map(
                (item: any, itemIndex: number) =>
                  getContentFragment(itemIndex, item.text, item, "")
              );
              return getContentFragment(index, children, typeObj, typeObj.type);
            }
          )}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
