import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import SignUpForm from '../../components/signup/SignUpForm/SignUpForm';
import './SignUpPage.css';

/**
 * SignUpPage
 * UI-only sign-up page — composes shared layout with SignUpForm.
 *
 * Logic Team:
 *   - Wire `onSignUp`, `onGoogleSignUp` with your registration/auth logic
 *   - Pass `isLoading` and `serverError` from auth state
 */
function SignUpPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Breadcrumb
        pageTitle="Create Account"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Create Account' },
        ]}
      />
      <main className="page-main">
        <div className="container signup-page">
          <div className="signup-page__card">
            <div className="signup-page__header">
              <h2 className="signup-page__title">Create Account</h2>
              <p className="signup-page__subtitle">
                Join us today and start shopping
              </p>
            </div>
            <SignUpForm onLoginClick={() => navigate('/login')} />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default SignUpPage;
