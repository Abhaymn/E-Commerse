import { React } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Data from "./components/Products/Data";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Data />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;