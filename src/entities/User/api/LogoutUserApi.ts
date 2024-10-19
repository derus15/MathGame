import { rtkApi } from 'shared/api/rtkApi';
import { toast } from 'react-toastify';

export const logoutApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        logoutUser: builder.query<any, void>({
            query: () => ({
                url: '/auth/logout',
            }),
            onQueryStarted: async (arg, { queryFulfilled }) => {
                try {

                    await queryFulfilled;
                    localStorage.removeItem('token');

                } catch (error) {
                    if (error?.error?.data?.message) {
                        toast.error(error.error.data.message);
                    } else {
                        toast.error('Сервер не отвечает. Попробуйте позже');
                    }
                }
            },
        }),
    }),
});

export const { useLazyLogoutUserQuery } = logoutApi;
