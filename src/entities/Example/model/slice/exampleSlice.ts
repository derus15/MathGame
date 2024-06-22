import { createSlice } from '@reduxjs/toolkit';
import { ExampleSchema } from './types';
import { generateSeed } from 'shared/lib/generateExampleSeed/generateExampleSeed';

const initialState: ExampleSchema = {
    numbersList: [1, 2],
    sign: '+',
    answer: '3',
    example: undefined,
    seed: null,
    isRetry: false,
    isPersonalSeed: false,
    signList: JSON.parse(localStorage.getItem('signList')) || ['+', '-'],
    iterationSeed: 1,
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

        setSignList: (state, action) => {
            state.signList = action.payload;
        },

        generateSeed: (state) => {
            state.seed = generateSeed(state.signList);
            state.iterationSeed = 0;
            state.isRetry = false;
            state.isPersonalSeed = false;
        },

        setSeed: (state, action) => {
            state.seed = action.payload;
            state.iterationSeed = 0;
            state.isRetry = false;
        },
        
        setIsPersonalSeed: (state) => {
            state.isPersonalSeed = true;
        },

        resetIsPersonalSeed: (state) => {
            state.isPersonalSeed = false;
        },

        retrySession: (state) => {
            state.isRetry = true;
            state.iterationSeed = 0;
        },

        notRetrySession: (state) => {
            state.isRetry = false;
        },

        incrementIteration: (state) => {
            state.iterationSeed += 1;
        },

        resetIteration: (state) => {
            state.iterationSeed = 1;
        },

    },

});

export const { actions: exampleActions } = exampleSlice;

export const { reducer: exampleReducer } = exampleSlice;
