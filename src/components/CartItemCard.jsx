import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import "./CartItemCard.css"
import QuantityBox from "./QuantityBox";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function CartItemCard({ item, cartItems, setCartItems }) {
    const [loading, setLoading] = useState(true);
    const [product, setPrduct] = useState(null);
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then(res => res.json())
            .then(json => setPrduct(json))
            .catch(err => toast.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleDeleteClick = () => {
        setCartItems(cartItems.filter(p => p.productId !== item.productId));
        toast.success(`${product.title} deleted.`)
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        setCartItems(prevItems =>
            prevItems.map(p =>
                p.productId === item.productId
                    ? { ...p, quantity: newQuantity }
                    : p
            )
        );
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="cart-item-card">
            <div className="image-section">
                <img src={product.image} alt="" />
            </div>
            <div className="cart-info-section">
                <h3 id="product-price">${product.price}</h3>
                <Link to={`/product/${item.productId}`}>
                    <p id="product-title">{product.title}</p>
                </Link>
                <div id="product-quantity">
                    <QuantityBox quantity={quantity} setQuantity={handleQuantityChange} />
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"
                        onClick={handleDeleteClick}>
                        <path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z" />
                    </svg>
                </div>
            </div>
        </div>
    );

}
export default CartItemCard;