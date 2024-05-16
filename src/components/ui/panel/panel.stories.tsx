import { useState } from 'react'

import { Panel, PanelPropsType } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Panel> = {
  component: Panel,
  tags: ['autodocs'],
  title: 'Components/Panel',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    inputValue: '',
    label: 'Show decks cards',
    maxSliderValue: 20,
    minSliderValue: 1,
    sliderLabel: 'Number of cards',
    sliderValue: [5, 15],
    value: 'allCards',
  },
  render: args => <PanelWithHook {...args} />,
}

const PanelWithHook = (args: PanelPropsType) => {
  const [inputValue, setValue] = useState<string>(args.inputValue)
  const [tabValue, setTabValue] = useState<string>(args.value)
  const [sliderValue, setSliderValue] = useState(args.sliderValue)

  return (
    <Panel
      inputValue={inputValue}
      label={args.label}
      maxSliderValue={args.maxSliderValue}
      minSliderValue={args.minSliderValue}
      onChangeInputValue={setValue}
      onChangeSliderValue={setSliderValue}
      onChangeTabValue={setTabValue}
      sliderLabel={args.sliderLabel}
      sliderValue={sliderValue}
      value={tabValue}
    />
  )
}
