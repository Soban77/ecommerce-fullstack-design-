import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Checkout.css';

const Account = () => {
  const { user, loading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = savedOrders.filter((order) => order.userEmail === user?.email);
    setOrders(userOrders);
  }, [user]);

  if (loading) {
    return <div className="checkout-page"><h1>Loading account...</h1></div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="checkout-page">
      <h1>My Account</h1>
      <div className="account-grid">
        <section className="account-card">
          <h2>Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </section>

        <section className="account-card">
          <h2>Order History</h2>
          {orders.length === 0 ? (
            <p>You do not have any orders yet.</p>
          ) : (
            <div className="order-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div>
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                    <p>{new Date(order.createdAt).toLocaleString()}</p>
                  </div>
                  <Link to={`/order/${order.id}`} className="order-link">View Status</Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Account;
