import { SessionDataSchema } from './Slices/frontSlices/sessionData/types';
import { InterfaceSchema } from 'component/Interface';
import { ExampleSchema } from 'component/Example';
import { AuthSchema } from './Slices/backSlices/auth/types';
import { AccountSchema } from './Slices/backSlices/account/types';
import { ModificationsSchema } from 'component/Modifications';
import { SessionSchema } from 'component/Session';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    auth: AuthSchema,
    account: AccountSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
}
