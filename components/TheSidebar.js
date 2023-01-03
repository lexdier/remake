import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
import { Image, ListGroupItem } from 'react-bootstrap'

export default function TheSidebar() {
  return (
    <ListGroup className="sidebarFixed p-2">
      <div className="p-2 d-flex justify-content-center align-items-center">
        <Image rounded src="https://picsum.photos/200/75" />
      </div>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-house-chimney me-2" />
          </div>
          <span>Home</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-magnifying-glass me-2" />
          </div>
          <span>Search</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-magnifying-glass me-2" />
          </div>
          <span>Message</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-bell me-2" />
          </div>
          <span>Notifications</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/profile" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-user me-2" />
          </div>
          <span>Profile</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-grip-dots-vertical me-2" />
          </div>
          <span>More</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-address-card me-2" />
          </div>
          <span>About Us</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/login" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-address-card me-2" />
          </div>
          <span>Login</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="p-2 rounded-2 border-0">
        <Link href="/logout" className="text-decoration-none d-flex LinkColor">
          <div>
            <i className="fa-light fa-address-card me-2" />
          </div>
          <span>Logout</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  )
}
