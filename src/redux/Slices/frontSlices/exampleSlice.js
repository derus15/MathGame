import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numbers: [],
    sign: null,
};

const exampleSlice = createSlice({

    name: 'example',
    initialState,
    reducers: {

        generateNumber: (state, action) => {

            const numberArray = [];

            for (let i = 0; i < action.payload; i += 1) {
                numberArray.push(Math.floor(Math.random() * 100));
            }
            state.numbers = numberArray;
        },

        generateSign: (state, action) => {

            const signList = action.payload;
            state.sign = signList[Math.floor(Math.random() * signList.length)];

        },

    },

});

export const { generateNumber, generateSign } = exampleSlice.actions;

export default exampleSlice.reducer;
