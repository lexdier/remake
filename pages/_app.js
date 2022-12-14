import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import TheFooter from '../components/TheFooter'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <Component {...pageProps} />
      <TheFooter />
    </SessionProvider>

  )
}
