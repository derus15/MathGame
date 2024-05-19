import { toast } from 'react-toastify';
import { rtkApi } from 'shared/api/rtkApi';
import { userDataActions } from 'features/UpdateUserData/model/slice/userDataSlice';

const checkPassword = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        checkValidPassword: builder.mutation({
            query: (params) => ({
                url: '/user/checkPassword',
                method: 'POST',
                body: params,
            }),
            async onQueryStarted(params, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(userDataActions.setIsValidPassword());
                    toast.error(data.message);

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

export const { useCheckValidPasswordMutation } = checkPassword;
