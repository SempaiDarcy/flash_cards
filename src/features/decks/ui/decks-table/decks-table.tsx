import { Table } from '@/components'
import { GetDecksResponse } from '@/services'

import s from './decks-table.module.scss'
type DecksTableProps = {
  data: GetDecksResponse | undefined
}
export const DecksTable = ({ data }: DecksTableProps) => {
  return (
    <div>
      {/*<h2>current page: {data?.pagination?.currentPage}</h2>*/}
      <Table.Root className={s.root}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Updated</Table.HeadCell>
            <Table.HeadCell>Created By</Table.HeadCell>
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
