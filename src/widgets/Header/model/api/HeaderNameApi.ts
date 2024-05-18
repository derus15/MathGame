import { rtkApi } from 'shared/api/rtkApi';
import { HeaderNameSchema } from '../types/types';

const headerNameApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getHeaderName: build.query<HeaderNameSchema, boolean>({
            query: () => '/account/name',
            providesTags: ['Account'],
        }),
    }),
});

export const { useGetHeaderNameQuery } = headerNameApi;
