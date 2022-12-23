import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { Card, Container } from 'react-bootstrap'

export default function profile() {

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      <Link href="/">
        <Button variant="outline-success">Home</Button>
      </Link>
      </Card>
    </Container>
  )
}
