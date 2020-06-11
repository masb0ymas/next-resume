import React from 'react'
import Head from 'next/head'
import Landing from '../src/views/Landing/Landing'
import Header from '../src/components/layouts/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>

      <Landing />
    </>
  )
}
