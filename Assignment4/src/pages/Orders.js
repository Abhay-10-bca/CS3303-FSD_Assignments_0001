import React from "react";

function Orders() {
  const orders = [
    {
      id: "ORD-1001",
      date: "15 August 2026",
      status: "Delivered",
      total: 2499,
      item: "Wireless Headphones",
    },
    {
      id: "ORD-1002",
      date: "10 August 2026",
      status: "Shipped",
      total: 3999,
      item: "Smart Watch",
    },
  ];

  return (
    <main className="page">

      <h1>My Orders</h1>

      <div className="orders-container">

        {orders.map((order) => (
          <div className="order-card" key={order.id}>

            <div className="order-header">
              <div>
                <strong>{order.id}</strong>
                <p>{order.date}</p>
              </div>

              <span className="order-status">
                {order.status}
              </span>
            </div>

            <div className="order-details">

              <div>
                <span className="order-icon">
                  📦
                </span>

                <div>
                  <h3>{order.item}</h3>
                  <p>Quantity: 1</p>
                </div>
              </div>

              <strong>
                ₹{order.total}
              </strong>

            </div>

            <button className="view-order-button">
              View Order
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}

export default Orders;