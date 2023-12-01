import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";

interface AlgorithmPracticeProps {
  aboutContent: any;
}

// ********************REVERSE STRING and PALINDROME CHECKER
// const reverseString = (string: string) => {
//   let reversedString = "";
//   for (let characters of string) {
//     reversedString = characters + reversedString;
//   }
//   return reversedString === string;
// };

// console.log("reverseString", reverseString("redrum"));

// ********************INTEGER REVERSAL kinda like REVERSE STRING
// const reverseInteger = (n: number) => {
//   const intToString = n.toString().split("").reverse().join("");

//   return Number(intToString);
// };

// console.log("reverseInt", reverseInteger(1003));

// ********************CLASSIC FIZZBUZZ

// const fizzbuzz = (n: number) => {
//   let i = 1;
//   while (i <= n) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// };
// const output = fizzbuzz(100);
// console.log(output);

// ********************MAX CHARACTERS/ CHARACTER MAP
const maxCharacters = (str: string) => {
  const charMap = {};
  let max = 1;
  let maxChar = "";

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
    debugger;
  }

  return maxChar;
};
console.log("maxCharacters", maxCharacters("hhhhhhhhheeeehllloooooooooooooooorrrrr"));

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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AlgoPractice;
