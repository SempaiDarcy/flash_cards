import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Tables } from '@/components/ui/tables/tables'

const meta = {
  component: Tables,
  tags: ['autodocs'],
  title: 'Components/Tables',
} satisfies Meta<typeof Tables>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Column = {
  key: string
  title: string
}
export const WithSort: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)
    const columns: Column[] = [
      {
        key: 'name',
        title: 'Name',
      },
      {
        key: 'cardsCount',
        title: 'Cards',
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        title: 'Created by',
      },
    ]

    const handleSort = (key: string) => {
      if (sort && sort.key === key) {
        setSort({
          direction: sort.direction === 'asc' ? 'desc' : 'asc',
          key,
        })
      } else {
        setSort({
          direction: 'asc',
          key,
        })
      }
    }

    console.log(sort)

    return (
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                {column.title}
                {sort && sort.key === column.key && (
                  <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.cardsCount}</td>
              <td>{item.updated}</td>
              <td>{item.createdBy}</td>
              <td>icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}
