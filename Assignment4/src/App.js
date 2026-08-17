import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Orders from "./pages/Orders";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <div className="app">

          <Header />

          <div className="content">

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/cart"
                element={<Cart />}
              />

              <Route
                path="/account"
                element={<Account />}
              />

              <Route
                path="/orders"
                element={<Orders />}
              />

            </Routes>

          </div>

          <Footer />

        </div>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;