import { useState } from 'react';
import InputField from '../../login/InputField/InputField';
import PasswordField from '../../login/PasswordField/PasswordField';
import './SignUpForm.css';

/**
 * SignUpForm
 * Complete sign-up form UI — the central component of the Sign Up page.
 *
 * Logic Team:
 *   - Connect `onSignUp` callback with your registration logic.
 *     Receives: { firstName, lastName, email, password }
 *   - Connect `onGoogleSignUp` with your Google OAuth registration flow.
 *   - Show server-side errors via the `serverError` prop.
 *   - Handle loading state via `isLoading` prop.
 *   - Wire `onLoginClick` with router navigation (already done in SignUpPage).
 */
function SignUpForm({
  onSignUp = () => {},
  onGoogleSignUp = () => {},
  onLoginClick = () => {},
  isLoading = false,
  serverError = '',
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms & Conditions.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSignUp({ firstName, lastName, email, password });
  };

  return (
    <div className="signup-form-wrapper">
      {/* Google Sign Up */}
      <button
        type="button"
        className="signup-form__google-btn"
        onClick={onGoogleSignUp}
        id="signup-google-btn"
      >
        <span className="signup-form__google-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
        </span>
        Continue with Google
      </button>

      {/* Divider */}
      <div className="signup-form__divider">
        <span className="signup-form__divider-line" aria-hidden="true"></span>
        <span className="signup-form__divider-text">or</span>
        <span className="signup-form__divider-line" aria-hidden="true"></span>
      </div>

      {/* Server Error */}
      {serverError && (
        <div className="signup-form__server-error" role="alert">
          {serverError}
        </div>
      )}

      {/* Sign Up Form */}
      <form
        className="signup-form"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Sign up form"
      >
        {/* Name Row */}
        <div className="signup-form__name-row">
          <InputField
            id="signup-first-name"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName}
            autoComplete="given-name"
            required
          />
          <InputField
            id="signup-last-name"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName}
            autoComplete="family-name"
            required
          />
        </div>

        <InputField
          id="signup-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
          required
        />

        <PasswordField
          id="signup-password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="new-password"
          required
        />

        <PasswordField
          id="signup-confirm-password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          autoComplete="new-password"
          required
        />

        {/* Terms & Conditions */}
        <div className="signup-form__terms">
          <label className="signup-form__terms-label">
            <input
              type="checkbox"
              className="signup-form__terms-checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              id="signup-terms-checkbox"
            />
            <span>
              I agree to the{' '}
              <button
                type="button"
                className="signup-form__terms-link"
                id="signup-terms-link"
              >
                Terms &amp; Conditions
              </button>{' '}
              and{' '}
              <button
                type="button"
                className="signup-form__terms-link"
                id="signup-privacy-link"
              >
                Privacy Policy
              </button>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="signup-form__field-error" role="alert">{errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="signup-form__submit-btn"
          disabled={isLoading}
          id="signup-submit-btn"
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
        </button>

        {/* Login Link */}
        <p className="signup-form__login-text">
          Already have an account?{' '}
          <button
            type="button"
            className="signup-form__login-link"
            onClick={onLoginClick}
            id="signup-login-link"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
