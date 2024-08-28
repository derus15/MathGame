import { rtkApi } from 'shared/api/rtkApi';
import { UpdateUserDataParams, UpdateUserDataSchema } from '../model/types/types';

const checkPassword = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        checkValidPassword: builder.mutation<UpdateUserDataSchema, UpdateUserDataParams>({
            query: (params) => ({
                url: '/user/checkPassword',
                method: 'POST',
                body: params,
            }),
        }),
    }),
});

export const { useCheckValidPasswordMutation } = checkPassword;
