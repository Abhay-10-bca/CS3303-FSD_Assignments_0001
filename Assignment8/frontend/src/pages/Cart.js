import { useNavigate } from "react-router-dom";

function Cart({ cart, onUpdateQuantity, onRemove }) {
    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="page">
                <h1>Your Cart</h1>
                <p>Your cart is empty.</p>

                <button onClick={() => navigate("/products")}>
                    Browse Products
                </button>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>Your Cart</h1>

            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <h3>{item.name}</h3>

                    <p>₹{item.price}</p>

                    <button
                        onClick={() =>
                            onUpdateQuantity(
                                item.id,
                                item.quantity - 1
                            )
                        }
                        disabled={item.quantity === 1}
                    >
                        -
                    </button>

                    <span> {item.quantity} </span>

                    <button
                        onClick={() =>
                            onUpdateQuantity(
                                item.id,
                                item.quantity + 1
                            )
                        }
                    >
                        +
                    </button>

                    <button
                        onClick={() => onRemove(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button onClick={() => navigate("/orders")}>
                Place Order
            </button>
        </div>
    );
}

export default Cart;