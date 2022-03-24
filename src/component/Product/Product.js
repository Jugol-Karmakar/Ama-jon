import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4 className="porduct-price">Price : ${price}</h4>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button className="cart-btn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
