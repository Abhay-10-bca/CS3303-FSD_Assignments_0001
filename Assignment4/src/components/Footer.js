import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h3>CartShop</h3>
          <p>
            A simple React shopping cart application.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/account">Account</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CartShop. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;