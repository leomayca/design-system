import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './index'
import styles from './Input.module.css'

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />)
    const label = screen.getByText('Email')
    const input = screen.getByLabelText('Email')
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('shows required asterisk when required', () => {
    render(<Input label="Password" required />)
    const asterisk = screen.getByText('*')
    expect(asterisk).toBeInTheDocument()
    expect(asterisk).toHaveClass(styles.required)
  })

  it('applies size classes', () => {
    render(<Input size="lg" placeholder="Large input" />)
    const input = screen.getByPlaceholderText('Large input')
    expect(input).toHaveClass(styles.lg)
  })

  it('applies error variant class', () => {
    render(<Input variant="error" placeholder="Error input" />)
    const input = screen.getByPlaceholderText('Error input')
    expect(input).toHaveClass(styles.error)
  })

  it('applies success variant class', () => {
    render(<Input variant="success" placeholder="Success input" />)
    const input = screen.getByPlaceholderText('Success input')
    expect(input).toHaveClass(styles.success)
  })

  it('shows helper text', () => {
    render(<Input helperText="This is helper text" />)
    const helperText = screen.getByText('This is helper text')
    expect(helperText).toBeInTheDocument()
    expect(helperText).toHaveClass(styles.helperText)
  })

  it('shows error helper text with error styling', () => {
    render(<Input variant="error" helperText="Error message" />)
    const helperText = screen.getByText('Error message')
    expect(helperText).toHaveClass(styles.helperText)
    expect(helperText).toHaveClass(styles.helperTextError)
  })

  it('shows success helper text with success styling', () => {
    render(<Input variant="success" helperText="Success message" />)
    const helperText = screen.getByText('Success message')
    expect(helperText).toHaveClass(styles.helperText)
    expect(helperText).toHaveClass(styles.helperTextSuccess)
  })

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />)
    const input = screen.getByPlaceholderText('Disabled input')
    expect(input).toBeDisabled()
  })

  it('associates label with input using htmlFor', () => {
    render(<Input label="Username" id="username-input" />)
    const label = screen.getByText('Username')
    const input = screen.getByLabelText('Username')
    expect(label).toHaveAttribute('for', 'username-input')
    expect(input).toHaveAttribute('id', 'username-input')
  })

  it('generates unique id when not provided', () => {
    render(<Input label="Email" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('id')
    expect(input.id).toMatch(/^input-/)
  })
})
