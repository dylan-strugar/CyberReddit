import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import headerReducer from '../features/header/headerSlice';
import postboxReducer from '../features/Postbox/postboxSlice';
import trendingBarReducer from '../features/trendingbar/trendingBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    postbox: postboxReducer,
    trendingbar: trendingBarReducer
  },
});
