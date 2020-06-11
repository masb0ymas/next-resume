import React from 'react'
import App from 'next/app'
import '../src/components/styles/main.scss'
import '../src/components/styles/main.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
