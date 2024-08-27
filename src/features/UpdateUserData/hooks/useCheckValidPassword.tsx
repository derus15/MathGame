import { useCheckValidPasswordMutation } from '../api/checkValidPasswordApi';
import { UpdateUserDataParams } from '../model/types/types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userDataActions } from '../model/slice/userDataSlice';

export const useCheckValidPassword = () => {

    const dispatch = useDispatch();
    const [checkValidPassword, { isLoading }] = useCheckValidPasswordMutation();

    const handleCheckValidPassword = async (data: UpdateUserDataParams) => {
        try {

            await checkValidPassword(data).unwrap();
            dispatch(userDataActions.setIsValidPassword());

        } catch (error) {

            if (error?.data?.message) {
                toast.error(error?.data?.message);
            } else {
                toast.error('Сервер не отвечает. Попробуйте позже');
            }

            dispatch(userDataActions.resetIsValidPassword());
        }
    };

    return {
        isLoading,
        handleCheckValidPassword,
    };
};
