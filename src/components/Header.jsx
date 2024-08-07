import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="nav">
                <img src="" alt="LOGO" />
                <div className="nav-menu-items">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>

        </>
    );
}

export default Header;