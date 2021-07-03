import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchTweets } from '../tweets/tweetsSlice';

export interface MetaState {
  completed_in: number,
  count: number,
  max_id: number,
  query: string
}

const initialState: MetaState = {
  completed_in: 0,
  count: 0,
  max_id: 0,
  query: '',
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    resetMeta: (state) => {
      // TODO reset to a init state
      state.completed_in = 0
      state.count = 0
      state.max_id = 0
      state.query = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.completed_in = action.payload.meta.completed_in
        state.count = action.payload.meta.count
        state.max_id = action.payload.meta.max_id
        state.query = action.payload.meta.query
      });
  },
})

export const { resetMeta } = metaSlice.actions

export const selectMaxId = (state: RootState) => state.meta.max_id

export default metaSlice.reducer
