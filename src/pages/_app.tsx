import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { Analytics } from '@vercel/analytics/react'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { getCookie, setCookie } from 'cookies-next'
import _ from 'lodash'
import NextApp, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import slugify from 'slugify'
import { BRAND } from '~/config/env'
import { RouterTransition } from '~/core/components/RouterTransition'
import getSiteLayout from '~/layouts/core'

const brand = _.toLower(slugify(BRAND))
const cookieName = `${brand}-color-scheme`

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookie(cookieName, nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  const siteLayout = getSiteLayout(props)

  const title = 'Resume'
  const description = 'My Resume ( masb0ymas )'
  const metaURL = 'https://masb0ymas.netlify.app/'
  const metaImage = '/static/github-logo.png'
  const webIconURL = '/static/github-logo.png'

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

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme, fontFamily: 'Lato' }}
          withGlobalStyles
          withNormalizeCSS
        >
          {/* nprogress loader */}
          <RouterTransition />

          {/* notification provider */}
          <Notifications position="top-right" zIndex={2077} />

          {/* modal provider */}
          <ModalsProvider>
            {/* render site layout */}
            {siteLayout}
            {/* render site layout */}
          </ModalsProvider>

          <Analytics />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return {
    ...appProps,
    colorScheme: getCookie(cookieName, appContext.ctx) || 'dark',
  }
}
