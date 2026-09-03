import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price}</p>

            <p>Stock: {product.stock}</p>

            <Link to={`/products/${product.id}`}>
                View Details
            </Link>

            <br />

            <button
                onClick={() => onAddToCart(product)}
                disabled={product.stock === 0}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;