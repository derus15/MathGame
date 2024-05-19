import { toast } from 'react-toastify';
import { rtkApi } from 'shared/api/rtkApi';
import { ResponseMessage, UpdateUserDataParams } from '../model/types/types';

const updateDataApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserData: builder.mutation<ResponseMessage, UpdateUserDataParams>({
            query: (params) => ({
                url: '/user/changeData',
                method: 'PATCH',
                body: params,
            }),
            invalidatesTags: ['Account'],
            async onQueryStarted(params, { queryFulfilled }) {
                try {
                    
                    const { data } = await queryFulfilled;
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

export const { useUpdateUserDataMutation } = updateDataApi;
