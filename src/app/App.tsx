import './styles/App.css';
import './styles/Themes.css';
import React, { Suspense } from 'react';
import { Loading } from 'shared/UI/Loading/Loading';
import { AppRouter } from './Providers/Router/Router';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

export const App = () => (
    <PageLayout>
        <Suspense fallback={<Loading />}>
            <AppRouter />
        </Suspense>
    </PageLayout>
);
