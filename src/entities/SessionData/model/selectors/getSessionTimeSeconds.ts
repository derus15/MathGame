import { StateSchema } from 'app/Providers/Store/types';

export const getSessionTimeSeconds = (state: StateSchema) => {
    return Math.floor((state.sessionData.sessionTime) / 1000);
};
