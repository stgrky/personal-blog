import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import { getPosts } from "../services";
import Image from "next/image";

interface HomeProps {
  posts: any;
}
const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg lg:px-10 pt-10 mb-8 bg-gray-300"
    >
      <Head>
        <meta
          name="google-site-verification"
          content="pzj73ZcC3nv6lymzsrykN7OrN5xHRLnlseK1nWEpI4E"
        />
        <title>Grant Kyle's Personal Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date()); 
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            path_page: window.location.pathname,});`,
          }}
        />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: any) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={undefined} slug={undefined} />
            {/* <Categories /> */}
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
