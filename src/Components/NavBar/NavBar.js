import React from "react";
import logo from "../../assets/images/logo.svg";
import "./NavBar.css";
import { Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";

function NavBar() {
  return (
    <div className="NavBar">
      <Container fluid>
        <Row>
          <Navbar fixed="top" bg="light" expand="lg">
            <Col sm={4} xs={4} lg={1}>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  width="70"
                  className="d-inline-block align-top"
                  alt="Hauskey Logo"
                  href="#Home"
                />
              </Navbar.Brand>
            </Col>
            <Col lg={9} className="mob_hide">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#QuickSearch">Quick Search</Nav.Link>
                  <Nav.Link href="#FeaturedProjects">
                    Featured Projects
                  </Nav.Link>

                  <Nav.Link href="#Aboutus">About Us</Nav.Link>
                  <Nav.Link href="#MoveToApp">Move to App</Nav.Link>
                  <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col sm={6} xs={6} lg={2}>
              <div className="btn_group">
                <Button variant="link" className="login">
                  Login
                </Button>
                <Button variant="dark" className="signup">
                  Sign up
                </Button>
              </div>
            </Col>
            <Col sm={2} xs={2} lg={0}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Col xs={12} className="desk_hide">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#QuickSearch">Quick Search</Nav.Link>
                  <Nav.Link href="#FeaturedProjects">
                    Featured Projects
                  </Nav.Link>

                  <Nav.Link href="#Aboutus">About Us</Nav.Link>
                  <Nav.Link href="#MoveToApp">Move to App</Nav.Link>
                  <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
