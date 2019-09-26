import React, { Component} from 'react'; 

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class NavbarUtama extends Component{
    render(){
        return (
             
            
            <Navbar className="navbar navbar-dark bg-dark shadow-sm" expand="lg" bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Waroeng<strong>Makan</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Beranda</Nav.Link>
                    <Nav.Link href="/about">Tentang</Nav.Link>
                    <Nav.Link href="/contact">Kontak</Nav.Link>
                    <NavDropdown title="Produk" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Nasi Padang</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Nasi Ayam</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nasi Uduk</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ikan Bakar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Ayam Geprek</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/login">Masuk</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Lapar ? cari disini aja" className="mr-sm-2" />
                    <Button variant="outline-success">Cari</Button>
                    </Form>
                </Navbar.Collapse>
                </Container> 
            </Navbar>
            

        );
    }
}