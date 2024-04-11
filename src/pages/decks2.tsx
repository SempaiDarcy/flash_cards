import { Link } from 'react-router-dom'

import { Button, Table, Typography } from '@/components'
import { useGetDecksQuery } from '@/services/base-api'

export const Decks2 = () => {
  const { data, error, isLoading, refetch } = useGetDecksQuery()

  if (error) {
    return (
      <>
        <Typography variant={'h1'}>An error has occured...</Typography>
        <Typography variant={'h1'}>{JSON.stringify(error)}</Typography>
      </>
    )
  }
  if (isLoading) {
    return <Typography variant={'h1'}>Loading</Typography>
  }

  return (
    <div>
      <Button onClick={refetch}>Refetch</Button>

      <Link to={'/'}>Decks</Link>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items.map(deck => {
            return (
              <Table.Row key={deck?.id}>
                <Table.Cell>{deck?.name}</Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
