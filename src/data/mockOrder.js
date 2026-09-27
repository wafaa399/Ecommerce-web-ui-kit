/**
 * MOCK ORDER DATA
 * Logic Team: Replace this mock data with actual order data from your payment/order API.
 * This structure represents the expected order data shape after a successful payment.
 */
export const mockOrder = {
  id: 'ORD-2024-001234',
  status: 'confirmed',
  paymentStatus: 'paid',
  date: '2024-01-15',
  estimatedDelivery: '2024-01-20',

  customer: {
    name: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    phone: '+1 (555) 000-0000',
  },

  shippingAddress: {
    name: 'Ahmed Ali',
    line1: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
  },

  paymentMethod: {
    type: 'credit_card',
    last4: '4242',
    brand: 'Visa',
  },

  items: [
    {
      id: 'item-001',
      productId: 'prod-001',
      name: 'Raw Black T-Shirt Lineup',
      size: 'M',
      color: 'Black',
      quantity: 1,
      price: 75.00,
      image: null, // Logic Team: Replace with actual image URL
    },
  ],

  subtotal: 75.00,
  shipping: 0,
  tax: 7.50,
  discount: 0,
  total: 82.50,
};
