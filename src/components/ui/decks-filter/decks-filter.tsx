import { TabItem, Tabs, TextField } from '@/components'

import s from './decks-filter.module.scss'
export const DecksFilter = () => {
  return (
    <div className={s.root}>
      <TextField placeholder={'Search...'} type={'search'} />
      <Tabs defaultValue={'2'} label={'Tabs'}>
        <TabItem value={'1'}>My Decks</TabItem>
        <TabItem value={'2'}>All Decks</TabItem>
      </Tabs>
    </div>
  )
}
