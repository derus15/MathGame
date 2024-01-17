import { StateSchema } from 'redux/types';

export const getAnswer = (state: StateSchema) => state.example.answer;
