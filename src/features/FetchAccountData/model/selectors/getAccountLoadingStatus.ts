import { StateSchema } from 'app/Providers/Store/types';

export const getAccountLoadingStatus = (state: StateSchema) => state.account.status;
