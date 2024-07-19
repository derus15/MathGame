import { createSlice } from '@reduxjs/toolkit';
import { HungerSchema } from 'features/GameMods/HungerMode';

const initialState: HungerSchema = {
    currentRound: 0,
    isRoundProgress: false,
};

const hungerModeSlice = createSlice({

    name: 'hungerMode',
    initialState,
    reducers: {

        incrementRound: (state) => {
            state.currentRound += 1;
        },
        
        resetRounds: (state, action) => {
            state.currentRound = action.payload;
        },

        startRound: (state) => {
            state.isRoundProgress = true;
        },
        
        endRound: (state) => {
            state.isRoundProgress = false;
        },
        
    },
});

export const { actions: hungerModeActions } = hungerModeSlice;

export const { reducer: hungerModeReducer } = hungerModeSlice;
