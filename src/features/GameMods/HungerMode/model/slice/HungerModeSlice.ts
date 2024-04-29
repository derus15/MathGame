import { createSlice } from '@reduxjs/toolkit';
import { HungerSchema } from 'features/GameMods/HungerMode';

const initialState: HungerSchema = {
    currentRound: 1,
    isRoundProgress: false,
    hungerPoints: 0,
};

const HungerModeSlice = createSlice({

    name: 'hungerMode',
    initialState,
    reducers: {

        incrementRound: (state) => {
            state.currentRound += 1;
        },
        
        setRounds: (state, action) => {
            state.currentRound = action.payload;
        },
        
        setHungerPoint: (state, action) => {
            state.hungerPoints = action.payload;
        },

        startRound: (state) => {
            state.isRoundProgress = true;
        },
        
        endRound: (state) => {
            state.isRoundProgress = false;
        },
        
    },
});

export const { actions: hungerModeActions } = HungerModeSlice;

export const { reducer: hungerModeReducer } = HungerModeSlice;
