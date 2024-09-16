import { rtkApi } from 'shared/api/rtkApi';
import { SaveUserAvatarSchema } from '../model/types/types';

const saveUserAvatarApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        saveUserAvatar: builder.mutation<string, SaveUserAvatarSchema>({
            query: (body) => ({
                url: '/user/saveUserAvatar',
                method: 'POST',
                body,
                providesTags: ['Account'],
            }),
        }),
    }),
});

export const { useSaveUserAvatarMutation } = saveUserAvatarApi;
