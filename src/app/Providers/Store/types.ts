import { InterfaceSchema } from 'widgets/Interface';
import { ExampleSchema } from 'entities/Example';
import { ModificationsSchema } from 'features/Modifications';
import { SessionSchema } from 'entities/Session';
import { SessionDataSchema } from 'entities/SessionData';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/LoginByUsername';
import { RegisterSchema } from 'features/RegisterByUsername';
import { InitAuthDataSchema } from 'widgets/Header';
import { UpdateUserDataSchema } from 'features/UpdateUserData';
import { HighlightBoardSchema } from 'widgets/AccountHighlightsBoards';
import { FactorySchema } from 'features/GameMods/FactoryMode';
import { InstructionsSchema } from 'widgets/Instructions';
import { HungerSchema } from 'features/GameMods/HungerMode';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
    user: UserSchema,
    login: LoginSchema,
    register: RegisterSchema,
    initAuthData: InitAuthDataSchema,
    userData: UpdateUserDataSchema,
    highlightBoard: HighlightBoardSchema,
    factoryMode: FactorySchema,
    instructions: InstructionsSchema,
    hungerMode: HungerSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
