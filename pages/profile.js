import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { Card, Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

export default function profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  console.log(user.email)
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </Card.Text>
        </Card.Body>
      <Link href="/">
        <Button variant="outline-success">Home</Button>
      </Link>
      </Card>
    </Container>
  )
}
