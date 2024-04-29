import { StateSchema } from 'app/Providers/Store/types';

export const getHungerPoints = (state: StateSchema) => state.hungerMode.hungerPoints;
