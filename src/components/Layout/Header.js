import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap/";
import Cart from "../Cart/Cart";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import About from "../About";

import Home from "../Home";
import Store from "../Store";

const Header = (props) => {
  return (
    <BrowserRouter>
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container className="justify-content-center ">
          <Nav>
            <Nav.Link className="mx-4" as={Link} to='/home' >HOME</Nav.Link>
            
            <Nav.Link className="mx-4" as={Link} to="/store" >STORE</Nav.Link>
  
            <Nav.Link className="ms-4" as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Cart />
      </Navbar>
      <br />

      <div className="text-center">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
    </>
    
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default Header;