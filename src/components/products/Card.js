import { React, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

import {  Link} from "react-router-dom";



const CardItems = (props) => {
  const cardContext = useContext(CartContext);
  const addItemtoCart = (event) => {
    event.preventDefault();
    cardContext.addItem({ ...props, quantity: Number(1) });

 
  };
  return (
  
 <>
    
    <Card
      key={props.id}
      border="light"
      style={{ width: "20rem" }}
      className="text-center"
    >
      
    
      <Card.Title className="text-center fw-bold ">{props.title}</Card.Title>
      
      <Link to={`/products/${props.productId}`} ><Card.Img className="p-2" variant="bottom" src={`${props.imageUrl}`} /></Link>
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <span className="text-center fw-bold">
            $<span id="item-price">{props.price}</span>
          </span>
          <Button variant="primary" size="lg" onClick={addItemtoCart}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </Card>

    </>
  

   

    


  );
};

export default CardItems;