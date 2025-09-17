import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, Location } from "@/shared/types/locale";

type State = {
  language: string
  location: Location | null
}

const initialState: State = {
  language: 'en-US',
  location: null
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {

    updateLang: (state, { payload }: PayloadAction<string>) => { state.language = payload },

    updateLocation: (state, { payload }: PayloadAction<Location | null>) => { state.location = payload }

  }
})

export const locationReducer = locationSlice.reducer
export const locationActions = locationSlice.actions