import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import TheFooter from '../components/TheFooter'
import TheNavbar from '../components/TheNavbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <TheNavbar />
      <Component {...pageProps} />
      <TheFooter />
    </SessionProvider>

  )
}
