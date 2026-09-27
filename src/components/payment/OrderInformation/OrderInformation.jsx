import './OrderInformation.css';

/**
 * OrderInformation
 * Displays shipping address, payment method, and order details.
 * Logic Team: Pass `order` object from your order API response.
 */
function OrderInformation({ order }) {
  if (!order) return null;

  return (
    <div className="order-info">
      <h2 className="order-info__title">Order Information</h2>

      <div className="order-info__sections">
        {/* Shipping Address */}
        <div className="order-info__section">
          <h3 className="order-info__section-title">
            <span className="order-info__section-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M8 1.333A5.333 5.333 0 0 1 13.333 6.667C13.333 10 8 14.667 8 14.667S2.667 10 2.667 6.667A5.333 5.333 0 0 1 8 1.333z"/>
              </svg>
            </span>
            Shipping Address
          </h3>
          <div className="order-info__section-content">
            <p className="order-info__value order-info__value--name">
              {order.shippingAddress.name}
            </p>
            <p className="order-info__value">{order.shippingAddress.line1}</p>
            <p className="order-info__value">
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
            </p>
            <p className="order-info__value">{order.shippingAddress.country}</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="order-info__section">
          <h3 className="order-info__section-title">
            <span className="order-info__section-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1.333" y="3.333" width="13.333" height="9.333" rx="1.333"/>
                <path d="M1.333 6.667h13.333"/>
              </svg>
            </span>
            Payment Method
          </h3>
          <div className="order-info__section-content">
            <p className="order-info__value">
              {order.paymentMethod.brand} ending in {order.paymentMethod.last4}
            </p>
            <span className="order-info__paid-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Paid
            </span>
          </div>
        </div>

        {/* Order Details */}
        <div className="order-info__section">
          <h3 className="order-info__section-title">
            <span className="order-info__section-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.333 2H2.667C1.93 2 1.333 2.597 1.333 3.333v9.334c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.333C14.667 2.597 14.07 2 13.333 2z"/>
                <path d="M10.667 1.333v1.334M5.333 1.333v1.334M1.333 6h13.334"/>
              </svg>
            </span>
            Order Details
          </h3>
          <div className="order-info__section-content">
            <div className="order-info__detail-row">
              <span className="order-info__detail-label">Order Date</span>
              <span className="order-info__detail-value">
                {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="order-info__detail-row">
              <span className="order-info__detail-label">Est. Delivery</span>
              <span className="order-info__detail-value">
                {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="order-info__detail-row">
              <span className="order-info__detail-label">Order Status</span>
              <span className="order-info__status-badge order-info__status-badge--confirmed">
                Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="order-info__section">
          <h3 className="order-info__section-title">
            <span className="order-info__section-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.333 14v-1.333A2.667 2.667 0 0 0 10.667 10H5.333a2.667 2.667 0 0 0-2.666 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333z"/>
              </svg>
            </span>
            Customer
          </h3>
          <div className="order-info__section-content">
            <p className="order-info__value order-info__value--name">{order.customer.name}</p>
            <p className="order-info__value">{order.customer.email}</p>
            {order.customer.phone && (
              <p className="order-info__value">{order.customer.phone}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
