import { Col, ListGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function TheProfileInfo() {
  return (
    <ListGroup className="border-0">
      <ListGroup.Item className="border-0">
        <Row className="w-100">
          <Col lg={7}>
            <h3>
              lexdier_savio
            </h3>
          </Col>
          <Col lg={5}>
            <div className="d-flex justify-content-around">
              <Button variant="light" className="border-dark">Edit</Button>
              <Button variant="light" className="border-dark">Config</Button>

            </div>
          </Col>
        </Row>
      </ListGroup.Item>
      <ListGroup.Item className="border-0">
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
      <ListGroup.Item className="border-0">Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className="border-0">Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className="border-0">Vestibulum at eros</ListGroup.Item>
    </ListGroup>


  )
}
