import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage/PaymentSuccessPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
    </Routes>
  );
}

export default App;
