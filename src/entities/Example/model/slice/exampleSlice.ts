import { createSlice } from '@reduxjs/toolkit';
import { ExampleSchema } from './types';

const initialState: ExampleSchema = {
    numbersList: [1, 2],
    sign: '+',
    answer: '3',
    example: undefined,
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
            state.numbersList = numberArray;
        },

        generateSign: (state, action) => {

            const signList = action.payload;
            const randomIndex = Math.floor(Math.random() * signList.length);
            state.sign = signList[randomIndex];

        },

        setAnswer: (state, action) => {
            state.answer = action.payload;
        },
        
        setExample: (state, action) => {
            state.example = action.payload;
        },

    },

});

export const { actions: exampleActions } = exampleSlice;

export const { reducer: exampleReducer } = exampleSlice;
