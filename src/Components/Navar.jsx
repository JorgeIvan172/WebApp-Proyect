import React from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default navv;

function navv(){

  const navStyle = {
    backgroundColor: 'Black', // Color de fondo del Navbar
    color: 'white', // Color del texto en el Navbar
    // Puedes agregar más propiedades de estilo según tus necesidades
  };

  const linkStyle = {
    color: 'white',// Color de los enlaces del Navbar
    margin: '20px',
    fontWeight: 'bold',
    // Puedes agregar más propiedades de estilo según tus necesidades
  };


  const ButtonStyle = {
    
    position: 'absolute',
    top: '50%', /* Puedes ajustar esta propiedad para controlar la posición vertical del texto */
    right: '280px', /* Puedes ajustar esta propiedad para controlar la posición horizontal del texto */
    transform: 'translateY(-50%)', /* Centra verticalmente el texto con respecto a su posición */



    color: 'black',// Color de los enlaces del Navbar
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderColor:'white',
    // Puedes agregar más propiedades de estilo según tus necesidades
  };

  const Button1Style = {
    
    position: 'absolute',
    top: '50%', /* Puedes ajustar esta propiedad para controlar la posición vertical del texto */
    right: '140px', /* Puedes ajustar esta propiedad para controlar la posición horizontal del texto */
    transform: 'translateY(-50%)', /* Centra verticalmente el texto con respecto a su posición */



    color: 'black',// Color de los enlaces del Navbar
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderColor:'white',
    // Puedes agregar más propiedades de estilo según tus necesidades
  };


    return (
      <Navbar bg="" expand="lg" style={navStyle}> {/* Aplica el estilo al Navbar */}
        <Container class="back_graund_color">
          <Navbar.Brand href="#home" style={linkStyle}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={linkStyle}>Home</Nav.Link>
              <Nav.Link href="#link" style={linkStyle}>Link</Nav.Link>
              <Nav.Link href="#link" style={linkStyle}>Coments</Nav.Link>
              <Nav.Link href="#link" style={linkStyle}>Help</Nav.Link>

              <Nav.Link href="#link"><Button style={ButtonStyle} type="button" class="btn btn-primary btn-sm">Button</Button></Nav.Link>
              <Nav.Link href="#link"><Button style={Button1Style} type="button" class="btn btn-primary btn-sm">Button 2</Button></Nav.Link>              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


