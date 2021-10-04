import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="bg-style" className="bg-style" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/home"></Link><h3 className="text-secondary">MasterChef</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="me-4 text-decoration-none"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    marginRight: "10px"

                                }}
                            >
                                Home
                            </NavLink>


                            <NavLink className="me-4 text-decoration-none"
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    marginRight: "10px"

                                }}
                            >
                                About
                            </NavLink>


                            <NavLink className="me-4 text-decoration-none"
                                to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    marginRight: "10px"

                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink className="me-4 text-decoration-none"
                                to="/cookmaster"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    marginRight: "10px"

                                }}
                            >
                                Cookmaster
                            </NavLink>
                            <NavLink className="me-4 text-decoration-none"
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                    marginRight: "10px"

                                }}
                            >
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavBar;