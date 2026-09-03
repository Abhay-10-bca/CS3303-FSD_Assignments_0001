import { Link } from "react-router-dom";

function Navbar({ cartCount, user, onLogout }) {
    return (
        <nav>
            <h2>MiniShop</h2>

            <div>
                <Link to="/">Home</Link>{" "}
                <Link to="/products">Products</Link>{" "}
                <Link to="/cart">Cart ({cartCount})</Link>{" "}
                <Link to="/orders">Orders</Link>{" "}

                {user ? (
                    <>
                        <span>Welcome, {user}</span>{" "}
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;