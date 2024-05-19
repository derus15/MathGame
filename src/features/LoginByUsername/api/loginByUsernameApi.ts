import { userActions } from 'entities/User';
import { toast } from 'react-toastify';
import { LoginParamsData, TokenSchema } from '../model/types/types';
import { rtkApi } from 'shared/api/rtkApi';

const authApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        loginByUsername: builder.mutation<TokenSchema, LoginParamsData>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Account'],
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(userActions.setAuth(true));
                    localStorage.setItem('token', data.token);
                    
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

export const { useLoginByUsernameMutation } = authApi;
