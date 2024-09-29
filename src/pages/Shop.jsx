import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import LoadingScreen from "../components/LoadingScreen";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop({ cartItems, setCartItems }) {
    const [categoryList, setCategoryList] = useState([]);
    const [products, setProducts] = useState([]);
    const [productDisplayCount, setProductDisplayCount] = useState(10);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategoryList(data))
            .catch(err => toast.error(err));
    }, []);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        if (activeCategory !== "") {
            url = `https://fakestoreapi.com/products/category/${activeCategory}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(json => {
                setTotalProducts(json.length);
                setProducts(json.slice(0, productDisplayCount));
            })
            .catch(err => toast.error("Something went wrong"))
            .finally(() => setLoading(false));
    }, [productDisplayCount, activeCategory]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setProductDisplayCount(10);
    };

    const addToCart = (prdct) => {
        const existingItem = cartItems.find(item => item.productId === prdct.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.productId === prdct.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
            toast.success('Item quantity updated in cart!');
        } else {
            setCartItems([...cartItems, { productId: prdct.id, quantity: 1 }]);
            toast.success('Item added to cart!');
        }
    }

    const handleLoadMore = () => {
        setProductDisplayCount(count => count + 10);
    };

    if (loading) {
        return <LoadingScreen />
    }
    return (
        <>
            <div className="content-body">
                <div className="categories-container">
                    <p onClick={() => handleCategoryClick("")} className={`category-item ${activeCategory === "" ? "category-active" : ""}`}> All Products</p>
                    {categoryList.map((category) => (
                        <p
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`category-item ${activeCategory === category ? "category-active" : ""}`}>
                            {category}
                        </p>
                    ))}
                </div>
                <div className="product-list">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
                {productDisplayCount < totalProducts && (<button className="btn btn-secondary" onClick={handleLoadMore}>Load more</button>)}
            </div>
        </>
    );
}
export default Shop;


