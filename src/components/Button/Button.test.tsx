import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './index'
import styles from './Button.module.css'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it('applies solid variant class', () => {
    render(<Button variant="solid">Solid</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.solid)
  })

  it('applies outlined variant class', () => {
    render(<Button variant="outlined">Outlined</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.outlined)
  })

  it('applies text variant class', () => {
    render(<Button variant="text">Text</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.text)
  })

  it('applies primary color class', () => {
    render(<Button color="primary">Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.primary)
  })

  it('applies secondary color class', () => {
    render(<Button color="secondary">Secondary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.secondary)
  })

  it('applies size classes', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.lg)
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
