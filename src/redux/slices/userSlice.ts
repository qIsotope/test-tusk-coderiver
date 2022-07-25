import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	URL: string
}
const initialState: CounterState = {
	URL: localStorage.getItem('image') || ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateURL: (state, action: PayloadAction<string>) => {
			state.URL = action.payload
		},
	}
})


export const { updateURL } = userSlice.actions

export default userSlice.reducer