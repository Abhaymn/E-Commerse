import {  React } from "react";


import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";


import CartProvider from "./store/CartProvider";


function App() {


  
  return (
    
    <CartProvider>
      <Header />
    
      <Footer />
    </CartProvider>
         
  );
}

export default App;