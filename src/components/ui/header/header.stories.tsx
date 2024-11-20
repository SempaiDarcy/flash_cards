import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof meta>

export const LogIn: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const LogOut: Story = {
  args: {
    isLoggedIn: true,
    name: 'Ivan',
  },
}
export default meta
