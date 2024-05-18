import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = __IS_DEV__ ? 'http://localhost:3020' : 'https://math-game.ru/';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery(
        { baseUrl: url,
            prepareHeaders: (headers) => {
                const token = localStorage.getItem('token');
                if (token) {
                    headers.set('Authorization', token);
                }
                return headers;
            },
        },
    ),
    tagTypes: ['Session', 'Account'],
    endpoints: (builder) => ({}),
});
