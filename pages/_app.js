import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <head>
        <title>
          Remake
        </title>
      </head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
