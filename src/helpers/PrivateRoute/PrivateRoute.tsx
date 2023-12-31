import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../redux/types';

interface PrivateRouteProps {
    children: ReactNode,
    back: string
}

export const PrivateRoute:FC<PrivateRouteProps> = (props) => {

    const {
        children,
        back,
    } = props;
    
    const isAuth = useSelector((state: StateSchema) => state.auth.isAuth);

    if (isAuth) {
        return children;
    }

    return <Navigate to={back} />;
};
