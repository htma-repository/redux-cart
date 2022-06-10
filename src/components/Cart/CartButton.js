import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);

  const cartItemsNumber = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const cartButtonHandler = () => {
    dispatch(uiActions.isCartShow());
  };

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartButton;
