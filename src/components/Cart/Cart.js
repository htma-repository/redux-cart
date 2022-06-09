import { Fragment } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPriceAmount);

  const totalAllPrice = totalPrice.toFixed(2);

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
                id={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
                key={item.id}
                item={item}
              />
            );
          })}
        </ul>
        <div className={classes.cart_div}>
          <h4>Total Price :</h4>
          <span>$ {totalAllPrice}</span>
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
