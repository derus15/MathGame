import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User';

interface PrivateRouteProps {
    children: ReactNode,
    redirect: string
}

export const PrivateRoute:FC<PrivateRouteProps> = ({ children, redirect }) => {

    const isAuth = useSelector(getIsAuth);
    return isAuth ? children : <Navigate to={redirect} />;
};
