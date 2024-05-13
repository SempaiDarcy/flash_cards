import { useState } from 'react'

import { Pagination, Typography } from '@/components'
import { DecksTable } from '@/features'
import { useCreateNewDeckMutation, useGetDecksQuery } from '@/services/decks.service'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, error, isLoading } = useGetDecksQuery({ currentPage, itemsPerPage: 10 })
  const [createDeck, deckCreationStatus] = useCreateNewDeckMutation()

  console.log(deckCreationStatus)

  if (error) {
    return (
      <>
        <Typography variant={'h1'}>An error has occured...</Typography>
        <Typography variant={'h1'}>{JSON.stringify(error)}</Typography>
      </>
    )
  }
  if (isLoading) {
    return <Typography variant={'h1'}>Loading...</Typography>
  }

  return (
    <>
      <DecksTable createDeck={createDeck} data={data} />
      <Pagination
        count={data?.pagination?.totalPages}
        onChange={setCurrentPage}
        page={currentPage}
      />
    </>
  )
}
