import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Landing from '../../views/Landing/Landing'

function Layout() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Resume | masb0ymas</title>

        {/* Meta Facebook */}
        <meta
          property="og:url"
          content="https://github.com/masb0ymas/next-resume"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="My Resume Nurul Fajri a.k.a masb0ymas"
        />
        <meta
          property="og:description"
          content="ini hanya resume yang aku buat, sesuai pengelaman yg telah didapatkan selama ngoding.."
        />
        <meta
          property="og:image"
          content="https://avatars2.githubusercontent.com/u/30567103?s=460&u=f86346bbbb9034bbab000b3cc24133c22f8f711b&v=4"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <Landing />
    </>
  )
}

export default Layout
