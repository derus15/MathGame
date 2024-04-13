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
import { FactorySchema } from 'features/GameModes/FactoryMode';
import { AccountSchema } from 'widgets/AccountUserInfo';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    account: AccountSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
    user: UserSchema,
    login: LoginSchema,
    register: RegisterSchema,
    initAuthData: InitAuthDataSchema,
    userData: UpdateUserDataSchema,
    highlightBoard: HighlightBoardSchema,
    factoryMode: FactorySchema,
}
