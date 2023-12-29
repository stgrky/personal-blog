import type { NextPage } from "next";
import Script from "next/script";
import React, { Fragment } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Head from "next/head";
import GithubLogo from "../public/GithubLogo";
import LinkedinLogo from "../public/LinkedinLogo";
import { TypeAnimation } from "react-type-animation";
import { getZeroqodeAssignmentDetails } from "../services";

interface ZeroqodeProps {
  zeroqodeAssignmentContent: any;
}

const Zeroqode: NextPage<ZeroqodeProps> = ({ zeroqodeAssignmentContent }) => {
  console.log("zeroqodeAssignmentContent", zeroqodeAssignmentContent);
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
          <p key={index} className="mb-8 text-xl md:text-lg">
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

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Head>
        <title>Zeroqode Assignment</title>
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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Let's outline the details needed for "X" company's success
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Below we will outline:
              </h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                <ul className="list-disc">
                  <li>
                    The features of the project and their descriptions,
                    including for both buyer and administrator
                  </li>
                  <li>
                    Additional details needed to complete the scope of work
                  </li>
                  <li>Pricing based on the features</li>
                </ul>
              </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd999c2fb1571594aedf60232928d50bd.cdn.bubble.io%2Ff1686280064239x400737368506166140%2FFrame-1010106465.webp?w=1024&h=742&auto=compress&dpr=2&fit=max"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {zeroqodeAssignmentContent[0].zerocodeAssignmentBulletContent.raw.children.map(
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
              <div className="flex items-center space-x-2 mt-4">
                <div className="inline-block">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sgrantkyle/"
                  >
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
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const zeroqodeAssignmentContent =
    (await getZeroqodeAssignmentDetails()) || [];

  console.log("zeroqodeAssignmentContent", zeroqodeAssignmentContent);

  return {
    props: { zeroqodeAssignmentContent },
  };
}

export default Zeroqode;
