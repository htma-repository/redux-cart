import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartShow = useSelector((state) => state.ui.isCartShow);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    axios({
      method: "put",
      url: "https://redux-cart-b7b3f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      data: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {isCartShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
