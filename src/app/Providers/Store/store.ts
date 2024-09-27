import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from 'entities/Example';
import { modificationsReducer } from 'features/Modifications';
import { sessionReducer } from 'entities/Session';
import { sessionDataReducer } from 'entities/SessionData';
import { userReducer } from 'entities/User';
import { instructionsReducer } from 'widgets/Instructions';
import { hungerModeReducer } from 'features/GameMods/HungerMode';
import { rtkApi } from 'shared/api/rtkApi';
import { previousSessionDataReducer } from 'features/SessionDataComparison';
import { RootReducers } from './types';
import { sessionParamsReducer } from 'entities/SessionParams';

const rootReducers: RootReducers = {
    sessionData: sessionDataReducer,
    sessionParams: sessionParamsReducer,
    example: exampleReducer,
    session: sessionReducer,
    modifications: modificationsReducer,
    user: userReducer,
    instructions: instructionsReducer,
    hungerMode: hungerModeReducer,
    previousData: previousSessionDataReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
};

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});
