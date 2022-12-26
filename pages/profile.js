import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import TheProfileInfo from '../components/TheProfileInfo'
import { Image } from 'react-bootstrap'

export default function profile() {
//  const { user, isAuthenticated, isLoading } = useAuth0();
//  console.log(user)
//  console.log(user.email)
  return (
    <Card>
      <Card.Header>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="d-flex justify-content-center align-items-center">
                <Image roundedCircle src="https://picsum.photos/200/200" alt="pic" />
              </div>
            </Col>
            <Col lg={6}>
              <TheProfileInfo />
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <h2>The body</h2>
        <Link href="/">
          <Button variant="outline-success">Home</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <h2>The footer</h2>
      </Card.Footer>
    </Card>
  )
}
