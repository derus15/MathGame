import { rtkApi } from 'shared/api/rtkApi';
import { HighlightBoardSchema } from '../model/types/types';

const highlightBoard = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getHighlightBoard: build.query<HighlightBoardSchema, void>({
            query: () => ({
                url: '/account/highlight',
            }),
            providesTags: ['Session', 'Account'],
        }),
    }),
});

export const { useGetHighlightBoardQuery } = highlightBoard;
