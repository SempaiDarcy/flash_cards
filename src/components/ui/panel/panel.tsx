import { Button, Slider, TabItem, Tabs, TextField } from '@/components'
import { LuTrash } from 'react-icons/lu'

import s from './panel.module.scss'
export type PanelPropsType = {
  className?: string
  inputValue: string
  isDisabled?: boolean
  label: string
  maxSliderValue: number
  minSliderValue: number
  onChangeInputValue?: (value: string) => void
  onChangeSliderValue: (value: number[]) => void
  onChangeTabValue?: (value: string) => void
  sliderLabel: string
  sliderValue: number[]
  value: string
}
export const Panel = ({
  inputValue,
  isDisabled,
  label,
  maxSliderValue,
  minSliderValue,
  onChangeInputValue,
  onChangeSliderValue,
  onChangeTabValue,
  sliderLabel,
  sliderValue,
  value,
}: PanelPropsType) => {
  return (
    <div className={s.root}>
      <TextField
        className={s.input}
        onChangeValue={onChangeInputValue}
        placeholder={'Input with search'}
        type={'search'}
        value={inputValue}
      />
      <Tabs className={s.tabs} label={label} onValueChange={onChangeTabValue} value={value}>
        <TabItem disabled={isDisabled} value={'my'}>
          My Decks
        </TabItem>
        <TabItem disabled={isDisabled} value={'all'}>
          All Decks
        </TabItem>
      </Tabs>
      <Slider
        disabled={isDisabled}
        label={sliderLabel}
        max={maxSliderValue}
        min={minSliderValue}
        onValueChange={onChangeSliderValue}
        value={sliderValue}
      />
      <Button className={s.button} icon={LuTrash}>
        Clear Filter
      </Button>
    </div>
  )
}
