import type { Meta, StoryObj } from '@storybook/react'

import { FiLogOut } from 'react-icons/fi'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    icon: FiLogOut,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    icon: FiLogOut,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Button Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const FullWidthWithIcon: Story = {
  args: {
    children: 'Button Full Width',
    disabled: false,
    fullWidth: true,
    icon: FiLogOut,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Button As Link',
    variant: 'primary',
  },
}

export const AsLinkWithIcon: Story = {
  args: {
    as: 'a',
    children: 'Button As Link',
    icon: FiLogOut,
    variant: 'primary',
  },
}
