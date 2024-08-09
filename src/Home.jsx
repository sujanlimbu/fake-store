import './Home.css'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeCarousel from './components/HomeCarousel';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function Home() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-body">
          <HomeCarousel />
          <div className="featured-product-container">
            <h4>Featured Products</h4>
            <div className="card-container" style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              gap: '5px'
            }}>
              {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home;