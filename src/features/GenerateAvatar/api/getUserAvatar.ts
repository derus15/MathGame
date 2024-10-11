import { rtkApi } from 'shared/api/rtkApi';
import { GenerateAvatarData } from '../model/types/types';

const userAvatarApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserAvatar: build.query<GenerateAvatarData, void>({
            query: () => '/user/userAvatar',
            providesTags: ['Account', 'Avatar'],
        }),
    }),
});

export const { useGetUserAvatarQuery } = userAvatarApi;
