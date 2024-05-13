import { Button, Typography } from '@/components'

import s from './decks-page-header.module.scss'
type DecksPageHeaderProps = {
  createDeck: any
}
export const DecksPageHeader = ({ createDeck }: DecksPageHeaderProps) => {
  return (
    <div className={s.root}>
      <Typography as={'h1'} className={s.typography} variant={'large'}>
        Decks list
      </Typography>
      <Button onClick={() => createDeck({ name: 'New Deck' })}>Create New Deck</Button>
    </div>
  )
}
