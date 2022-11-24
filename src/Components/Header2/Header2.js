import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import '../Header/Header.css'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='container' key={'secondary'} variant={'secondary'} fluid>
      <Link className='royalRes'>ROYAL RESTROUA</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='navBar me-auto my-2 my-lg-0'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/menu">Menu</CustomLink>
            <CustomLink to="/special"> Special</CustomLink>
            <CustomLink to="/events" >Events</CustomLink>
            <CustomLink to="/chefs">Chefs</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Book A Table</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;