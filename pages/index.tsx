import type { NextPage } from "next";
import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import { getPosts } from "../services";
import Image from "next/image";

// const posts: { title: string; excerpt: string }[] = [
//   { title: "This is a test title", excerpt: "This is an excerpt for our blog" },
//   {
//     title: "This is the second test title",
//     excerpt: "This is the second excerpt for our blog",
//   },
//   {
//     title: "This is the third test title",
//     excerpt: "This is the third excerpt for our blog",
//   },
// ];

const Home: NextPage = (props) => {
  console.log("props", props);
  return (
    <div key="home-index" className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Grant Kyle's Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))} */}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
