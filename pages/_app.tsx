import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto mt-5 max-w-5xl p-4">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
