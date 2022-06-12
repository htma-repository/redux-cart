import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let initialFetch = true;

function App() {
  const dispatch = useDispatch();
  const isCartShowing = useSelector((state) => state.ui.isShown);
  const isNotification = useSelector((state) => state.ui.notificationShow);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiActions.isNotificationShow({
          status: "pending",
          title: "Loading!",
          message: "Loading data...",
        })
      );

      const response = await axios({
        method: "put",
        url: "https://redux-cart-b7b3f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        data: JSON.stringify(cart),
      });

      if (response.status !== 200) {
        throw new Error("Data Failed to Send");
      }
      setTimeout(() => {
        dispatch(
          uiActions.isNotificationShow({
            status: "success",
            title: "Success!",
            message: "processing data successfully!",
          })
        );
      }, 800);
    };

    if (initialFetch) {
      initialFetch = false;
      return;
    }

    sendData().catch((error) => {
      dispatch(
        uiActions.isNotificationShow({
          status: "error",
          title: "failed!",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {isNotification && (
        <Notification
          status={isNotification.status}
          title={isNotification.title}
          message={isNotification.message}
        />
      )}
      <Layout>
        {isCartShowing && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
