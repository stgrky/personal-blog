import type { NextPage } from "next";
import React from "react";

interface PostCardProps {
  post: any;
}

const PostCard: NextPage<PostCardProps> = (props): JSX.Element => {
  return (
    <div>
      {props.post.title}
      {props.post.excerpt}
    </div>
  );
};

export default PostCard;
