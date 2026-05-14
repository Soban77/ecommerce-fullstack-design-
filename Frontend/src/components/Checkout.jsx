import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Checkout.css';

const Checkout = () => {
  const { user, loading } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (cart.length === 0) {
      setError('Your cart is empty. Add items before checking out.');
      return;
    }

    if (!fullName || !address || !city || !postalCode || !country || !phone) {
      setError('Please complete all required fields.');
      return;
    }

    setSubmitting(true);

    const order = {
      id: `order_${Date.now()}`,
      userEmail: user?.email || 'guest',
      userName: fullName,
      items: cart,
      shipping: {
        fullName,
        address,
        city,
        postalCode,
        country,
        phone,
        notes,
      },
      total: Number(total.toFixed(2)),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([order, ...existingOrders]));
    localStorage.removeItem('cart');

    setSubmitting(false);
    navigate(`/order/${order.id}`);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <div className="checkout-message">
          <p>Your cart is empty. Add products before checkout.</p>
        </div>
      ) : (
        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            {error && <div className="checkout-error">{error}</div>}

            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              disabled={submitting}
              required
            />

            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street address"
              disabled={submitting}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              disabled={submitting}
              required
            />

            <label htmlFor="postalCode">Postal Code</label>
            <input
              id="postalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal code"
              disabled={submitting}
              required
            />

            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              disabled={submitting}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              disabled={submitting}
              required
            />

            <label htmlFor="notes">Delivery Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional delivery instructions"
              disabled={submitting}
            />

            <button type="submit" disabled={submitting} className="checkout-submit-btn">
              {submitting ? 'Confirming Order...' : `Confirm Order - $${total.toFixed(2)}`}
            </button>
          </form>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="checkout-summary-box">
              <p>{cart.length} item(s)</p>
              <p>Subtotal: ${total.toFixed(2)}</p>
              <p>Delivery fee: $0.00</p>
              <p className="checkout-total">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="checkout-summary-box">
              <h3>Items</h3>
              {cart.map((item) => (
                <div key={item._id} className="checkout-item">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Checkout;
