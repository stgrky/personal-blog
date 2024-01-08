import type { NextPage } from "next";
import Script from "next/script";
import React, { Fragment } from "react";
import Head from "next/head";
import LinkedinLogo from "../public/LinkedinLogo";
import { getMentalHealthPageDetails } from "../services";
import { CheckIcon } from "@heroicons/react/20/solid";

interface MentalHealthProps {
  mentalHealthPageContent: any;
}

const MentalHealth: NextPage<MentalHealthProps> = ({
  mentalHealthPageContent,
}) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      // console.log("obj", obj);
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
      if (obj.type === "list-item") {
        const map = obj.children.map(
          (item: any, i: number) => obj.children[i].children
        );
        const joinedObj = [].concat(...map);
        // console.log("LI", joinedObj); 
        modifiedText = (
          <Fragment key={index}>
            {joinedObj.map((item: any, i: any) => (
              <li className="mb-8 text-lg md:text-xl" key={i}>
                {item.text}
              </li>
            ))}
          </Fragment>
        );
      }
      if (obj.type === "numbered-list") {
        const map = obj.children.map(
          (item: any, i: any) => obj.children[i].children[0]
        );

        // console.log("map", map);
        const joinedObj = [].concat(...map);
        // console.log("OL", joinedObj.concat(...map));

        // console.log("joinedObj", joinedObj[0]);
        modifiedText = (
          <Fragment key={index}>
            <ol>
              {joinedObj.map((item: any, i: any) => (
                <li className="mb-8 text-lg md:text-xl" key={i}>
                  {item.text}
                </li>
              ))}
            </ol>
          </Fragment>
        );
      }
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

  const includedFeatures = [
    `Home, About, Services, Contact Pages`,
    `Site Deployed and Hosted`,
    `Content Uploaded & Optimized`,
    `14 Days of Feedback & Edits`,
  ];

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:overflow-visible lg:px-0">
      <Head>
        <title>Websites For Therapists</title>
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
      <div className="bg-white">
        <div className="mx-auto py-24 sm:px-6 sm:pb-12">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <p className="text-lg font-semibold leading-7 text-indigo-600">
                Leave the work to me, focus on your patients
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                I build websites for therapists
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Using modern, performant technology that Google favors for
                ranking, I build you a content management system that is simple
                and efficient for you to use and maintain. This requires{" "}
                <strong>minimal technical knowledge on your end</strong>,
                allowing you to do what you do best; make a difference in the
                lives of those you serve.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://calendly.com/grantkyle/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
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
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"></div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Pricing... Simplified
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Services offered here are suggestions. Additional needs can
                  and will met, pending individual consultation and quote.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Base website *
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Your business is already thriving. You just need a
                    cyber-business card to represent your practice. This package
                    is for you.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        Pay once, own it forever
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $549
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          USD
                        </span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Purchase Now
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        CMS training included *
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-10">
            <h1 className="font-bold text-3xl mb-2">Recommended Additions</h1>
            <h4 className="text-gray-600">
              These are a few examples; we can build your dream site
            </h4>
          </div>
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-gray-600 text-lg">Site Manager</h3>
              <p className="text-gray-600 mt-1">
                <span className="font-bold text-black text-4xl">$59</span>{" "}
                /Month
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For a complete hands-off experience. You effectively have a
                personal site guardian & maid.
              </p>
              <div className="text-sm text-gray-600 mt-4">
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Preventative maintenance
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Hosting management
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Analytics w/ regular reporting
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Minor design tweaks
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Image updates on request
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
            <div className="w-full md:w-1/3 text-white bg-purple-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-lg">Additional Pages</h3>
              <p className="mt-1">
                <span className="font-bold text-4xl">$79</span> /base price
              </p>
              <p className="text-sm opacity-75 mt-2">
                Need an additional page? Start here. Quotes given on individual
                basis; pricing increases based on complexity and functionality
                of needs.
              </p>
              <div className="text-sm mt-4"></div>
              <button className="w-full text-purple-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
              <h3 className="text-gray-600 text-lg">SEO Professional</h3>
              <p className="text-gray-600 mt-1">
                <span className="font-bold text-black text-4xl">$739</span>{" "}
                /Month
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For growing your practice. Blog page included with content
                tailored to your practice.
              </p>
              <div className="text-sm text-gray-600 mt-4">
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  1 post per week
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Professionally written content
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  <b>Site Manager</b> included
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Blog page included
                </p>
                <p className="my-2">
                  <CheckIcon
                    className="h-6 w-5 flex-none inline text-indigo-600"
                    aria-hidden="true"
                  />
                  Growth strategy & monitoring
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {mentalHealthPageContent[0].mentalHealthContent.raw.children.map(
                (typeObj: any, index: number) => {
                  const children = typeObj.children.map(
                    (item: any, itemIndex: number) =>
                      getContentFragment(itemIndex, item.text, item, "")
                  );

                  // console.log("childrenasdfasdfasd", children);
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
  const mentalHealthPageContent = (await getMentalHealthPageDetails()) || [];

  // console.log("mentalHealthPageContent", mentalHealthPageContent);

  return {
    props: { mentalHealthPageContent },
  };
}

export default MentalHealth;
