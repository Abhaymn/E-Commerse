import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap/";
import Cart from "../Cart/Cart";



const Header = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container className="justify-content-center ">
          <Nav>
            <Nav.Link className="mx-4" href="/home">
              HOME
            </Nav.Link>
            <Nav.Link className="mx-4" eventKey="/store">
              STORE
            </Nav.Link>
            <Nav.Link className="ms-4" eventKey="/about">
              ABOUT
              
            </Nav.Link>
          </Nav>
        </Container>
        <Cart />
      </Navbar>
      <br />

      <div className="text-center">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
    </>
  );
};

export default Header;