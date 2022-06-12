import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartAction } from "../../store/cart-slice";

const Cart = () => {
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPriceAmount);

  console.log(items);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "get",
        url: "https://redux-cart-b7b3f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      });
      const data = await response.data;
    };
    getData();
  }, [dispatch, items.id]);

  const content =
    items.length === 0 ? (
      <p className={classes.cart}>No Items in Cart</p>
    ) : (
      <Fragment>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((item) => {
            return (
              <CartItem
                /* id={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
                key={item.id}
                item={item} */
                item={item}
                key={item.id}
              />
            );
          })}
        </ul>
        <div className={classes.cart_div}>
          <h4>Total Price :</h4>
          <span>$ {totalPrice}</span>
        </div>
      </Fragment>
    );

  return (
    <Fragment>
      <Card className={classes.cart}>{content}</Card>
    </Fragment>
  );
};

export default Cart;
