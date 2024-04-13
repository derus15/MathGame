import { StateSchema } from 'app/Providers/Store/types';

export const getAccountName = (state: StateSchema) => state.account.data?.user?.name;
