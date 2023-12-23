import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Slices/backSlices/auth/authSlice';
import { accountReducer } from './Slices/backSlices/account/accountSlice';
import { activitiesSessionReducer } from './Slices/frontSlices/activitiesSession/activitiesSession';
import { exampleReducer } from './Slices/frontSlices/example/exampleSlice';
import { sessionDataReducer } from './Slices/frontSlices/sessionData/sessionDataSlice';
import { interfaceReducer } from './Slices/frontSlices/interface/interfaceSlice';

export const store = configureStore({
    reducer: {
        sessionData: sessionDataReducer,
        interface: interfaceReducer,
        example: exampleReducer,
        auth: authReducer,
        query: accountReducer,
        activities: activitiesSessionReducer,
    },
});
