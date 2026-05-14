import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Checkout.css';

const OrderStatus = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const found = existingOrders.find((orderItem) => orderItem.id === id);
    setOrder(found || null);
  }, [id]);

  if (!order) {
    return (
      <div className="checkout-page">
        <h1>Order Not Found</h1>
        <p>We could not locate that order. Try returning to the cart or your account.</p>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Order Status</h1>
      <div className="order-status-card">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Placed:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        <p><strong>Estimated Delivery:</strong> {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>

        <div className="order-address">
          <h2>Shipping Address</h2>
          <p>{order.shipping.fullName}</p>
          <p>{order.shipping.address}</p>
          <p>{order.shipping.city}, {order.shipping.postalCode}</p>
          <p>{order.shipping.country}</p>
          <p>{order.shipping.phone}</p>
          {order.shipping.notes && <p><strong>Notes:</strong> {order.shipping.notes}</p>}
        </div>

        <div className="order-items-list">
          <h2>Items</h2>
          {order.items.map((item) => (
            <div key={item._id} className="order-item-row">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <Link to="/account" className="order-link">Back to Account</Link>
      </div>
    </div>
  );
};

export default OrderStatus;
