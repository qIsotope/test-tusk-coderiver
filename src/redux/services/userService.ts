import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUsers } from '../../types/usersTypes'



export const usersApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getUsers: builder.query<IUsers[], string>({
			query: () => `users`,
		}),
		getUserById: builder.query<IUsers, number>({
			query: (id) => `users/${id}`,
		})
	}),
})


export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi