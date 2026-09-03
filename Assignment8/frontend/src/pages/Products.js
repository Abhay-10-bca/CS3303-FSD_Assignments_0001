import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API request failed");
                }

                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Unable to load products");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="page">
            <h1>Products</h1>

            <div className="products">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;