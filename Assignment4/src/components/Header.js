import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          CartShop
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>

          <Link to="/orders">
            Orders
          </Link>

          <Link to="/account">
            Account
          </Link>

          <Link to="/cart" className="cart-link">
            Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;