import { rtkApi } from 'shared/api/rtkApi';
import { SessionDataSaveSchema } from '../types/types';
import { toast } from 'react-toastify';

const saveSessionData = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        saveSessionData: build.mutation<SessionDataSaveSchema, SessionDataSaveSchema>({
            query: (sessionData) => ({
                url: '/session',
                body: sessionData,
                method: 'POST',
            }),
            invalidatesTags: ['Session'],
            onQueryStarted: async (arg, { queryFulfilled }) => {
                try {

                    await queryFulfilled;

                } catch (error) {
                    console.log(error);
                    toast.error('Время сессии истекло, перезайдите в аккаунт');
                }
            },
        }),
    }),
});

export const { useSaveSessionDataMutation } = saveSessionData;
