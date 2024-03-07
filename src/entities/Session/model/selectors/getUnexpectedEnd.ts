import { StateSchema } from 'app/Providers/Store/types';

export const getUnexpectedEnd = (state: StateSchema) => state.session.unexpectedEnd;
