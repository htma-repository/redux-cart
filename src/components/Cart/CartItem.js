import { useDispatch } from "react-redux";

import { cartAction } from "../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const decreaseItemsHandler = () => {
    dispatch(cartAction.removeItems(props.id));
  };

  const increaseItemsHandler = () => {
    dispatch(cartAction.addItems({ ...props.item, amount: 1 }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>$ {props.price} / item</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemsHandler}>-</button>
          <button onClick={increaseItemsHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
