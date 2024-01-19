import { SessionDataSchema } from './Slices/frontSlices/sessionData/types';
import { InterfaceSchema } from 'component/Interface';
import { ExampleSchema } from 'component/Example';
import { AuthSchema } from './Slices/backSlices/auth/types';
import { AccountSchema } from './Slices/backSlices/account/types';
import { ActivitiesSessionSchema } from './Slices/frontSlices/activitiesSession/types';
import { ModificationsSchema } from 'component/Modifications';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    auth: AuthSchema,
    account: AccountSchema,
    activities: ActivitiesSessionSchema,
    modifications: ModificationsSchema,
}
