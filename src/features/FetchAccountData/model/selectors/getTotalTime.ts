import { StateSchema } from 'app/Providers/Store/types';

export const getTotalTime = (state: StateSchema) => state.account.data?.counterTime?.[0]?.total_time;
