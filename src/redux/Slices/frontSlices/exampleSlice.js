import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numbers: [],
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

    },

});

export const { generateNumber } = exampleSlice.actions;

export default exampleSlice.reducer;
