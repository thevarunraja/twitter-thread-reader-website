import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta
            name="title"
            content="Twitter thread reader browser extension"
          />
          <meta
            name="description"
            content="Browser extension which enhances thread reading experience"
          />
          <meta
            name="keywords"
            content="twitter thread unroll chrome extension, twitter thread reader chrome extension, thread reader browser extension, twitter thread reader browser extension"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="5 days" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://threadreader.thevarunraja.com/"
          />
          <meta
            property="og:title"
            content="Twitter Thread Reader - Browser Extension"
          />
          <meta
            property="og:description"
            content="Browser extension which enhances thread reading experience"
          />
          <meta
            property="og:image"
            content="https://threadreader.thevarunraja.com/image-og.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://threadreader.thevarunraja.com/"
          />
          <meta
            property="twitter:title"
            content="Twitter Thread Reader - Chrome Extension"
          />
          <meta
            property="twitter:description"
            content="Browser extension which enhances thread reading experience"
          />
          <meta
            property="twitter:image"
            content="https://threadreader.thevarunraja.com/og-image.jpg"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
