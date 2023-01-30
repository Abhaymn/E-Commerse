import React, { useState } from 'react';

const productContext = React.createContext({
  title: '',
  imageUrl: '',
  rating: 0,
  price: 0,
  detail: '',
  id:'',
  
  changeDetail: () => {},
});

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState({
    title: '',
    imageUrl: '',
    rating: 0,
    price:0,
    detail: '',
    id:''
  });

  const changeDetailHandler = (item) => {
    
    setProduct({
      title: item.title,
      imageUrl: item.imageUrl,
      rating: item.rating,
      detail: item.detail,
      price: item.price,
      id:item.id,
    });
  };

  return (
    <productContext.Provider
      value={{
        title: product.title,
        id:product.id,
        imageUrl: product.imageUrl,
        rating: product.rating,
        detail: product.detail,
        price: product.price,

        changeDetail: changeDetailHandler,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default productContext;