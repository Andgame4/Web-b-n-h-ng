import React from 'react';
import '../assets/css/header.scss'
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import logo from "../assets/images/ivy-moda.png";

const Header = () => {

    return (
        <Navbar className="nav-header">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt=" "/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="link-help">
                        <a href="/">You need support?</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;