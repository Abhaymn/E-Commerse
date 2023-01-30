import { React, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [Items, SetItems] = useState([]);
  

  const addItemToCartHandler = (item) => {
    console.log(item);
    const multipleitem = Items.find((cartitem) => cartitem.id === item.id);
    if (multipleitem) {
      multipleitem.quantity += item.quantity;
      const newupdateditem = Items.map((crtitm) =>
        crtitm.id === item.id ? multipleitem : crtitm
      );
      SetItems(newupdateditem);
      console.log(newupdateditem);
    } else {
      SetItems([...Items, item]);
    }
  };

  const removeItemFromCartHandler = (item) => {
    let cartItems = [...Items];
    cartItems.forEach((cartitem, index) => {
      if (cartitem.id === item.id) {
        cartItems.splice(index, 1);
        SetItems(cartItems);
      }
    });
  };

  const CartProContext = {
    items: Items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={CartProContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;