/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter thread reader chrome extension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-3 flex flex-col items-center justify-center text-center ">
        <div
          className="absolute top-0 left-1/2 h-64 w-48"
          style={{
            filter: "blur(150px)",
            background:
              "linear-gradient(125.07deg, rgb(129, 102, 196) 10.56%, rgba(147, 110, 177, 0.92) 22.71%, rgba(160, 116, 163, 0.863) 31.62%, rgba(171, 121, 151, 0.82) 38.91%, rgba(186, 127, 136, 0.757) 48.63%, rgba(204, 135, 116, 0.675) 61.18%, rgba(215, 140, 105, 0.63) 68.07%, rgba(227, 145, 92, 0.576) 76.17%, rgba(235, 149, 84, 0.545) 81.43%, rgba(245, 153, 73, 0.5) 88.32%)",
          }}
        />
        <Title />
        <div className="mt-4 text-base text-gray-600 sm:text-2xl">
          Easily read twitter threads like a blog or an article.
        </div>
        <div className=" mt-4 text-base  text-gray-600  sm:mt-6 sm:text-lg">
          Privacy friendly. All compute happens on your device.
        </div>
        <div className="mt-12">
          <a href="https://chrome.google.com/webstore/detail/twitter-thread-reader/cbkbehonmkldgmpdpaigonchnngpbnlm">
            <img
              src="./chrome-web-store.png"
              alt="Available in the Chrome Web Store"
              width={250}
            />
          </a>
        </div>
      </div>
      <div className="mt-12">
        <LiteYouTubeEmbed
          id="tyYaifhY4UE"
          poster="maxresdefault"
          title="Twitter thread reader chrome extension demo"
          muted={true}
        />
      </div>
    </div>
  );
};

export default Home;
