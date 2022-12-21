import { Card, Col, Container, Row } from 'react-bootstrap'

export default function TheCard() {
  return (
    <>
      <Card className="text-center m-4 w-50">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Img
            src="https://img.freepik.com/fotos-premium/hombre-negocios-usando-dispositivos-tecnologia-e-iconos-interfaz-linea-delgada_117023-904.jpg?w=2000" />
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row>
            <Col lg="auto">
              <div>
                <i class="fa-light fa-heart me-4" />
                <i class="fa-light fa-message-smile me-4" />
                <i class="fa-light fa-share-all"></i>
              </div>
            </Col>
            <Col/>
            <Col lg="auto">
              <div>
                <i class="fa-light fa-bookmark" />
              </div>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}
