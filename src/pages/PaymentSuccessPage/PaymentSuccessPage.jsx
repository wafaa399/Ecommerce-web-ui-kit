import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import SuccessMessage from '../../components/payment/SuccessMessage/SuccessMessage';
import OrderSummary from '../../components/payment/OrderSummary/OrderSummary';
import OrderInformation from '../../components/payment/OrderInformation/OrderInformation';
import ActionButtons from '../../components/payment/ActionButtons/ActionButtons';
import { mockOrder } from '../../data/mockOrder';
import './PaymentSuccessPage.css';

/**
 * PaymentSuccessPage
 * UI-only post-payment confirmation page.
 *
 * Logic Team:
 *   - Replace `mockOrder` with order data from payment API response
 *   - Wire action button callbacks to real navigation flows
 */
function PaymentSuccessPage() {
  const navigate = useNavigate();
  const order = mockOrder;

  return (
    <MainLayout>
      <Breadcrumb
        pageTitle="Order Confirmation"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Checkout', href: '/checkout' },
          { label: 'Confirmation' },
        ]}
      />
      <main className="page-main">
        <div className="container--wide payment-success-page">
          <SuccessMessage orderNumber={order.id} />

          <div className="payment-success-page__grid">
            <OrderSummary order={order} />
            <OrderInformation order={order} />
          </div>

          <ActionButtons
            onContinueShopping={() => navigate('/')}
            onTrackOrder={() => {}}
            onViewOrderHistory={() => {}}
          />
        </div>
      </main>
    </MainLayout>
  );
}

export default PaymentSuccessPage;
