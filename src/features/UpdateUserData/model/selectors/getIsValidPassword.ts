import { StateSchema } from 'app/Providers/Store/types';

export const getIsValidPassword = (state: StateSchema) => state.userData.isValid;
