import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, Location } from "@/shared/types/locale";

type State = {
  language: Language
  location: Location | null
}

const initialState: State = {
  language: {
    locale: 'en-EN',
    name: {
      'en-EN': 'English',
      'ru-RU': 'Russian'
    },
    countries: []
  },
  location: null
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {

    updateLang: (state, { payload }: PayloadAction<Language>) => { state.language = payload },

    updateLocation: (state, { payload }: PayloadAction<Location | null>) => { state.location = payload }

  }
})

export const locationReducer = locationSlice.reducer
export const locationActions = locationSlice.actions