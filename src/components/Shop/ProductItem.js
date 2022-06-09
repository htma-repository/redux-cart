import { useDispatch } from "react-redux";

import { cartAction } from "../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const price = props.price.toFixed(2);

  const addToCartHandler = () => {
    const orderItem = {
      price,
      id: props.id,
      title: props.title,
      amount: 1,
    };
    dispatch(cartAction.addItems(orderItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>$ {price}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
