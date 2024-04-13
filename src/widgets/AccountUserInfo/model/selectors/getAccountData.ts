import { StateSchema } from 'app/Providers/Store/types';

export const getAccountData = (state: StateSchema) => state.account.data;
