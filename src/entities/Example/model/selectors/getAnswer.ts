import { StateSchema } from 'app/Providers/Store/types';

export const getAnswer = (state: StateSchema) => state.example.answer;
