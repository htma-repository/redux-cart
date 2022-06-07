import { useSelector, useDispatch } from "react-redux";

import { cartAction } from "../store/cart-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const cartItemsNumber = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const cartButtonHandler = () => {
    dispatch(cartAction.isCartShow());
  };

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartButton;
