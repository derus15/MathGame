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

        setAnswer: (state, action) => {
            state.answer = action.payload;
        },
        
        setExample: (state, action) => {
            state.example = action.payload;
        },
        
        setSign: (state, action) => {
            state.sign = action.payload;
        },

    },

});

export const { actions: exampleActions } = exampleSlice;

export const { reducer: exampleReducer } = exampleSlice;
