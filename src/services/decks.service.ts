import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/services/flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createNewDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs | void>({
        query: args => {
          return {
            params: args ?? {},
            url: `v2/decks`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v2/decks`,
          }
        },
      }),
    }
  },
})

export const { useCreateNewDeckMutation, useGetDecksQuery } = decksService
