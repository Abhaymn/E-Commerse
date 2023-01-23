import { Fragment, React, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

import {  Link, Routes} from "react-router-dom";

import {Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";




const CardItems = (props) => {
  const cardContext = useContext(CartContext);
  const addItemtoCart = (event) => {
    event.preventDefault();
    cardContext.addItem({ ...props, quantity: Number(1) });

 
  };
  return (
    <Fragment>
 <>
    
    <Card
      key={props.id}
      border="light"
      style={{ width: "20rem" }}
      className="text-center"
    >
    
      <Link to={`/products/${props.id}`} ><Card.Title className="text-center fw-bold ">{props.title}</Card.Title></Link>
      
      <Card.Img className="p-2" variant="bottom" src={`${props.imageUrl}`} />
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
<Routes>
  <Route path="/products/:id" element={<ProductDetails/>}/>
      
</Routes>

</Fragment>

  );
};

export default CardItems;