import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import { Nav, Navbar } from "react-bootstrap/";
const Header = (props) => {
  return (
    <>
      <Navbar
        fixed="top"
        className="justify-content-center"
        bg="dark"
        variant="dark"
      >
        <Nav>
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link eventKey="/store">STORE</Nav.Link>
          <Nav.Link eventKey="/about">ABOUT</Nav.Link>
          <HeaderCartButton onclick={props.onShowCart} />
        </Nav>
      </Navbar>
      <div>The Generics</div>
    </>
  );
};

export default Header;