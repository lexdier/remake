import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import TheSidebar from '../components/TheSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import TheNavbar from '../components/TheNavbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <Row className="m-0">
        <Col lg={4} className="w-25">
          <TheSidebar />
        </Col>
        <Col lg={8} className="w-75">
         <Container className="p-3">
           <Row>
             <Col>
               <Row>
                 <Col>
                   <TheNavbar />
                 </Col>
               </Row>
               <Row>
                 <Col className="m-0  p-5 d-flex align-items-center justify-content-center">
                   <Component {...pageProps} />
                 </Col>
               </Row>
             </Col>
           </Row>
         </Container>
        </Col>
      </Row>
    </SessionProvider>

  )
}
