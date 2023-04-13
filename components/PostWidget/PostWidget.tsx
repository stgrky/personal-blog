import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/Link";
import { getRecentPosts, getSimilarPosts } from "../../services";

interface WidgetProps {
  categories: any;
  slug: any;
}
const PostWidget: NextPage<WidgetProps> = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts().then((result: any) =>setRelatedPosts(result))
    } 
    else {
      getRecentPosts().then((result: any) =>setRelatedPosts(result))
    }
    return () => {};
  }, [slug]);
  return <div>Post Widget</div>;
};

export default PostWidget;
