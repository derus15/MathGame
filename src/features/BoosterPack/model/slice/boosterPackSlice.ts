import { createSlice } from '@reduxjs/toolkit';
import { BoosterPackSchema } from './types';

const initialState: BoosterPackSchema = {
    boosterCount: 1,
    isVisibleBoosterPack: false,
};

const boosterPackSlice = createSlice({

    name: 'boosterPackSlice',
    initialState,
    reducers: {

        incrementBoosterCount: (state) => {
            state.boosterCount += 1;
        },

        decrementBoosterCount: (state) => {
            state.boosterCount -= 1;
        },

        openBoosterPack: (state) => {
            state.isVisibleBoosterPack = true;
        },

        closeBoosterPack: (state) => {
            state.isVisibleBoosterPack = false;
        },

        setBoosterCount: (state, action) => {
            state.boosterCount = action.payload;
        },

    },
});

export const { actions: boosterPackActions } = boosterPackSlice;

export const { reducer: boosterPackReducer } = boosterPackSlice;
