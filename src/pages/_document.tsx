import { ColorSchemeScript } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
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
