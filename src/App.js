
import {React,useState} from "react";
import './App.css';
import Main from './components/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Footer from './components/Layout/Footer';
import Header from "./components/Layout/Header";


function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler = () =>{
    SetShowCart(false);
  }
  return (
    <div>
      <Header onShowCart={CartShowHandler} />
      {ShowCart && <Cart onCloseCart={CartHideHandler}></Cart>}
      <Main/>
      <Cart/>
      <Footer/>
</div>  
  
  
  );
}

export default App;
