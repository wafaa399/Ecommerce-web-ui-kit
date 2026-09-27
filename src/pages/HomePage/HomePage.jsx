import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import './HomePage.css';

/**
 * HomePage
 * Minimal placeholder for navigation — not part of the current UI scope.
 * Logic Team: Replace with the full homepage design when ready.
 */
function HomePage() {
  return (
    <MainLayout>
      <main className="page-main">
        <div className="container home-page">
          <h1 className="home-page__title">Welcome to Ecommerce</h1>
          <p className="home-page__subtitle">
            Explore the implemented UI pages below.
          </p>
          <nav className="home-page__links" aria-label="Demo page links">
            <Link to="/login" className="home-page__link">Login</Link>
            <Link to="/products/prod-001" className="home-page__link">Product Details</Link>
            <Link to="/payment-success" className="home-page__link">Payment Success</Link>
          </nav>
        </div>
      </main>
    </MainLayout>
  );
}

export default HomePage;
