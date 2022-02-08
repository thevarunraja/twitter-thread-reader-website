import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:text-white">
      <div className=" m-auto max-w-2xl px-6 pt-6 pb-12 tracking-wide  sm:pt-12">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
