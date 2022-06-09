import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-area">
      <Navbar expand="lg">
        <Container>
          <Link id="logo" to="/">
            Sumon.
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 main-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/about">about</Link>
              <a href="#project">project</a>
              <a href="#contact">contact</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
