import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import DUMMY_MEALS from "./DummyMeals";

const Products = () => {
  const availableItems = DUMMY_MEALS.map((item) => {
    return (
      <ProductItem
        title={item.name}
        price={item.price}
        description={item.description}
        key={item.id}
        id={item.id}
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{availableItems}</ul>
    </section>
  );
};

export default Products;
