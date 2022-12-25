import { useRouter } from 'next/router'
import { Col } from 'react-bootstrap'
import TheCard from '../components/TheCard'
import TheNavbar from '../components/TheNavbar'

export default function Home() {
  const router = useRouter()
  const posts = [1, 2, 3, 4, 5]

  // if (status === 'loading') {
  //  return (
  //     <Card className="vh-100">
  //       <Card.Body>
  //        <Placeholder as={Card.Title} animation="glow">
  //        <Placeholder xs={6} />
  //        </Placeholder>
  //        <Placeholder as={Card.Text} animation="glow">
  //        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
  //        <Placeholder xs={6} /> <Placeholder xs={8} />
  //       </Placeholder>
  //       <Placeholder.Button variant="primary" xs={6} />
  //      </Card.Body>
  //    </Card>
//    )
//}
  return (
    <>
      <TheNavbar />
      <div className="d-flex align-items-center flex-column">
        {posts.map((post) =>
          <Col key={post} className="w-75 ">
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
