import { SessionDataSchema } from './Slices/frontSlices/sessionData/types';
import { InterfaceSchema } from './Slices/frontSlices/interface/types';
import { ExampleSchema } from './Slices/frontSlices/example/types';
import { AuthSchema } from './Slices/backSlices/auth/types';
import { AccountSchema } from './Slices/backSlices/account/types';
import { ActivitiesSessionSchema } from './Slices/frontSlices/activitiesSession/types';

export interface StateSchema {
    sessionData: SessionDataSchema,
    interface: InterfaceSchema,
    example: ExampleSchema,
    auth: AuthSchema,
    query: AccountSchema,
    activities: ActivitiesSessionSchema
}
