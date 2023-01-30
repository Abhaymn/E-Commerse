import { React, useContext } from "react";
import CartContext from "../../store/cart-context";
import { Button } from "react-bootstrap";


const CartButton = (props) => {
  const cartHeaderbtnContext = useContext(CartContext);

  let quantity = 0;
  cartHeaderbtnContext.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
    console.log(quantity);
  });

 
  

  return (
   
    <Button onClick={props.onShowCart} variant="outline-info position-relative me-4">
      Cart
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
        {quantity}
        <span className="visually-hidden">cart</span>
      </span>
    </Button>
    
  );
};

export default CartButton;