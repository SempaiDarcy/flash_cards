import { Button, Table } from '@/components'
import { GetDecksResponse } from '@/services/flashcards.types'
type DecksTableProps = {
  createDeck: any
  data: GetDecksResponse | undefined
}
export const DecksTable = ({ createDeck, data }: DecksTableProps) => {
  return (
    <div>
      <Button onClick={() => createDeck({ name: 'New Deck' })}>Create New Deck</Button>
      <h2>current page: {data?.pagination?.currentPage}</h2>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Updated</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items.map(deck => {
            return (
              <Table.Row key={deck?.id}>
                <Table.Cell>{deck?.name}</Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck?.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{deck?.author.name}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
