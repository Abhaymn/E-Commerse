import React,{Suspense} from "react";
import { Container, Nav, Navbar,NavLink,Button} from "react-bootstrap/";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";
import ProductDetail from "../pages/ProductDetails";
import Contact from "../pages/contact";
// import About from "../pages/About";
// import Home from "../pages/Home";
// import Store from "../pages/Store";
// import AuthPage from "../pages/AuthPage";


const About=React.lazy(()=> import ('../pages/About'));
const Home=React.lazy(()=> import ('../pages/Home'));
const Store=React.lazy(()=> import ('../pages/Store'));
const AuthPage=React.lazy(()=> import ('../pages/AuthPage'));
const UserProfile=React.lazy(()=>import ('../Profile/UserProfile'));


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

 const logoutHandler=()=>{
  authCtx.logout();
 };



  return (
   
    <BrowserRouter>
       
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
              <Button className="mx-3 btn btn-sm "  onClick={logoutHandler} >logout</Button>
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
          <br/>
      <div className="text-center ">
        <p className="text-bg-secondary py-5 fw-bold h1">The Generics</p>
      </div> 

    <Suspense fallback={
    <div className="centered">
      <LoadingSpinner/>
    </div>}>
      <Routes>
       
            {authCtx.isLoggedIn && (<Route path="/about" element={<About/>}/>)}
            {authCtx.isLoggedIn && (<Route path="/home" element={<Home/>}/>)}
            {authCtx.isLoggedIn && (<Route path="/store/*" element={<Store/>}/>)}

            {!authCtx.isLoggedIn && (
              <Route path="/login" element={<AuthPage/>}/>)}

            {authCtx.isLoggedIn&&<Route path="*" element={<UserProfile/>}/>}
       

            {authCtx.isLoggedIn && <Route path="/profile" element={ <UserProfile/>}>
              </Route>}
              <Route path='*' element={<AuthPage/>}/>
              
            {authCtx.isLoggedIn && (<Route path="/contact" element={<Contact onAddDetails={addHandler}/>}/>)}  
            {authCtx.isLoggedIn && (<Route path="/products/:productId" element={<ProductDetail/>}/>)}
         
        </Routes>
      </Suspense>
    </BrowserRouter>
    

    
  );
};

export default Header;