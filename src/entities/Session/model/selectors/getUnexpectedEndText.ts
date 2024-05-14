import { StateSchema } from 'app/Providers/Store/types';

export const getUnexpectedEndText = (state: StateSchema) => state.session.unexpectedEndText;
