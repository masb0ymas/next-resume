import { MantineProvider, localStorageColorSchemeManager } from "@mantine/core";
import AOS from "aos";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import env from "~/config/env";
import { theme } from "~/core/styles/theme";
import getSiteLayout from "~/layouts/core";

import "@mantine/core/styles.css";
import "aos/dist/aos.css";

const colorSchemeManager = localStorageColorSchemeManager({
  key: `${env.APP_PREFIX}-color-scheme`,
});

export default function App(props: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const siteLayout = getSiteLayout(props);

  const title = "Resume";
  const description = "My Resume ( masb0ymas )";
  const metaURL = "https://resume.masb0ymas.com";
  const metaImage = "/static/logo.png";
  const webIconURL = "/static/logo.png";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <link rel="icon" href={webIconURL} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaURL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaURL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager}>
        {siteLayout}
      </MantineProvider>
    </>
  );
}
