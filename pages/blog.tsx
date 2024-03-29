import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import { getPosts } from "../services";
import Image from "next/image";

interface BlogProps {
  posts: any;
}
const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <div
      key="home-index"
      className="container mx-auto rounded-lg lg:px-10 pt-10 mb-8"
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
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date()); 
            gtag('config', 'G-ZXDY7EHJSM', {
            path_page: window.location.pathname})`}
      </Script>
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

export default Blog;
