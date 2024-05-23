import { rtkApi } from 'shared/api/rtkApi';
import { HighlightBoardSchema } from '../model/types/types';
import { userActions } from 'entities/User';

const highlightBoard = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getHighlightBoard: build.query<HighlightBoardSchema, void>({
            query: () => ({
                url: '/account/highlight',
            }),
            providesTags: ['Session', 'Account'],
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {

                    const { data } = await queryFulfilled;

                } catch (error) {
                    dispatch(userActions.logout());
                }
            },
        }),
    }),
});

export const { useGetHighlightBoardQuery } = highlightBoard;
