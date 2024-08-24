import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductView from "./pages/ProductView";

import { useCart } from './hooks/Cart';

function App() {
    const { cartItems, setCartItems } = useCart();

    return (
        <>
            <Router>
                <Header cartItems={cartItems} setCartItems={setCartItems} />
                <Routes>
                    <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/login" element={<Login cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/product/:productId" element={<ProductView cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="*" element={<ErrorPage message="Page not found" />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}


export default App
