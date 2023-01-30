import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartButton from "../Layout/CartButton";
import CartItem from "./CartItems";


const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
    
      <CartButton onShowCart={() => setShowCart(!showCart)} />
      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(!showCart)}
        placement={"end"}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <div className="text-center" />
          <Offcanvas.Title className="fw-bolder text-center">YOUR CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItem />
    
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;