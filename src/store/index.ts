import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import queryReducer from '../features/query/querySlice';
import tweetsReducer from '../features/tweets/tweetsSlice';
import metaReducer from '../features/meta/metaSlice';
import hashtagsReducer from '../features/hashtags/hashtagsSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    hashtags: hashtagsReducer,
    meta: metaReducer,
    query: queryReducer,
    tweets: tweetsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
