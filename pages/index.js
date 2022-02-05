import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

import ListPost from "../components/HomePage/ListPosts/ListPost";
import Slide from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <Banner />

      <Slide />
      <ListPost />
      {/* <CateLog /> */}
      <Footer />
    </>
  );
}
