import { StateSchema } from '../../../../redux/types';

export const getSignsList = (state: StateSchema) => state.interface.signList;
