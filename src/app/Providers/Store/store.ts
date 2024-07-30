import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from 'entities/Example';
import { interfaceReducer } from 'widgets/Interface';
import { modificationsReducer } from 'features/Modifications';
import { sessionReducer } from 'entities/Session';
import { sessionDataReducer } from 'entities/SessionData';
import { userReducer } from 'entities/User';
import { userDataReducer } from 'features/UpdateUserData';
import { factoryModeReducer } from 'features/GameMods/FactoryMode';
import { instructionsReducer } from 'widgets/Instructions';
import { hungerModeReducer } from 'features/GameMods/HungerMode';
import { rtkApi } from 'shared/api/rtkApi';
import { previousSessionDataReducer } from 'features/SessionDataComparison';

export const store = configureStore({
    reducer: {
        sessionData: sessionDataReducer,
        interface: interfaceReducer,
        example: exampleReducer,
        session: sessionReducer,
        modifications: modificationsReducer,
        user: userReducer,
        userData: userDataReducer,
        factoryMode: factoryModeReducer,
        instructions: instructionsReducer,
        hungerMode: hungerModeReducer,
        previousData: previousSessionDataReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type AppDispatch = typeof store.dispatch
