import { rtkApi } from 'shared/api/rtkApi';
import { AccountDataSchema } from 'widgets/AccountUserInfo/model/types/types';
import { toast } from 'react-toastify';
import { userActions } from 'entities/User';

const accountInfo = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAccountInfo: build.query<AccountDataSchema, void>({
            query: () => ({
                url: '/account',
            }),
            providesTags: ['Session', 'Account'],
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {

                    const { data } = await queryFulfilled;

                } catch (error) {
                    dispatch(userActions.logout());
                    if (error?.error?.data?.message) {
                        toast.error('Время сессии истекло, перезайдите в аккаунт');
                    } else {
                        toast.error('Сервер не отвечает. Попробуйте позже');
                    }
                }
            },
        }),
    }),
});

export const { useGetAccountInfoQuery } = accountInfo;
