import { useState } from 'react'

import { DecksFilter, Page, Pagination, Typography } from '@/components'
import { DecksTable, useCreateNewDeckMutation, useGetDecksQuery } from '@/features'
import { DecksPageHeader } from '@/pages'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, error, isLoading } = useGetDecksQuery({ currentPage, itemsPerPage: 10 })
  const [createDeck, deckCreationStatus] = useCreateNewDeckMutation()
  const [perPage, setPerPage] = useState(8)

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
      <Page>
        <DecksPageHeader createDeck={createDeck} />
        <DecksFilter />
        <DecksTable data={data} />
        <Pagination
          count={data?.pagination?.totalPages}
          onChange={setCurrentPage}
          onPerPageChange={setPerPage}
          page={currentPage}
          perPage={perPage}
          perPageOptions={[5, 10, 15]}
        />
      </Page>
    </>
  )
}
