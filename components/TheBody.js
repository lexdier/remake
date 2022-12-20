import { Col, Row } from 'react-bootstrap'
import TheCard from './TheCard'
import Container from 'react-bootstrap/Container'

export default function TheBody() {

  const posts = [1, 2, 3, 4, 5]
  return (
    <Container>
      <Row>
        <Col lg={6}>
          {posts.map(() =>
            <TheCard />
          )
          }
        </Col>
      </Row>
    </Container>
  )
}
