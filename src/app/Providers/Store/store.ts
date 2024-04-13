import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from 'entities/Example';
import { interfaceReducer } from 'widgets/Interface';
import { modificationsReducer } from 'features/Modifications';
import { sessionReducer } from 'entities/Session';
import { sessionDataReducer } from 'entities/SessionData';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/LoginByUsername';
import { registerReducer } from 'features/RegisterByUsername';
import { initAuthDataReducer } from 'widgets/Header';
import { userDataReducer } from 'features/UpdateUserData';
import { highlightBoardReducer } from 'widgets/AccountHighlightsBoards';
import { factoryModeReducer } from 'features/GameModes/FactoryMode';
import { accountReducer } from 'widgets/AccountUserInfo';

export const store = configureStore({
    reducer: {
        sessionData: sessionDataReducer,
        interface: interfaceReducer,
        example: exampleReducer,
        account: accountReducer,
        session: sessionReducer,
        modifications: modificationsReducer,
        user: userReducer,
        login: loginReducer,
        register: registerReducer,
        initAuthData: initAuthDataReducer,
        userData: userDataReducer,
        highlightBoard: highlightBoardReducer,
        factoryMode: factoryModeReducer,
    },
});

export type AppDispatch = typeof store.dispatch
