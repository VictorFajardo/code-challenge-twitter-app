import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchTweets } from '../tweets/tweetsSlice';

export interface HashtagsState {
  value: Array<string>,
}

const initialState: HashtagsState = {
  value: [],
}

export const hashtagsSlice = createSlice({
  name: 'hashtags',
  initialState,
  reducers: {
  cleanHashtags: (state) => {
      state.value = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.value = [...state.value, ...action.payload.hashtags]
      });
  },
})

export const { cleanHashtags } = hashtagsSlice.actions

export const selectHashtags = (state: RootState) => state.hashtags.value

export default hashtagsSlice.reducer
