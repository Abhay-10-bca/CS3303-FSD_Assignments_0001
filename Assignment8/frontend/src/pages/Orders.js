import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders({ user, cart, onClearCart }) {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!user) {
            return;
        }

        fetch("http://localhost:5000/api/orders")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch(() => setError("Unable to load orders"));
    }, [user, message]);

    async function placeOrder() {
        if (!user) {
            navigate("/login");
            return;
        }

        if (cart.length === 0) {
            setError("Cart is empty");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/orders",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: user,
                        items: cart.map((item) => ({
                            id: item.id,
                            quantity: item.quantity
                        }))
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            setMessage(data.message);
            setError("");
            onClearCart();
        } catch {
            setError("API failure. Unable to place order.");
        }
    }

    if (!user) {
        return (
            <div className="page">
                <h1>Orders</h1>
                <p>Please login to place an order.</p>

                <button onClick={() => navigate("/login")}>
                    Login
                </button>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>Orders</h1>

            {cart.length > 0 && (
                <button onClick={placeOrder}>
                    Place Order
                </button>
            )}

            {message && <p>{message}</p>}
            {error && <p>{error}</p>}

            <hr />

            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                orders.map((order) => (
                    <div className="order" key={order.id}>
                        <h3>Order #{order.id}</h3>

                        <p>User: {order.user}</p>

                        <p>Date: {order.date}</p>

                        {order.items.map((item) => (
                            <p key={item.id}>
                                {item.name} × {item.quantity}
                            </p>
                        ))}

                        <strong>
                            Total: ₹{order.total}
                        </strong>
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;