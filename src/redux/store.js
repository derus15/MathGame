import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './Slices/interfaceSlice';
import dataReducer from './Slices/dataSlice';

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        data: dataReducer,
    },
});