import { rtkApi } from 'shared/api/rtkApi';
import { userActions } from 'entities/User';
import { toast } from 'react-toastify';
import { RegisterParamsData, TokenSchema } from '../model/types/types';

const registerApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        registerByUsername: builder.mutation<TokenSchema, RegisterParamsData>({
            query: (body) => ({
                url: '/auth/register',
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

export const { useRegisterByUsernameMutation } = registerApi;
