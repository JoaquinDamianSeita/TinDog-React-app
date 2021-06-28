import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBarMain() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="black navbar-title mb-3"
        variant="dark"
      >
        <Navbar.Brand
          className="navbar-brand-title"
          style={{ fontSize: "2.5rem" }}
        >
          tindog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="nav-item-title px-2">
              <Nav.Link className="nav-link-title" href="#footer">
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-title px-2">
              <Nav.Link className="nav-link-title" href="#pricing">
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-title px-2">
              <Nav.Link className="nav-link-title" href="#cta">
                Download
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
