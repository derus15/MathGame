import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numbers: [1, 2],
    sign: '+',
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
            const randomIndex = Math.floor(Math.random() * signList.length);
            state.sign = signList[randomIndex];

        },

    },

});

export const {
    generateNumber,
    generateSign,
} = exampleSlice.actions;

export default exampleSlice.reducer;
