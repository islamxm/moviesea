import { configureStore } from "@reduxjs/toolkit";
import { appHeaderReducer } from "@/widgets/app-header";
import { locationReducer } from "@/entites/location";
import { rtkApi } from "@/shared/api/rtkApi";

export const createStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      [rtkApi.reducerPath]: rtkApi.reducer,
      appHeaderReducer,
      locationReducer
    },
    // preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: true
    })
    .concat(rtkApi.middleware),
  })
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<typeof createStore>['dispatch']