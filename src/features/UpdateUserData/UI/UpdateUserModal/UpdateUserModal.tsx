import React from 'react';
import { CheckValidPassword } from '../CheckValidPassword/CheckValidPassword';
import { useCheckValidPassword } from '../../hooks/useCheckValidPassword';
import { UpdateUserData } from '../UpdateUserData/UpdateUserData';

export const UpdateUserModal = () => {

    const { handleCheckValidPassword, data, isLoading } = useCheckValidPassword();

    if (!data?.isValid) {
        return <CheckValidPassword action={handleCheckValidPassword} isLoading={isLoading} />;
    }

    return (
        <UpdateUserData />
    );
};
