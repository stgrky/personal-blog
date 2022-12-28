import type { NextPage } from "next";
import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Image from "next/image";

const posts: { title: string; excerpt: string }[] = [
  { title: "This is a test title", excerpt: "This is an excerpt for our blog" },
  {
    title: "This is the second test title",
    excerpt: "This is the second excerpt for our blog",
  },
  {
    title: "This is the third test title",
    excerpt: "This is the third excerpt for our blog",
  },
];

const Home: NextPage = () => {
  return (
    <div key="home-index" className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Grant Kyle's Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              <div>
                <div>
                  <PostWidget />
                  <b>{post.title}</b>
                </div>
                {post.excerpt}{" "}
              </div>
              <br />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
