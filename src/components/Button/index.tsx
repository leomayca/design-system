import styles from './Button.module.css'
import type { ButtonProps } from './props'

export const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[color], styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
