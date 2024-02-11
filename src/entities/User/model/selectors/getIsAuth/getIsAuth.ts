import { StateSchema } from 'app/Providers/Store/types';

export const getIsAuth = (state: StateSchema) => state.user.isAuth;
