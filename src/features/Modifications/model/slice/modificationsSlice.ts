import { createSlice } from '@reduxjs/toolkit';
import { ModificationsSchema } from './types';

const initialState: ModificationsSchema = {
    modificationsList: JSON.parse(localStorage.getItem('modificationsList')) || [],
};

const modificationsSlice = createSlice({

    name: 'Modifications',
    initialState,
    reducers: {
        
        changeModifications: (state, action) => {
            if (state.modificationsList.includes(action.payload)) {
                state.modificationsList = state.modificationsList.filter((mod) => mod !== action.payload);
            } else {
                state.modificationsList = [...state.modificationsList, action.payload];
            }
            localStorage.setItem('modificationsList', JSON.stringify(state.modificationsList));
        },
        
    },

});

export const { actions: modificationsActions } = modificationsSlice;

export const { reducer: modificationsReducer } = modificationsSlice;
