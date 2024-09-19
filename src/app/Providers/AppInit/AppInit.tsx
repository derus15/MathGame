import React, { ReactNode } from 'react';
import { useGetInitAuthDataQuery } from 'entities/User';

interface AppInitProps {
    children: ReactNode
}

export const AppInit = ({ children }: AppInitProps) => {

    const token = localStorage.getItem('token');
    useGetInitAuthDataQuery(undefined, { skip: !token });

    return (
        <div>
            {children}
        </div>
    );
};
