import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface FilterState {
  value: Array<string>,
}

const initialState: FilterState = {
  value: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      state.value = state.value.includes(action.payload) ? [...state.value] : [...state.value, action.payload]
    },
    deleteFilter: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(hashtag => hashtag !== action.payload)
    },
    cleanFilter: (state) => {
      state.value = []
    },
  },
})

export const { addFilter, deleteFilter, cleanFilter } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterSlice.reducer
