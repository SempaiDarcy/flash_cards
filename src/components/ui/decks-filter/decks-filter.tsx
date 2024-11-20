import { useState } from 'react'

import { Button, Slider, TabItem, Tabs, TextField } from '@/components'

import s from './decks-filter.module.scss'
export const DecksFilter = () => {
  const [value, setValue] = useState([0, 10])
  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return (
    <div className={s.root}>
      <TextField className={s.decksListInput} placeholder={'Search...'} type={'search'} />
      <Tabs defaultValue={'2'} label={'Tabs'}>
        <TabItem value={'1'}>My Decks</TabItem>
        <TabItem value={'2'}>All Decks</TabItem>
      </Tabs>
      <Slider
        label={'Number of cards'}
        max={20}
        min={0}
        onValueChange={handleOnValueChange}
        step={1}
        value={value}
      />
      <Button className={s.clearFilterButton} variant={'secondary'}>
        Clear Filter
      </Button>
    </div>
  )
}
