import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img
            alt="Logo"
            src={logo}
            width="100"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
