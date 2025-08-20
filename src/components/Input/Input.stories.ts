import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', undefined],
    },
    label: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    helperText: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
}

export const Error: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'error',
    helperText: 'Password must be at least 8 characters',
    required: true,
  },
}

export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'success',
    helperText: 'Email is available',
    value: 'user@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be 3-20 characters, letters and numbers only',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Account ID',
    value: 'ACC-12345',
    disabled: true,
    helperText: 'This field cannot be edited',
  },
}

export const Small: Story = {
  args: {
    label: 'Code',
    placeholder: '000000',
    size: 'sm',
    helperText: 'Enter 6-digit code',
  },
}

export const Large: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a detailed description',
    size: 'lg',
  },
}
