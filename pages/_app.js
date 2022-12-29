import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import TheSidebar from '../components/TheSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
//  const { user, isAuthenticated, isLoading } = useAuth0()
//  const router = useRouter()
//  useEffect(() => {
//    if (!isAuthenticated) {
//     router.push('./login')
//    } else {
//      router.push('./')
//    }
//  })
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
      <Row className="m-0 vh-100">
        <Col lg={2}>
          <TheSidebar />
        </Col>
        <Col lg={10}>
          <Container className="p-4">
            <Component {...pageProps} />
          </Container>
        </Col>
      </Row>
    </Auth0Provider>
  )
}
