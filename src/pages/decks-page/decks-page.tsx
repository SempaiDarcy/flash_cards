import { useState } from 'react'

import { Pagination } from '@/components'
import { DecksTable } from '@/features'
import { useCreateNewDeckMutation, useGetDecksQuery } from '@/services/decks.service'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, error, isLoading } = useGetDecksQuery({ currentPage, itemsPerPage: 10 })
  const [createDeck, deckCreationStatus] = useCreateNewDeckMutation()

  console.log(deckCreationStatus)

  return (
    <div>
      <DecksTable createDeck={createDeck} data={data} error={error} isLoading={isLoading} />
      <Pagination
        count={data?.pagination?.totalPages}
        onChange={setCurrentPage}
        page={currentPage}
      />
    </div>
  )
}
