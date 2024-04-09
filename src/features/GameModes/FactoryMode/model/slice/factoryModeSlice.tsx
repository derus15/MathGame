import { createSlice } from '@reduxjs/toolkit';
import { FactorySchema } from 'features/GameModes/FactoryMode/model/slice/types';

const initialState: FactorySchema = {
    exampleProduce: 0,
};

const factoryModeSlice = createSlice({

    name: 'factoryModeSlice',
    initialState,
    reducers: {

        incrementExample: (state) => {
            state.exampleProduce += 1;
        },

        resetExample: (state) => {
            state.exampleProduce = 0;
        },
        
    },
});

export const { actions: factoryModeActions } = factoryModeSlice;

export const { reducer: factoryModeReducer } = factoryModeSlice;
