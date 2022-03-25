import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { handalerAddToCart, product } = props;
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
      <button onClick={() => handalerAddToCart(product)} className="cart-btn">
        <p className="cart-text">Add to Cart</p>
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
