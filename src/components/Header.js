import React, {Component} from 'react'
import '../styles/Header.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{backgroundColor: "dodgerblue"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Upload Proof</Nav.Link>
                    <Nav.Link href="#link">Activate</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Upload Proof</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            
    )
    
}

    


export default Header