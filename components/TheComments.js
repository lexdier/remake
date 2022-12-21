import { Card, Col, Row } from 'react-bootstrap'

export default function TheComments() {
  const comments = [1, 2, 3, 4, 5]
  return (
    <>
      {comments.map(() =>
        <Card body className="mb-2">
        <span>
        This is some text within a card body.
        </span>
          <Row>
            <Col lg="auto">
              <div>
                <i class="fa-light fa-heart me-4" />
                <i class="fa-light fa-message-smile me-4" />
                <i class="fa-light fa-share-all"></i>
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </>
  )
}
