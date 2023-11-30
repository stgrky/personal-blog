import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";

interface AlgorithmPracticeProps {
  aboutContent: any;
}

const revString = (str: any) => {
  let initialValue = "";
  return str
    .split("")
    .reduce((reversed, characters) => characters + reversed, initialValue);
};

console.log("revString", revString("asdf"));

const AlgoPractice: NextPage<AlgorithmPracticeProps> = () => {
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg px-10 mb-8 bg-gray-300"
    >
      <Head>
        <title>Vanilla Practice</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-4 col-span-1">
          <h1 className="mb-8 mt-8 text-3xl font-semibold">
            I decidedly need to get better at algorithm fundamentals. So here we
            are.
          </h1>
          <div>{revString("asdf")}</div>
        </div>
      </div>
    </div>
  );
};

export default AlgoPractice;
