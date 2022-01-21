/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import { AppProps } from 'next/app'
import getSiteLayout from 'layouts/core/DefaultLayout'
import Head from 'next/head'
import '@nexys/global.scss'
import 'styles/sass/main.scss'
import 'slick-carousel/slick/slick.css'
import useNProgress from '@nexys/hooks/useNProgress/useNProgress'
import useRefreshStyle from '@nexys/hooks/useRefreshStyle/useRefreshStyle'
// import useLoadingPage from 'hooks/useLoadingPage/useLoadingPage'

const title = 'Resume'
const description = 'My Resume ( masb0ymas )'
const metaURL = 'https://resume-masb0ymas.vercel.app'
const metaImage = '/static/github-logo.png'
const webIconURL = '/static/github-logo.png'

function App(props: AppProps) {
  useNProgress()
  useRefreshStyle()
  // const loading = useLoadingPage()
  const siteLayout = getSiteLayout(props)
  return (
    <React.Fragment>
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

        {/* import font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />

        {/* <script type="application/ld+json"> */}
        {/*  {JSON.stringify(schemaORG)} */}
        {/* </script> */}
      </Head>
      {/* {loading} */}
      {siteLayout}
    </React.Fragment>
  )
}

export default App
