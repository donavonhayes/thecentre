import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">React-CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="react-crud-navbar" />
        <Navbar.Collapse id="react-crud-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Entry List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;