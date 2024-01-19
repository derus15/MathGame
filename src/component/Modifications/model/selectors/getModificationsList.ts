import { StateSchema } from 'redux/types';

export const getModificationsList = (state: StateSchema) => state.modifications.modificationsList;
