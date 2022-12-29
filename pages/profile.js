import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { Card, Col, Row } from 'react-bootstrap'
import TheProfileInfo from '../pages/.components/TheProfileInfo'
import { Image } from 'react-bootstrap'
import TheHistoryList from '../pages/.components/TheHistoryList'
import ThePosts from '../pages/.components/ThePosts'

export default function profile() {
//  const { user, isAuthenticated, isLoading } = useAuth0();
//  console.log(user)
//  console.log(user.email)

  return (
    <Card>
      <Link href="/">
        <Button variant="outline-success">Home</Button>
      </Link>
      <Card.Header>
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
      </Card.Header>
      <Card.Body>
        <TheHistoryList />
      </Card.Body>
      <Card.Footer>
        <ThePosts />
        <ThePosts />
        <ThePosts />
      </Card.Footer>
    </Card>
  )
}
