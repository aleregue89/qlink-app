import React from 'react'
import '../styles/Header.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
//import Button from 'react-bootstrap/Button'
import {InputGroup} from "react-bootstrap"
import {Globe} from 'react-bootstrap-icons'



const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="justify-content-end header" style={{backgroundColor: "dodgerblue"}}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Upload Proof</Nav.Link>
                    <Nav.Link className="d-none d-lg-block" href="#link">|</Nav.Link>
                    <Nav.Link href="#link">Activate</Nav.Link>
                </Nav>

                <InputGroup className="mr-sm-2 search-bar">
                    <FormControl 
                        placeholder="Search ..."
                        aria-label="Search ..."
                        aria-describedby="basic-addon2"
                    />    
                </InputGroup>
                <Nav>
                    <Nav.Link href="#home"><Globe style={{marginBottom: "3px", marginRight:"4px"}}/><span>Espanol</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default Header