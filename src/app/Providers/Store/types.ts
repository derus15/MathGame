import { InterfaceSchema } from 'widgets/Interface';
import { ExampleSchema } from 'entities/Example';
import { ModificationsSchema } from 'features/Modifications';
import { SessionSchema } from 'entities/Session';
import { SessionDataSchema } from 'entities/SessionData';
import { UserSchema } from 'entities/User';
import { UpdateUserDataSchema } from 'features/UpdateUserData';
import { FactorySchema } from 'features/GameMods/FactoryMode';
import { InstructionsSchema } from 'widgets/Instructions';
import { HungerSchema } from 'features/GameMods/HungerMode';
import { rtkApi } from 'shared/api/rtkApi';
import { PreviousSessionDataSchema } from 'features/SessionDataComparison';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
    user: UserSchema,
    userData: UpdateUserDataSchema,
    factoryMode: FactorySchema,
    instructions: InstructionsSchema,
    hungerMode: HungerSchema,
    previousData: PreviousSessionDataSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
