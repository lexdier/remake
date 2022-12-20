import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

function FlushExample() {
  return (
    <div className="sidebarFixed ">
      <ListGroup>

        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-house-chimney me-2" />
            </div>
            <span>Home</span>
          </Link>
        </Button>
        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-magnifying-glass me-2" />
            </div>
            <span>Search</span>
          </Link>
        </Button>


        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-magnifying-glass me-2" />
            </div>
            <span>Message</span>
          </Link>
        </Button>


        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-bell me-2" />
            </div>
            <span>Notifications</span>
          </Link>
        </Button>


        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-user me-2" />
            </div>
            <span>Profile</span>
          </Link>
        </Button>


        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-grip-dots-vertical me-2" />
            </div>
            <span>More</span>
          </Link>
        </Button>


        <Button className="m-2" variant="light">
          <Link href="/" className="text-decoration-none d-flex">
            <div>
              <i className="fa-light fa-address-card me-2" />
            </div>
            <span>About Us</span>
          </Link>
        </Button>


      </ListGroup>
    </div>
  )
}

export default FlushExample
