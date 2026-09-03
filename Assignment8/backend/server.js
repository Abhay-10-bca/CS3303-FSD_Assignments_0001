const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2999,
        stock: 10,
        description: "Comfortable wireless headphones with clear sound."
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 4499,
        stock: 8,
        description: "Smart watch with fitness and notification features."
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 15,
        description: "Lightweight running shoes for everyday workouts."
    },
    {
        id: 4,
        name: "Backpack",
        category: "Accessories",
        price: 1299,
        stock: 12,
        description: "Durable backpack suitable for college and travel."
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 3499,
        stock: 7,
        description: "Mechanical keyboard with comfortable keys."
    },
    {
        id: 6,
        name: "Coffee Mug",
        category: "Home",
        price: 499,
        stock: 20,
        description: "Simple ceramic coffee mug for everyday use."
    },
    {
        id: 7,
        name: "T-Shirt",
        category: "Clothing",
        price: 799,
        stock: 25,
        description: "Comfortable cotton T-shirt for casual wear."
    },
    {
        id: 8,
        name: "Desk Lamp",
        category: "Home",
        price: 999,
        stock: 10,
        description: "Compact LED desk lamp for study and work."
    }
];

let orders = [];

// Home
app.get("/", (req, res) => {
    res.send("Mini E-Commerce API is running");
});

// Get all products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// Create order
app.post("/api/orders", (req, res) => {
    const { user, items } = req.body;

    if (!user) {
        return res.status(401).json({
            message: "Please login before placing an order"
        });
    }

    if (!items || items.length === 0) {
        return res.status(400).json({
            message: "Cart is empty"
        });
    }

    let total = 0;
    const orderItems = [];

    for (const item of items) {
        const product = products.find(
            (product) => product.id === item.id
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        if (!item.quantity || item.quantity < 1) {
            return res.status(400).json({
                message: "Invalid product quantity"
            });
        }

        if (item.quantity > product.stock) {
            return res.status(400).json({
                message: `Insufficient stock for ${product.name}`
            });
        }

        total += product.price * item.quantity;

        orderItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: item.quantity
        });
    }

    for (const item of items) {
        const product = products.find(
            (product) => product.id === item.id
        );

        product.stock -= item.quantity;
    }

    const newOrder = {
        id: orders.length + 1,
        user: user,
        items: orderItems,
        total: total,
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);

    res.status(201).json({
        message: "Order placed successfully",
        order: newOrder
    });
});

// Get all orders
app.get("/api/orders", (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});