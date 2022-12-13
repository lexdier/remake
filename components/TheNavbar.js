import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import canvas from 'react-bootstrap/Offcanvas'

export default function canvasExample(expand){
  return (
    <>
        <Navbar bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar canvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`canvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`canvasNavbar-expand-${expand}`}
              aria-labelledby={`canvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <canvas.Header closeButton>
                <canvas.Title id={`canvasNavbarLabel-expand-${expand}`}>
                  canvas
                </canvas.Title>
              </canvas.Header>
              <canvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`canvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </canvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>-
    </>
  )
}


