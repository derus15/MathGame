import { StateSchema } from 'app/Providers/Store/types';

export const getUpdateDataLoadingStatus = (state: StateSchema) => state.userData.loadingStatus;
