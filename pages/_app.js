import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import TheSidebar from '../components/TheSidebar'
import { Col, Container, Row } from 'react-bootstrap'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <Row className="m-0">
        <Col lg={4}>
          <TheSidebar />
        </Col>
        <Col lg={8}>
          <Component {...pageProps} />
        </Col>
      </Row>
    </SessionProvider>

  )
}
