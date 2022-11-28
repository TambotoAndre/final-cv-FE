import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#info">Personal Information</Nav.Link>
            <Nav.Link href="#am">About Me</Nav.Link>
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#sk">Skills</Nav.Link>
            <Nav.Link href="https://www.instagram.com/andretamboto_/">Instagram</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default ColorSchemesExample;