import { rtkApi } from 'shared/api/rtkApi';
import { AccountDataSchema } from 'widgets/AccountUserInfo/model/types/types';

const accountInfo = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAccountInfo: build.query<AccountDataSchema, void>({
            query: () => ({
                url: '/account',
            }),
            providesTags: ['Session', 'Account'],
        }),
    }),
});

export const { useGetAccountInfoQuery } = accountInfo;
