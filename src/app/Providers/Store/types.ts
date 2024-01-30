import { SessionDataSchema } from '../../../redux/Slices/frontSlices/sessionData/types';
import { InterfaceSchema } from 'widgets/Interface';
import { ExampleSchema } from 'entities/Example';
import { AuthSchema } from '../../../redux/Slices/backSlices/auth/types';
import { AccountSchema } from '../../../redux/Slices/backSlices/account/types';
import { ModificationsSchema } from 'features/Modifications';
import { SessionSchema } from 'entities/Session';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    auth: AuthSchema,
    account: AccountSchema,
    session: SessionSchema,
    modifications: ModificationsSchema,
}
