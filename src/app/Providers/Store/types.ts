import { ExampleSchema } from 'entities/Example';
import { ModificationsSchema } from 'features/Modifications';
import { SessionSchema } from 'entities/Session';
import { SessionDataSchema } from 'entities/SessionData';
import { UserSchema } from 'entities/User';
import { InstructionsSchema } from 'widgets/Instructions';
import { HungerSchema } from 'features/GameMods/HungerMode';
import { rtkApi } from 'shared/api/rtkApi';
import { PreviousSessionDataSchema } from 'features/SessionDataComparison';
import { Reducer } from '@reduxjs/toolkit';
import { store } from './store';
import { SessionParamsSchema } from 'entities/SessionParams';
import { BoosterPackSchema } from 'features/BoosterPack';

export interface StateSchema {
    sessionData: SessionDataSchema,
    sessionParams: SessionParamsSchema,
    example: ExampleSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
    user: UserSchema,
    instructions: InstructionsSchema,
    hungerMode: HungerSchema,
    previousData: PreviousSessionDataSchema,
    boosterPack: BoosterPackSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type RootReducers = Record<keyof StateSchema, Reducer>

export type AppDispatch = typeof store.dispatch
