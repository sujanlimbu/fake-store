import CartItemCard from "../components/CartItemCard";
import "./Cart.css";

function Cart({ cartItems, setCartItems }) {

    return (
        <>
            <div className="content-body cart-body">
                {cartItems.map((item) => (
                    <CartItemCard key={item.productId} item={item} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </div>
        </>
    );
}
export default Cart;