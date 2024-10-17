import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = __IS_DEV__ ? 'http://localhost:3020' : 'https://math-game.ru/';

export const baseQuery = fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            headers.set('Authorization', accessToken);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 403 && args.url !== '/auth/refresh') {

        const { data }: any = await baseQuery('/auth/refresh', api, extraOptions);
        localStorage.setItem('token', data.accessToken);

        result = await baseQuery(args, api, extraOptions);

    }

    return result;
};

export const rtkApi = createApi({
    tagTypes: ['Session', 'Account', 'Avatar'],
    reducerPath: 'rtkApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
