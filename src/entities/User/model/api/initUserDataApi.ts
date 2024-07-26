import { rtkApi } from 'shared/api/rtkApi';
import { userActions } from 'entities/User';
import { toast } from 'react-toastify';

const initAuthData = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getInitAuthData: build.query<string, void>({
            query: () => ({
                url: '/auth/init',
            }),
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {

                    await queryFulfilled;
                    dispatch(userActions.setAuth(true));

                } catch (error) {
                    if (error.code === 'ERR_NETWORK') {
                        toast.error('Ошибка сервера. Перезайдите в аккаунт');
                    } else if (error?.error?.data?.message) {
                        toast.error('Время сессии истекло, перезайдите в аккаунт');
                    }
                    dispatch(userActions.logout());
                }
            },
        }),
    }),
});

export const { useGetInitAuthDataQuery } = initAuthData;
