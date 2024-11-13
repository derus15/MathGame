import { rtkApi } from 'shared/api/rtkApi';
import { CardsListSchema } from 'widgets/CardsList/model/types';

const cardsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCardsList: build.query<CardsListSchema, void>({
            query: () => '/collection/cards',
            providesTags: ['Account', 'Session'],
        }),
    }),
});

export const { useGetCardsListQuery } = cardsListApi;
