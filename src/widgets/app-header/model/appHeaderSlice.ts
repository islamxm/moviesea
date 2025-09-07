import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  headerHeight: number
}

const initialState: State = {
  headerHeight: 0
}

const appHeaderSlice = createSlice({
  name: 'appHeaderSlice',
  initialState,
  reducers: {
    updateHeaderHeight: (state, {payload}: PayloadAction<number>) => {state.headerHeight = payload}
  }
})

export const appHeaderReducer = appHeaderSlice.reducer
export const appHeaderActions = appHeaderSlice.actions