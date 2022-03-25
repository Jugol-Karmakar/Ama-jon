import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handalerAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            handalerAddToCart={handalerAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3 className="order-summary">Order Summary</h3>
        <div className="order-info">
          <p>Seleted Item :{cart.length}</p>
          <p>Total Price : $</p>
          <p>Total Shipping Charge : $</p>
          <p>Tax : $</p>
          <h4>Grand Total : $</h4>
        </div>
      </div>
    </div>
  );
};

export default Shop;
