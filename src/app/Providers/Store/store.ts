import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../../redux/Slices/backSlices/auth/authSlice';
import { accountReducer } from '../../../redux/Slices/backSlices/account/accountSlice';
import { exampleReducer } from 'entities/Example';
import { interfaceReducer } from 'widgets/Interface';
import { modificationsReducer } from 'features/Modifications';
import { sessionReducer } from 'entities/Session';
import { sessionDataReducer } from 'entities/SessionData';

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
