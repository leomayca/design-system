import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outlined' | 'text'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
}
