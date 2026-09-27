import './InputField.css';

/**
 * InputField
 * Reusable text input component for forms.
 * Logic Team: Connect `value`, `onChange`, and validation state.
 */
function InputField({
  id,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => {},
  error = '',
  required = false,
  autoComplete = '',
  disabled = false,
}) {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''}`}>
      <label htmlFor={id} className="input-field__label">
        {label}
        {required && <span className="input-field__required" aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field__input"
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : 'false'}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
      />
      {error && (
        <span id={`${id}-error`} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default InputField;
