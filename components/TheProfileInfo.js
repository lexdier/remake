import { Col, ListGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function TheProfileInfo() {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex">
        <Row className="w-100">
          <Col lg={7}>
            <span>
              user.name
             </span>
          </Col>
          <Col lg={5}>
            <div className="d-flex justify-content-around">
              <Button variant="light" className="border-dark">Edit</Button>
              <Button variant="light" className="border-dark">Config</Button>

            </div>
          </Col>
        </Row>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <span>
           Posts 23
          </span>
          <span>
          Followers 324
          </span>
          <span>
            Following 211
          </span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>


  )
}
