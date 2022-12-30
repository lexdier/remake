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
    <Card className="rounded-0 border-0">
      <Card.Body>
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
        <Row>
          <Col>
            <TheHistoryList />
          </Col>
        </Row>
        <Row>
          <Col>
            <ThePosts />
            <ThePosts />
            <ThePosts />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
