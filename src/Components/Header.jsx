import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideRegister}) {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-primary border shadow">
      <Container>
        <Link to={'/'} className='text-decoration-none '><Navbar.Brand className='fw-bolder' href="#home">Education</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {insideRegister?<></>:<Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className='text-decoration-none '><Nav.Link href="#home" className='text-info' style={{textDecoration:'none'}}>Home</Nav.Link></Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header