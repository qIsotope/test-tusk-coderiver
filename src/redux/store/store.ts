import user from './../slices/userSlice';
import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../services/userService';

export const store = configureStore({
	reducer: {
		user,

		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch