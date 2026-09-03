import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
    const [cart, setCart] = useState([]);

    const [user, setUser] = useState(
        localStorage.getItem("loggedInUser")
    );

    function addToCart(product, quantity = 1) {
        setCart((currentCart) => {
            const existing = currentCart.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return currentCart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + quantity
                          }
                        : item
                );
            }

            return [
                ...currentCart,
                {
                    ...product,
                    quantity: quantity
                }
            ];
        });
    }

    function updateQuantity(id, quantity) {
        if (quantity < 1) {
            return;
        }

        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    }

    function removeFromCart(id) {
        setCart((currentCart) =>
            currentCart.filter((item) => item.id !== id)
        );
    }

    function clearCart() {
        setCart([]);
    }

    function login(username) {
        setUser(username);
    }

    function logout() {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        setCart([]);
    }

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <BrowserRouter>
            <Navbar
                cartCount={cartCount}
                user={user}
                onLogout={logout}
            />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={
                        <Products
                            onAddToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/products/:id"
                    element={
                        <ProductDetails
                            onAddToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/orders"
                    element={
                        <Orders
                            user={user}
                            cart={cart}
                            onClearCart={clearCart}
                        />
                    }
                />

                <Route
                    path="/login"
                    element={
                        <Login
                            onLogin={login}
                        />
                    }
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;