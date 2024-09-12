import './styles/App.css';
import './styles/Themes.css';
import React, { Suspense } from 'react';
import { Loading } from 'shared/UI/Loading/Loading';
import { useGetInitAuthDataQuery } from 'entities/User';
import { AppRouter } from './Providers/Router/Router';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

export const App = () => {

    const token = localStorage.getItem('token');
    useGetInitAuthDataQuery(undefined, { skip: !token });

    return (
        <PageLayout>
            <Suspense fallback={<Loading />}>
                <AppRouter />
            </Suspense>
        </PageLayout>
    );
};
