import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: () => {
    const [checked, setChecked] = useState<RadixCheckbox.CheckedState>(true)

    return (
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        Checked
      </Checkbox>
    )
  },
}
export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: () => {
    const [checked, setChecked] = useState<RadixCheckbox.CheckedState>(false)

    return (
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        Unchecked
      </Checkbox>
    )
  },
}

export const CheckedDisabled: Story = {
  args: {
    checked: true,
  },
  render: () => {
    const [checked, setChecked] = useState<RadixCheckbox.CheckedState>(true)

    return (
      <Checkbox checked={checked} disabled onChange={() => setChecked(!checked)}>
        Checked
      </Checkbox>
    )
  },
}
export const UncheckedDisabled: Story = {
  args: {
    checked: false,
  },
  render: () => {
    const [checked, setChecked] = useState<RadixCheckbox.CheckedState>(false)

    return (
      <Checkbox checked={checked} disabled onChange={() => setChecked(!checked)}>
        Unchecked
      </Checkbox>
    )
  },
}
