import type { NextPage } from "next";
import Script from "next/script";
import React, { Fragment } from "react";
import Head from "next/head";
import GithubLogo from "../public/GithubLogo";
import LinkedinLogo from "../public/LinkedinLogo";
import { TypeAnimation } from "react-type-animation";
import { getMentalHealthPageDetails } from "../services";

// TODO Priorities
// 1) Expound upon the available ContentFragments; ensure I have full range of rich text covered
// 2) Migrate all style fragments to separate file and component

interface MentalHealthPageProps {
  mentalHealthPageContent: any;
}

const DevPortfolio: NextPage<MentalHealthPageProps> = ({
  mentalHealthPageContent,
}) => {
  console.log(
    "mentalHealthPageContentttt",
    mentalHealthPageContent[0].mentalHealthContent.raw
  );
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
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-xl md:text-2xl">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-4xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-3xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
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

  const typewriterText = [
    "Need a site for your mental health practice?",
    2000,
    "I am your person.",
    1000,
    "And don't worry about knowing technology...",
    1000,
    "It will be painless for you to manage your own content.",
    5000,
  ];
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg px-10 mb-8 bg-gray-300"
    >
      <Head>
        <title>Mental Health Practice Web Developer</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 font-sans">
        <div className="lg:col-span-4 col-span-1">
          <h1 className="mb-8 mt-8 text-3xl font-semibold">
            {mentalHealthPageContent[0].mentalHealthPageTitle}
          </h1>
          <div>
            {mentalHealthPageContent[0].mentalHealthContent.raw.children.map(
              (typeObj: any, index: number) => {
                const children = typeObj.children.map(
                  (item: any, itemIndex: number) =>
                    getContentFragment(itemIndex, item.text, item, "")
                );
                return getContentFragment(
                  index,
                  children,
                  typeObj,
                  typeObj.type
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const mentalHealthPageContent = (await getMentalHealthPageDetails()) || [];

  console.log("mentalHealthPageContent", mentalHealthPageContent);

  return {
    props: { mentalHealthPageContent },
  };
}

export default DevPortfolio;
