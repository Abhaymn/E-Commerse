

// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
// });

// export default CartContext;

import React, { useState, useCallback } from 'react';

// context is created here
const CartContext = React.createContext({
  items: [],
  totalAmount:0,
  quantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  purchased: () => {},
  logoutCartHandler: () => {},
  loginCartHandler: () => {},
});

// useremail from local storage

export const CartContextProvider = (props) => {
  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }
  // console.log(userEmail);

  const [cartState, setCartState] = useState({ item: [], totalAmount: 0 });

  // Adding cart data
  const addItem = (updatedCart) => {
    setCartState(updatedCart);
  };

  // removing item from cart
  const removeItem = (updatedCart) => {
    setCartState(updatedCart);
  };

  // purchase completed
  const purchased = () => {
    alert('Your order has been placed');
    setCartState({ item: [], totalAmount: 0 });
  };

  // Fetching data when user logs in or when the page is refreshed
  const loginCartHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/3c149a125b4442ea87b13a66d6b8b6c3/cartItem${userEmail}`
      );

      const data = await response.json();
      console.log('loggin called');
      if (response.ok) {
        let refreshedItem = [];
        let refreshedAmount = 0;

        data.forEach((item) => {
          refreshedItem.push(item);
          refreshedAmount += item.price * item.quantity;
        });
        
        setCartState({ item: refreshedItem, totalAmount: refreshedAmount });
      } else {
        throw data.error;
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [userEmail]);

  // logout Cart handler
  const logoutCartHandler = () => {
    setCartState({ item: [], totalAmount: 0 });
  };

  const contextValues = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    purchased: purchased,
    logoutCartHandler: logoutCartHandler,
    loginCartHandler: loginCartHandler,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;