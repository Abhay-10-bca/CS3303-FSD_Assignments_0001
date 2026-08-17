import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="page">

        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            You haven't added anything to your cart yet.
          </p>

          <Link to="/" className="primary-button">
            Continue Shopping
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main className="page">

      <h1>Your Cart</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="cart-item-image">
                {item.emoji}
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-item-right">

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

          <button
            className="clear-button"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </aside>

      </div>

    </main>
  );
}

export default Cart;