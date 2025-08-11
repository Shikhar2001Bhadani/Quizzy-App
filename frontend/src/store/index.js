import { configureStore } from "@reduxjs/toolkit";

import commonSlice from "./features/common/commonSlice";
import templateSlice from "./features/template/templateSlice";
import assesmentsSlice from "./features/assesments/assesmentSlice";
import { apiSlice } from "./api";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: commonSlice,
    template: templateSlice,
    assesments: assesmentsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
