import React from "react";

import { Button, Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Header.css"


function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className="container">
                    <Navbar.Brand href="#home">Brand Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home" className="mx-3 header">Rent</Nav.Link>
                            <Nav.Link href="#link" className="mx-3 header">Buy</Nav.Link>
                            <Nav.Link href="#link" className="mx-3 header">Sell</Nav.Link>

                            <NavDropdown title="Manage Property" id="basic-nav-dropdown" className="mx-3" style={{ fontWeight: "bold", fontSize: "larger" }}>
                                <NavDropdown.Item href="#action/3.1">Link 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Link 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Link 3</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Resources" id="basic-nav-dropdown" className="mx-3" style={{ fontWeight: "bold", fontSize: "larger" }}>
                                <NavDropdown.Item href="#action/3.1">Link 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Link 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Link 3</NavDropdown.Item>

                            </NavDropdown>


                            {/* --------------------LOGIN AND SUNGUP BUTTONS----------------------------- */}
                            <div className="btns">
                                <Button variant="outline-primary" className="mx-2 login-btn">Login</Button>

                                <Button className="mx-2 sign-btn" >Sign Up</Button>
                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;