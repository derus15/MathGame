import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './Slices/interfaceSlice';
import dataReducer from './Slices/dataSlice';
import authSlice from './Slices/authSlice';
import querySlice from './Slices/querySlice';

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        data: dataReducer,
        auth: authSlice,
        query: querySlice,
    },
});