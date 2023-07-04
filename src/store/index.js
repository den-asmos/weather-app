import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './weather/weather.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import citySlice from './weather/city.slice';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    city: citySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);
