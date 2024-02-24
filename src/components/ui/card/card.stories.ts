import { CardPage } from '@/components/ui/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardPage> = {
  component: CardPage,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof CardPage>

export const Default: Story = {
  args: {
    children: '',
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '34.5rem',
      justifyContent: 'center',
      width: '26.25rem',
    },
  },
}
