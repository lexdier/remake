import { Card, Col, Container, Offcanvas, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import TheComments from './TheComments'
import LeaveComments from './LeaveComments'

export default function TheCard() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)
  const [count, setCount] = useState(0)

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} scroll="scroll" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Comments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TheComments seeComments />
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <Card className="m-4">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Img
              src="https://img.freepik.com/fotos-premium/hombre-negocios-usando-dispositivos-tecnologia-e-iconos-interfaz-linea-delgada_117023-904.jpg?w=2000" />
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col lg="auto">
                <div>
                  <i onClick={() => setCount(count + 1)} class="fa-light fa-heart me-4" />
                  <i class="fa-light fa-message-smile me-4" />
                  <i class="fa-light fa-share-all"></i>
                </div>
              </Col>
              <Col />
              <Col lg="auto">
                <div>
                  <i class="fa-light fa-bookmark" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <i class="fa-light fa-person me-2" />
                <span>Le gusta a {count} personas</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>The Post Comment</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="light" className="p-0" onClick={handleShow}>See Comments</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}
