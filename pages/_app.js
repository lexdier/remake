import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import TheSidebar from '../components/TheSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {

  return (
    <Auth0Provider
      domain="remake.us.auth0.com"
      clientId="aO59JdSoziMQwish5Sl2Cz3DfHX0suDB"
      redirectUri={'http://localhost:3000'}>
      <Head>
        <title>
          Remake
        </title>
      </Head>
      <Row className="m-0">
        <Col lg={3}>
          <TheSidebar />
        </Col>
        <Col lg={9}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Col>
      </Row>
    </Auth0Provider>

  )
}
