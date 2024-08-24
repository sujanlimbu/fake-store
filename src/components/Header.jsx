import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header({cartItems}) {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Fake Shop</Link>
            <div className="navbar-menu">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} >Home</Link>
                <Link to="/shop" className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`}>Shop</Link>
                <Link to="/cart" className={`cart nav-link ${location.pathname === "/cart" ? "active" : ""}`}>
                    Cart <span className="cart-count">{cartItems.length}</span>
                </Link>
                <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>Login</Link>
            </div>
        </nav>
    );
}

export default Header;