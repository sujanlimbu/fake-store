import './Home.css'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeCarousel from './components/HomeCarousel';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

const HomeBody = styled.div`
`;

const FeaturedSection = styled.div`
`;

const FeaturedProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
`;

function Home() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  if (loading)
    return <LoadingScreen />;

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content-body">
          <HomeCarousel />
          <FeaturedSection>
            <h4>Featured Products</h4>
            <div className="featured-products">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
            {/* <FeaturedProducts>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </FeaturedProducts> */}
          </FeaturedSection>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home;