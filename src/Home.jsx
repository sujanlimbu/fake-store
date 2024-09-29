import './Home.css'

import HomeCarousel from './components/HomeCarousel';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import styled from 'styled-components';
import LoadingScreen from './components/LoadingScreen';
import { toast } from 'react-toastify';

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

function Home({ cartItems, setCartItems }) {
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

  if (loading)
    return <LoadingScreen />;

  return (
    <>
      <div className="content-body">
        <HomeCarousel />
        <FeaturedSection>
          <h4>Featured Products</h4>
          <div className="featured-products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          {/* <FeaturedProducts>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </FeaturedProducts> */}
        </FeaturedSection>
      </div>
    </>
  )
}

export default Home;