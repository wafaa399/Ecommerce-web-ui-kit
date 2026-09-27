import { useNavigate } from 'react-router-dom';
import NotificationBar from '../../components/shared/NotificationBar/NotificationBar';
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';

/**
 * MainLayout
 * Shared page shell with site chrome (notification bar, navbar, footer).
 * Logic Team: Pass cartItemCount and wire cart/search callbacks from your store.
 */
function MainLayout({
  children,
  cartItemCount = 0,
  onCartClick,
  onSearchSubmit,
}) {
  const navigate = useNavigate();

  return (
    <div className="page-layout">
      <NotificationBar />
      <Navbar
        cartItemCount={cartItemCount}
        onCartClick={onCartClick || (() => {})}
        onAccountClick={() => navigate('/login')}
        onSearchSubmit={onSearchSubmit || (() => {})}
      />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
