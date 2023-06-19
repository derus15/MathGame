import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  time: localStorage.getItem('durationTime') || 15,
  mode: 'Стандарт',
  number: localStorage.getItem('durationNumber') || 10,
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    changeTime: (state, action) => {
      state.time = action.payload
    },

    changeNumber: (state, action) => {
      state.number = action.payload
    }

  },
})

export const { changeTime, changeNumber } = interfaceSlice.actions

export default interfaceSlice.reducer