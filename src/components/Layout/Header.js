import React from "react";
import { Container, Nav, Navbar,NavLink} from "react-bootstrap/";
import Cart from "../Cart/Cart";
import Contact from "../pages/contact";
import { useContext } from "react";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Store from "../pages/Store";
import AuthPage from "../pages/AuthPage";

import AuthContext from "../../store/auth-context";
import UserProfile from "../Profile/UserProfile";




const Header = (props) => {
  async function addHandler(details){
    const response=await fetch('https://react-http-da031-default-rtdb.firebaseio.com/details.json',{
      method: 'POST',
      body:JSON.stringify(details),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data=await response.json();
    console.log(data);
      
  }

 const authCtx= useContext(AuthContext);

 const isLoggedIn=authCtx.isLoggedIn;

  return (
    <BrowserRouter>
    <>
        
      
      <Navbar fixed="top" bg="dark" variant="dark">
       
        <Container className="justify-content-center ">
        {isLoggedIn &&(
          <Nav>
          
            <Nav.Link className="mx-4" as={Link} to='/home' >HOME</Nav.Link>
          
            <Nav.Link className="mx-4" as={Link} to="/store" >STORE</Nav.Link>
           
            <Nav.Link className="ms-4" as={Link} to="/about">ABOUT</Nav.Link>
        
            <Nav.Link className="ms-4" as={Link} to='/contact'>Contact Us</Nav.Link>
          </Nav>
        )}
        </Container>
          {isLoggedIn && (
        <Nav>
          <NavLink as={Link} to="/profile">profile</NavLink>
        </Nav>
          )}
      
        {!isLoggedIn &&(
        <Nav>
        <NavLink as={Link} to="/login">Login</NavLink>
        </Nav>
        )}
 
        <Cart />
      </Navbar>
      <br />

      <div className="text-center ">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div>
      
    </>
    
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/store/*" element={<Store/>}/>
        <Route path="/login" element={<AuthPage/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        
        <Route path="/contact" element={<Contact onAddDetails={addHandler}/>}/>
  
        
      </Routes>
    </BrowserRouter>

  );
};

export default Header;