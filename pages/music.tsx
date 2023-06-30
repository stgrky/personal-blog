import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import { getMusicPageDetails } from "../services";
import Image from "next/image";

interface MusicProps {
  musicContent: any;
}

const MusicPage: NextPage<MusicProps> = ({ musicContent }) => {
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
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
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
  console.log("musicContent", musicContent[0]);
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg px-10 mb-8 bg-gray-300"
    >
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-4 col-span-1">
        <h1 className="mb-8 mt-8 text-3xl font-semibold">About Grant</h1>
          {musicContent[0].musicPageContent.raw.children.map(
            (typeObj: any, index: number) => {
              const children = typeObj.children.map(
                (item: any, itemIndex: number) =>
                  getContentFragment(itemIndex, item.text, item)
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
  const musicContent = (await getMusicPageDetails()) || [];

  return {
    props: { musicContent },
  };
}

export default MusicPage;
