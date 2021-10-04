import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/home"></Link>MasterChef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/cookmaster">CookMaster</Link>
                            <Link to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;