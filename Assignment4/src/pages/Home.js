import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    emoji: "🎧",
    description: "Comfortable wireless headphones with great sound.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    emoji: "⌚",
    description: "Smart watch with fitness and notification tracking.",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    emoji: "👟",
    description: "Lightweight shoes suitable for everyday running.",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    emoji: "🎒",
    description: "Durable backpack for college and everyday use.",
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1799,
    emoji: "⌨️",
    description: "Compact mechanical keyboard for work and gaming.",
  },
  {
    id: 6,
    name: "Coffee Mug",
    price: 499,
    emoji: "☕",
    description: "Simple ceramic coffee mug.",
  },
];

function Home() {
  return (
    <main className="page">

      <section className="hero">
        <h1>Welcome to CartShop</h1>
        <p>
          Browse our products and add your favourites to the cart.
        </p>
      </section>

      <section className="products-section">

        <h2>Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default Home;