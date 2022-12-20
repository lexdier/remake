import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import TheSidebar from '../components/TheSidebar'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <TheSidebar />
      <Component {...pageProps} />
    </SessionProvider>

  )
}
