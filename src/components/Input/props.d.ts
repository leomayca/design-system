import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  variant?: 'error' | 'success'
  required?: boolean
  helperText?: string
}
