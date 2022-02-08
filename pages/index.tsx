/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Separator from "../components/Separator";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Thread Reader - Chrome Extension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-6">
        <div>
          <Header />
          <div className="mt-6">
            <div>Easily read twitter threads like a blog or an article.</div>
            <div className="mt-2">
              Unroll the thread by clicking on a button and read thread without
              navigating to a different site.
            </div>
            <div className="mt-2">
              Privacy friendly. All the compute happens on your device.
            </div>
            <div className="mt-3">
              <a href="https://chrome.google.com/webstore/detail/twitter-thread-reader/cbkbehonmkldgmpdpaigonchnngpbnlm">
                <img
                  src="./chrome-web-store.png"
                  alt="Available in the Chrome Web Store"
                  width={200}
                />
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-6">
          <div className="flex font-semibold">
            <img
              src="./down-emoji.png"
              alt="Backhand Index Pointing Down"
              width="26"
              height="26"
            />
            Checkout the demo(15 sec).
          </div>
          <div className="mt-6">
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/tyYaifhY4UE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <Separator />
        <Footer />
        <Separator />
      </div>
    </div>
  );
};

export default Home;
