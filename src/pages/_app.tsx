import useNProgress from '@nexys/hooks/useNProgress/useNProgress'
import useRefreshStyle from '@nexys/hooks/useRefreshStyle/useRefreshStyle'
import '@nexys/styles/global.scss'
import '@nexys/styles/vars.scss'
import getSiteLayout from 'layouts/core/DefaultLayout'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
// import useLoadingPage from 'hooks/useLoadingPage/useLoadingPage'

const title = 'My Resume'
const description = 'My Resume'
const metaURL = 'https://resume-masb0ymas.vercel.app/'
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
        <link rel="shortcut icon" href={webIconURL} />
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
