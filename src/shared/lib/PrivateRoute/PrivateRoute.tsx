import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/Providers/Store/types';

interface PrivateRouteProps {
    children: ReactNode,
    redirect: string
}

export const PrivateRoute:FC<PrivateRouteProps> = ({ children, redirect }) => {
    
    const isAuth = useSelector((state: StateSchema) => state.auth.isAuth);

    if (isAuth) {
        return children;
    }

    return <Navigate to={redirect} />;
};
