export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}
export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}
export type GetDeckByIdArgs = {
  id: string
}
export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
