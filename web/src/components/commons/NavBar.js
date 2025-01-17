import React, { Component } from "react";

import { Navbar, Nav, NavDropdown, Image, Row } from "react-bootstrap";

class NavBar extends Component {
  render() {
    var user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
    }
    return (
      <>
        <Navbar bg='light' expand='sm'>
          <Navbar.Brand href='/'>Rail-Mitra</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {user ? (
                <>
                  <Nav.Link href='/reservations'>My Booking</Nav.Link>
                  <NavDropdown title={user.fname} id='nav-dropdown' alignRight>
                    <NavDropdown.Item href='/account'>
                      Account Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.props.logout}>
                      Sign out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link href='' onClick={this.props.handleLoginShow}>
                    Sign In
                  </Nav.Link>
                  <Nav.Link href='' onClick={this.props.handleRegisterShow}>
                    Join Now
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div class='container position-relative px-4 px-lg-5'>
            <div class='row gx-4 gx-lg-5 justify-content-center'>
              <Image src={require("../../images/railway.png")} />
            </div>
          </div>
        </Row>

        <Navbar
          style={{ justifyContent: "space-between" }}
          bg='dark'
          variant='dark'
          expand='sm'
        >
          <Navbar.Brand href='/'></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' data-collapsed='false'>
            <Nav className='mx-auto'>
              <Nav.Link href='/Landing'>{"News"}</Nav.Link>
              <Nav.Link href='/'>{"Booking"}</Nav.Link>
              <Nav.Link href='/PNRServices'>{"PNRServices"}</Nav.Link>
              <Nav.Link href='/about'>{"About"}</Nav.Link>
              <Nav.Link href='/contact'>{"Contact Us"}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
