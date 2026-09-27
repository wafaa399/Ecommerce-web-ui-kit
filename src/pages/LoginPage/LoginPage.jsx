import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import LoginForm from '../../components/login/LoginForm/LoginForm';
import './LoginPage.css';

/**
 * LoginPage
 * UI-only login page — composes shared layout with LoginForm.
 *
 * Logic Team:
 *   - Wire `onLogin`, `onGoogleLogin`, `onForgotPasswordClick`
 *   - Pass `isLoading` and `serverError` from auth state
 */
function LoginPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Breadcrumb
        pageTitle="Login"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Login' },
        ]}
      />
      <main className="page-main">
        <div className="container login-page">
          <div className="login-page__card">
            <div className="login-page__header">
              <h2 className="login-page__title">Welcome Back</h2>
              <p className="login-page__subtitle">
                Sign in to your account to continue shopping
              </p>
            </div>
            <LoginForm onSignupClick={() => navigate('/signup')} />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default LoginPage;
