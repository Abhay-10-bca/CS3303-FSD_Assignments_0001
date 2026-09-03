import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page">
            <h1>Welcome to MiniShop</h1>

            <p>
                Browse products, add them to your cart,
                and place your order.
            </p>

            <Link to="/products">
                <button>Shop Now</button>
            </Link>
        </div>
    );
}

export default Home;