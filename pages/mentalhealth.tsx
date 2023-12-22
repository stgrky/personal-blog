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

interface MentalHealthProps {
  mentalHealthPageContent: any;
}

const MentalHealth: NextPage<MentalHealthProps> = ({
  mentalHealthPageContent,
}) => {
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
    "i am a web developer.",
    1000,
    "i am a digital marketer.",
    1000,
    "i thrive helping startups scale.",
    100,
    "i thrive helping businesses scale.",
    100,
    "i am an interpersonal communicator.",
    100,
    "i am team-focused.",
    100,
    "i am customer-centric.",
    100,
    "i am relentlessly goal-oriented.",
    100,
    "i like creating positive impact.",
    100,
    "i'd be happy to chat with you.",
    10000,
  ];
  return (
    <div className="container mx-auto rounded-lg px-10 mb-8 bg-gray-100">
      <Head>
        <title>Grant Kyle - Web Developer & Digital Marketer</title>
        <link rel="icon" href="/g-icon.ico" />
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
            gtag('config', 'G-ZXDY7EHJSM', {
            path_page: window.location.pathname})`}
      </Script>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 text-gray-800">
        <div className="lg:col-span-4 col-span-1">
          <h1 className="md:mb-8 md:mt-8 text-4xl md:text-6xl font-extrabold text-indigo-700">
            Mental Health
          </h1>
          {/* <div className="mt-2 md:mt-0 h-20 md:h-10">
            <TypeAnimation
              sequence={typewriterText}
              speed={50}
              className="font-bold text-lg lg:text-2xl text-gray-600"
              repeat={Infinity}
            />
          </div> */}
          {mentalHealthPageContent[0].mentalHealthContent.raw.children.map(
            (typeObj: any, index: number) => {
              const children = typeObj.children.map(
                (item: any, itemIndex: number) =>
                  getContentFragment(itemIndex, item.text, item, "")
              );

              console.log("children", children);
              return getContentFragment(index, children, typeObj, typeObj.type);
            }
          )}
          <div className="flex items-center space-x-2 mt-4">
            <div className="inline-block">
              <a target="_blank" href="https://www.linkedin.com/in/sgrantkyle/">
                <LinkedinLogo />
              </a>
            </div>
            <div className="float-right">
              <button className="inline-block bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                <a target="_blank" href="https://calendly.com/grantkyle/">
                  Let's talk
                </a>
              </button>
            </div>
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

export default MentalHealth;
