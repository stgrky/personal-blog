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
          className="object-top h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PostCard;
