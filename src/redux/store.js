import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './Slices/frontSlices/interfaceSlice';
import dataReducer from './Slices/frontSlices/sessionDataSlice';
import authSlice from './Slices/backSlices/authSlice';
import querySlice from './Slices/backSlices/accountSlice';
import exampleSlice from './Slices/frontSlices/exampleSlice';
// eslint-disable-next-line import/no-named-as-default
import activitiesSessionSlice from './Slices/frontSlices/activitiesSession';

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        sessionData: dataReducer,
        auth: authSlice,
        query: querySlice,
        example: exampleSlice,
        activities: activitiesSessionSlice,
    },
});
