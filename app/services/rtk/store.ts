import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "./api/testApi";

const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

export default store;
