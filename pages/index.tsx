import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";
import { getDevPortfolioDetails } from "../services";

// TODO Priorities
// 1) Expound upon the available ContentFragments; ensure I have full range of rich text covered
// 2) Migrate all style fragments to separate file and component

interface DevPortfolioProps {
  devPortfolioContent: any;
}

const DevPortfolio: NextPage<DevPortfolioProps> = ({ devPortfolioContent }) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
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
            className="text-md text-blue-700"
          >
            {obj.children[0].text}
          </a>
        );
      }
      // if (obj.type === "numbered-list") {
      //   console.log(
      //     "obj.children",
      //     obj.children.map((item: any, i: number) => obj.children[i].children)
      //   );
      //   const map = obj.children.map(
      //     (item: any, i: number) => obj.children[i].children
      //   );
      //   const joinedObj = [].concat(...map.children);

      //   console.log("joinedObj", joinedObj);
      // modifiedText = (
      //   <ol key={index} className="list-decimal list-inside">
      //     {obj.children.map((item: any, i: number) => (
      //       <li key={i}>{item}</li>
      //     ))}
      //   </ol>
      // );
      // }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-5xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg px-10 mb-8"
    >
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-white">
        <div className="lg:col-span-4 col-span-1">
          <h1 className="mb-8 mt-8 text-9xl font-semibold">
            hi 👋 welcome to my website
          </h1>
          {devPortfolioContent[0].devPortfolioContent.raw.children.map(
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
    </div>
  );
};

export async function getStaticProps() {
  const devPortfolioContent = (await getDevPortfolioDetails()) || [];

  return {
    props: { devPortfolioContent },
  };
}

export default DevPortfolio;
