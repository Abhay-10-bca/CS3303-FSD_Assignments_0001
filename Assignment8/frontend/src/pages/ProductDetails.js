import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ onAddToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Product not found");
                }

                return response.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch(() => {
                setError("Product not found");
            });
    }, [id]);

    if (error) {
        return (
            <div className="page">
                <h2>{error}</h2>
                <button onClick={() => navigate("/products")}>
                    Back to Products
                </button>
            </div>
        );
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    function handleAdd() {
        if (quantity < 1) {
            alert("Quantity must be at least 1");
            return;
        }

        if (quantity > product.stock) {
            alert("Insufficient stock");
            return;
        }

        onAddToCart(product, quantity);
    }

    return (
        <div className="page">
            <h1>{product.name}</h1>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price}</p>

            <p>Stock: {product.stock}</p>

            <p>{product.description}</p>

            <label>Quantity: </label>

            <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <br />
            <br />

            <button onClick={handleAdd}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetails;