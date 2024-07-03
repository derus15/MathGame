import { rtkApi } from 'shared/api/rtkApi';
import { SessionDataSaveSchema } from '../types/types';

const saveSessionData = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        saveSessionData: build.mutation<SessionDataSaveSchema, SessionDataSaveSchema>({
            query: (sessionData) => ({
                url: '/session',
                body: sessionData,
                method: 'POST',
            }),
            invalidatesTags: ['Session'],
        }),
    }),
});

export const { useSaveSessionDataMutation } = saveSessionData;
