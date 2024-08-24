import "./QuantityBox.css";

function QuantityBox({ quantity, setQuantity }) {

    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleQuantityDecrease = () => {
        setQuantity((quantity > 1 ? quantity - 1 : 1));
    };

    return (
        <>
            <div className="quantity-box">
                <p>Quantity</p>
                <div className="quantity-actions">
                    <button onClick={handleQuantityIncrease}>+</button>
                    <input type="number" className="quantity-input-box" value={quantity} min="1" max="1000" readOnly />
                    <button onClick={handleQuantityDecrease} className="minus-button" disabled={quantity === 1}>-</button>
                </div>
            </div>
        </>
    );
}

export default QuantityBox;