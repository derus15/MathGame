import { StateSchema } from 'app/Providers/Store/types';

export const getTotalExample = (state: StateSchema) => state.account.data?.counterExample?.[0]?.total_example;
