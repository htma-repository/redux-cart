import React from "react";

const ProductItemForm = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <label htmlFor=""></label>
      <input type="text" />
    </form>
  );
};

export default ProductItemForm;
