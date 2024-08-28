import { useCheckValidPasswordMutation } from '../api/checkValidPasswordApi';
import { UpdateUserDataParams } from '../model/types/types';
import { toast } from 'react-toastify';

export const useCheckValidPassword = () => {

    const [checkValidPassword, { isLoading, data, error }] = useCheckValidPasswordMutation();

    const handleCheckValidPassword = async (data: UpdateUserDataParams) => {
        try {

            await checkValidPassword(data).unwrap();

        } catch (error) {

            if (error?.data?.message) {
                toast.error(error?.data?.message);
            } else {
                toast.error('Сервер не отвечает. Попробуйте позже');
            }

        }
    };

    return {
        data,
        error,
        isLoading,
        handleCheckValidPassword,
    };
};
