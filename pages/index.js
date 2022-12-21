import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Card, Col, Placeholder } from 'react-bootstrap'
import TheCard from '../components/TheCard'

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [users, setUsers] = useState([]) //terminar
  const posts = [1, 2, 3, 4, 5]
  useEffect(() => {
    axios.get('/api/users')
      // .then(console.log)
      .then((res) => setUsers(res.data))
  }, [])
  if (status === 'loading') {
    return (
      <Card className="vh-100">
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    )
  }
  return (
    <>
      <div>
        {posts.map((post) =>
          <Col key={post}>
            <TheCard />
          </Col>
        )
        }
      </div>

      {// session ? (<div>
        // <h1>{session.user.name}</h1>
        // <h1>{session.user.email}</h1>
        // <img src={session.user.image} alt="" />
        //</div>) : (
        // <p>Esquyeletom</p>)
      }
    </>
  )
}
