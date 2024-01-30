import { StateSchema } from 'app/Providers/Store/types';

export const getModificationsList = (state: StateSchema) => state.modifications.modificationsList;
