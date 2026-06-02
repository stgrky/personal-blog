import React from "react";
import { Fraunces, Inter } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif-base",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans-base",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fraunces.variable} ${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
