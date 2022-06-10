import { useDispatch } from "react-redux";

import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const decreaseItemsHandler = () => {
    dispatch(cartAction.removeItems(props.item.id));
  };

  const increaseItemsHandler = () => {
    dispatch(cartAction.addItems({ ...props.item, amount: 1 }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          {/* <span>$ {totalPrice}</span>{" "} */}
          <span className={classes.itemPrice}>$ {props.item.price} / item</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.amount}</span>
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
