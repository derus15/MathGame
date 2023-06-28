import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  time: localStorage.getItem('durationTime') || 15,
  number: localStorage.getItem('durationNumber') || 10,
  mode: localStorage.getItem('mode') || 'Стандарт',
  signList: JSON.parse(localStorage.getItem('signList')) || ['+', '-'],
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {

    changeTime: (state, action) => {
      state.time = action.payload;
      localStorage.setItem('durationTime', action.payload);
    },

    changeNumber: (state, action) => {
      state.number = action.payload;
      localStorage.setItem('durationNumber', action.payload);
    },

    addSign: (state, action) => {
      state.signList = [...state.signList, action.payload];
      localStorage.setItem('signList', JSON.stringify(state.signList));
    },

    deleteSign: (state, action) => {
      state.signList = state.signList.filter(sign => sign !== action.payload);
      localStorage.setItem('signList', JSON.stringify(state.signList));
    },

    changeGameMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('mode', action.payload);
    }
  },
})

export const { changeTime, changeNumber, addSign, deleteSign, changeGameMode } = interfaceSlice.actions

export default interfaceSlice.reducer