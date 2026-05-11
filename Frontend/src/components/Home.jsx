import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch featured products
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data.slice(0, 8)); // Show first 8 products
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories.slice(0, 6)); // Show first 6 categories
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Discover Amazing Products</h1>
            <p>Shop millions of products with unbeatable prices and fast delivery</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-primary">Shop Now</Link>
              <Link to="/deals" className="btn-secondary">View Deals</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/src/assets/hero.png" alt="Shopping" onError={(e) => e.target.style.display = 'none'} />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category}`}
                className="category-card"
              >
                <div className="category-icon">
                  {getCategoryIcon(category)}
                </div>
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all">View All →</Link>
          </div>
          <div className="products-grid">
            {products.map(product => (
              <div key={product._id} className="product-card">
                <div className="product-image">
                  <img src={product.image || '/src/assets/placeholder.png'} alt={product.name} />
                  <div className="product-overlay">
                    <Link to={`/product/${product._id}`} className="quick-view">Quick View</Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </h3>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="product-rating">
                    <span className="stars">★★★★☆</span>
                    <span className="rating-count">(4.5)</span>
                  </div>
                  <div className="product-actions">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="add-to-wishlist">♥</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Customer service always available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get category icons
const getCategoryIcon = (category) => {
  const icons = {
    'Electronics': '📱',
    'Clothing': '👕',
    'Books': '📚',
    'Home': '🏠',
    'Sports': '⚽',
    'Beauty': '💄',
    'Toys': '🧸',
    'Automotive': '🚗'
  };
  return icons[category] || '📦';
};

export default Home;