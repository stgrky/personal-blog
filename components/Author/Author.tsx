import React from "react";
import { NextPage } from "next";
import Image from "next/image";

interface AuthorProps {
  author: any;
  slug: any;
}
const Author: NextPage<AuthorProps> = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14"></div>
      <Image
        unoptimized
        alt={author.name}
        height={50}
        width={50}
        className="align-middle rounded-full"
        src={author.photo.url}
      />
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.authorBio}</p>
    </div>
  );
};

export default Author;
