import React from 'react'
import '../styles/NavBar.css'
import NavBar from 'react-bootstrap/Navbar'
//import {Navbar} from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

const MyNavBar = (props) => {
    return (
        <NavBar bg="light" expands="lg" className="justify-content-between">
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Brand href="#home">
                <img
                    src="Image5.png"
                    className="d-inline-block align-top NavLogo"
                    alt="React Boostrap logo"
                    style={{borderRadius: '100%'}} 
                /> 
            </NavBar.Brand>
            <NavBar.Collapse className="justify-content-end">
                <NavDropdown title="Your Q item" id="basic-nav-dropdown" className="navbar-dropdown">
                    <NavDropdown.Item href="#somewhe/1">Loren ipsum</NavDropdown.Item>
                    <NavDropdown.Item href="#somewhe/2">Loren ipsum</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Activity" id="basic-nav-dropdown" className="navbar-dropdown">
                    <NavDropdown.Item href="#somewhe/1">Loren ipsum</NavDropdown.Item>
                    <NavDropdown.Item href="#somewhe/2">Loren ipsum</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Shop" id="basic-nav-dropdown" className="navbar-dropdown">
                    <NavDropdown.Item href="#somewhe/1">Loren ipsum</NavDropdown.Item>
                    <NavDropdown.Item href="#somewhe/2">Loren ipsum</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Help Center" id="basic-nav-dropdown" className="navbar-dropdown">
                    <NavDropdown.Item href="#somewhe/1">Loren ipsum</NavDropdown.Item>
                    <NavDropdown.Item href="#somewhe/2">Loren ipsum</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{color: "black"}}>
                    Log in
                </Nav.Link>
            </NavBar.Collapse>
        </NavBar>
    )
    
}

export default MyNavBar