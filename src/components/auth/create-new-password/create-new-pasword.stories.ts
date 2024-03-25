import { CreateNewPassword } from '@/components/auth/create-new-password/create-new-password'
import { StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
}

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
