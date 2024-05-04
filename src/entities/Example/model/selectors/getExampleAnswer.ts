import { StateSchema } from 'app/Providers/Store/types';

export const getExampleAnswer = (state: StateSchema) => state.example.answer;
