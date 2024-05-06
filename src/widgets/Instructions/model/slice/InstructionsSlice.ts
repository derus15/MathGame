import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InstructionsSchema } from '../slice/types';

const initialState: InstructionsSchema = {
    instruction: 'Для начала сессии нажмите на поле ввода или Space',
};

const instructionsSlice = createSlice({

    name: 'instructions',
    initialState,
    reducers: {

        setInstruction: (state, action: PayloadAction<string>) => {
            state.instruction = action.payload;
        },

    },

});

export const { actions: instructionsActions } = instructionsSlice;

export const { reducer: instructionsReducer } = instructionsSlice;
