import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TabItem, Tabs, TabsProps } from '@/components'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

const StorybookTabs = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(args.value)

  const changeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }

  return (
    <Tabs onValueChange={changeActiveTab} value={activeTab}>
      {args.children}
    </Tabs>
  )
}

export const ControlledTabs: Story = {
  args: {
    children: (
      <>
        <TabItem value={'1'}>Switcher 1</TabItem>
        <TabItem value={'2'}>Switcher 2</TabItem>
        <TabItem disabled value={'3'}>
          Switcher 3
        </TabItem>
      </>
    ),
    label: 'Tabs',
    value: '1',
  },
  render: ({ children, ...restArgs }) => <StorybookTabs {...restArgs}>{children}</StorybookTabs>,
}
