import type { InputProps } from './props'
import styles from './Input.module.css'

export const Input = ({
  label,
  placeholder,
  size = 'md',
  disabled,
  variant,
  required,
  helperText,
  id,
  ...props
}: InputProps) => {
  const classes = [styles.input, styles[size], variant && styles[variant]]
    .filter(Boolean)
    .join(' ')

  const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`
  const needsWrapper = label || helperText

  const helperTextClasses = `${styles.helperText} ${variant ? styles[`helperText${variant.charAt(0).toUpperCase() + variant.slice(1)}`] : ''}`.trim()

  const inputElement = (
    <input
      id={inputId}
      className={classes}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      {...props}
    />
  )

  if (needsWrapper) {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        {inputElement}
        {helperText && (
          <span className={helperTextClasses}>
            {helperText}
          </span>
        )}
      </div>
    )
  }

  return inputElement
}
