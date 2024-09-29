import "./ProductCard.css"
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <div className="product-card">
            <div className="image-section">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <img src={product.image} alt={product.title} />
            </div>
            <div className="info-section">
                <h3>${product.price}</h3>
                <Link key={product.id} to={`/product/${product.id}`}>
                    <p className="product-card-product-title">{product.title}</p>
                </Link>
                <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Add to Cart
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M450-610v-120H330v-60h120v-120h60v120h120v60H510v120h-60ZM286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM60-810v-60h114.46l166.92 352.31h272.7q3.46 0 6.15-1.73 2.69-1.73 4.62-4.81L772.77-790h68.3L677.38-494.31q-9.84 17.31-26.05 26.96-16.21 9.66-35.48 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.42-34.2-20.42-34.19-1.11-69.19l57.07-102.61L136.16-810H60Z" />
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default ProductCard;
