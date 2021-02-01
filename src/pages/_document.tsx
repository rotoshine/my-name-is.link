import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

const PUBLIC_URL = process.env.NEXT_APP_PUBLIC_URL ?? 'https://mynameis.link'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={`${PUBLIC_URL}/favicon.ico`} />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${PUBLIC_URL}/apple-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${PUBLIC_URL}/apple-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${PUBLIC_URL}/apple-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${PUBLIC_URL}/apple-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${PUBLIC_URL}/apple-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${PUBLIC_URL}/apple-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${PUBLIC_URL}/apple-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${PUBLIC_URL}/apple-icon-152x152.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${PUBLIC_URL}/apple-icon-180x180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${PUBLIC_URL}/android-icon-192x192.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${PUBLIC_URL}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={`${PUBLIC_URL}/favicon-96x96.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${PUBLIC_URL}/favicon-16x16.png`}
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content={`${PUBLIC_URL}/ms-icon-144x144.png`}
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="not Zelda." />
          <meta
            name="keywords"
            content="link, zelda, legend of zelda, 젤다의 전설, 링크, 젤다"
          />
          <meta property="og:site_name" content="My name is LINK" />
          <meta property="og:title" content="My name is LINK" />
          <meta
            property="og:image"
            content={`${PUBLIC_URL}/images/3i9lgj.jpg`}
          />
          <meta property="og:image:width" content="480" />
          <meta property="og:image:height" content="344" />
          <meta property="og:url" content={PUBLIC_URL} />
          <meta property="og:description" content="not Zelda." />
          <meta name="twitter:description" content="not Zelda." />
          <meta
            name="twitter:image"
            content={`${PUBLIC_URL}/images/3i9lgj.jpg`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@winterwolf0412" />
          <meta name="twitter:title" content="My name is LINK!!" />

          <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
