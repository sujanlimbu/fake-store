import './Home.css'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeCarousel from './components/HomeCarousel';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import styled from 'styled-components';

const FeaturedSection = styled.div`

`;

const FeaturedProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
`;

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
          <FeaturedSection>
            <h4>Featured Products</h4>
            <FeaturedProducts>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </FeaturedProducts>
          </FeaturedSection>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home;