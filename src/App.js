import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartShow = useSelector((state) => state.ui.isCartShow);

  return (
    <Layout>
      {isCartShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
