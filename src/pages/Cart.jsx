import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {
    return (
        <>
            <div className="cart-container">
                <Header />
                <div className="cart-body">
                    <p>Your cart will in this page!</p>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Cart;