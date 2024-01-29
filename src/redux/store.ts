import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Slices/backSlices/auth/authSlice';
import { accountReducer } from './Slices/backSlices/account/accountSlice';
import { exampleReducer } from 'component/Example';
import { sessionDataReducer } from './Slices/frontSlices/sessionData/sessionDataSlice';
import { interfaceReducer } from 'component/Interface';
import { modificationsReducer } from 'component/Modifications';
import { sessionReducer } from 'component/Session';

export const store = configureStore({
    reducer: {
        sessionData: sessionDataReducer,
        interface: interfaceReducer,
        example: exampleReducer,
        auth: authReducer,
        account: accountReducer,
        session: sessionReducer,
        modifications: modificationsReducer,
    },
});
