import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './Slices/frontSlices/interfaceSlice';
import dataReducer from './Slices/frontSlices/dataSlice';
import authSlice from './Slices/backSlices/authSlice';
import querySlice from './Slices/backSlices/accountSlice';

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        data: dataReducer,
        auth: authSlice,
        query: querySlice,
    },
});
