import type { NextPage } from "next";
import React from "react";
import moment from "moment";
import Link from "next/Link";

interface PostCardProps {
  post: any;
}

const PostCard: NextPage<PostCardProps> = (props): JSX.Element => {
  console.log("props PostCard", props);
  return (
    <div className="bg-white shadlow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={props.post.featuredImage.url}
          alt={props.post.title}
          className="object-top absolute h-80 w-full object-cover rounded shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1
        className="transition duration-200 text-center mb-8 cursor-pointer
      hover:text-pink-600 text-3xl font-semibold
      "
      >
        <Link href={`/post/${props.post.slug}`}>{props.post.title}</Link>
      </h1>
      <div className="bloc lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={props.post.author.photo.url}
            alt={props.post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {props.post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <span>{moment(props.post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {props.post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${props.post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
