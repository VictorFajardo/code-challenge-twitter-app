import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import fetchData from './twitterAPI'

export interface TweetsState {
  value: Array<any>,
  status: 'idle' | 'loading' | 'failed',
}

const initialState: TweetsState = {
  value: [],
  status: 'idle',
};

export const fetchTweets = createAsyncThunk(
  'tweets/fetchTweets',
  async (args: any) => {
    const { query, max_id } = args
    const response = await fetchData(query, max_id);
    if (response.request.status === 200) {
      return response.data;
    } else {
      console.log(response)
      return null
    }
  }
);

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    cleanTweets: (state) => {
      state.value = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = [...state.value, ...action.payload.tweets]
      });
  },
});

export const { cleanTweets } = tweetsSlice.actions;

export const selectTweets = (state: RootState) => state.tweets.value;

export default tweetsSlice.reducer;
