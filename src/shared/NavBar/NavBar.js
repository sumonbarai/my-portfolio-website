import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  window.addEventListener("scroll", () => {
    const scrollBar = window.scrollY;
    if (scrollBar > 500) {
      document.getElementById("nav-area").style.position = "fixed";
      document.getElementById("nav-area").style.backgroundColor = "#191C26";
    } else {
      document.getElementById("nav-area").style.position = "absolute";
      document.getElementById("nav-area").style.backgroundColor = "transparent";
    }
  });

  return (
    <div className="nav-area" id="nav-area">
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
              <a href="/#project">project</a>
              <a href="/#about">about</a>
              <a href="/#blogs">blogs</a>
              <a href="/#contact">contact</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
