import { useState } from 'react'

import { Panel, TextField } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Panel,
  tags: ['autodocs'],
  title: 'Components/Panel',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: props => <PanelWithHook {...props} />,
}

const PanelWithHook = (args: any) => {
  const [inputValue, setValue] = useState<string>(args.inputValue)

  return (
    <div>
      <TextField
        onChange={e => setValue(e.currentTarget.value)}
        onClearClick={() => setValue('')}
        placeholder={'Input with search'}
        type={'search'}
        value={inputValue}
      />
      {/*<Tabs tabs={} />*/}
    </div>
  )
}
