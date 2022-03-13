import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Momento - Home</title>
        <meta name="description" content="Making those beautiful moment last" />
        <link rel="icon" href="/momento.svg" type="image/svg+xml" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
