import { InterfaceSchema } from 'widgets/Interface';
import { ExampleSchema } from 'entities/Example';
import { AuthSchema } from '../../../redux/Slices/backSlices/auth/types';
import { ModificationsSchema } from 'features/Modifications';
import { SessionSchema } from 'entities/Session';
import { SessionDataSchema } from 'entities/SessionData';
import { AccountSchema } from 'features/FetchAccountData';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/LoginByUsername';
import { RegisterSchema } from 'features/RegisterByUsername';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    auth: AuthSchema,
    account: AccountSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
    user: UserSchema,
    login: LoginSchema,
    register: RegisterSchema,
}
