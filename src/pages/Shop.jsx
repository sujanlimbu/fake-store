import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop() {
    const [categoryList, setCategoryList] = useState([]);
    const [products, setProducts] = useState([]);
    const [productDisplayCount, setProductDisplayCount] = useState(10);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategoryList(data))
            .catch(err => setError(err));
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
            .catch(err => alert("Something went wrong"))
            .finally(() => setLoading(false));
    }, [productDisplayCount, activeCategory]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setProductDisplayCount(10);
    };

    const handleLoadMore = () => {
        setProductDisplayCount(count => count + 10);
    };

    if (loading) {
        return <LoadingScreen />
    }
    return (
        <>
            <div className="wrapper">
                <Header />
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
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <ProductCard product={product} />
                            </Link>
                        ))}
                    </div>
                    {productDisplayCount < totalProducts && (<button className="btn btn-secondary" onClick={handleLoadMore}>Load more</button>)}
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Shop;


