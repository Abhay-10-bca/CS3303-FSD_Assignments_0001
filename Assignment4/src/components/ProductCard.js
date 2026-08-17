import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image">
        {product.emoji}
      </div>

      <h3>{product.name}</h3>

      <p className="product-description">
        {product.description}
      </p>

      <p className="product-price">
        ₹{product.price}
      </p>

      <button
        className="add-button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;