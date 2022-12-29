import { Col, Image, Row } from 'react-bootstrap'

export default function ThePosts() {
  return (
    <Row className="mb-3">
      <Col>
        <Image rounded src="https://picsum.photos/300/300" alt="pic" />
      </Col>
      <Col>
        <Image rounded src="https://picsum.photos/300/300" alt="pic" />
      </Col>
      <Col>
        <Image rounded src="https://picsum.photos/300/300" alt="pic" />
      </Col>
    </Row>
  )
}
