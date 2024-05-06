import { StateSchema } from 'app/Providers/Store/types';

export const getInstructionText = (state: StateSchema) => state.instructions.instruction;
